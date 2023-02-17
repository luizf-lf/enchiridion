import { Surface, Text } from '@react-native-material/core';
import { CheckBox } from '@rneui/themed';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  ListRenderItemInfo,
  Platform,
  StyleSheet,
  ToastAndroid,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { cardColor, textColor } from '../constants/colors';
import TaskInterface from '../interfaces/TaskInterface';
import firestore from '@react-native-firebase/firestore';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Storage from '@react-native-firebase/storage';

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 64,
  },
});

interface Props {
  data: ListRenderItemInfo<TaskInterface>;
  navigation: any;
}

function TaskItem({ data, navigation }: Props) {
  const id = data.item.id;
  const tasksRef = firestore().collection('Tasks');
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStatusUpdate = () => {
    tasksRef.doc(id).update({
      done: !data.item.done,
      doneAt: data.item.done ? null : Date.now(),
    });
  };

  const confirmDeleteTask = () => {
    Alert.alert('Delete task?', 'This action is irreversible', [
      {
        text: 'Delete',
        onPress: () => deleteTaskWithImages(id),
        style: 'destructive',
      },
      {
        text: 'Cancel',
      },
    ]);
  };

  const deleteTaskWithImages = async (taskId: string) => {
    try {
      setIsUpdating(true);
      const imageList = await Storage().ref(`/Tasks/${taskId}`).listAll();
      for (let i = 0; i < imageList.items.length; i++) {
        await Storage().ref(imageList.items[i].fullPath).delete();
      }
      await tasksRef.doc(taskId).delete();

      if (Platform.OS === 'android') {
        ToastAndroid.show('Task deleted', 5000);
      }
    } catch (error) {
      Alert.alert('Error', 'Unable to delete this task. Try again later.');
      console.error(`deleteTaskWithImages: Could not delete task: ${error}`);
    }
  };

  return (
    <Surface
      elevation={1}
      style={{
        backgroundColor: cardColor,
        padding: 8,
        borderRadius: 8,
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      {isUpdating ? (
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            flexGrow: 1,
          }}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View>
              <CheckBox
                checked={data.item.done}
                onIconPress={handleStatusUpdate}
                containerStyle={{
                  backgroundColor: cardColor,
                }}
              />
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  color={textColor}
                  style={
                    data.item.done
                      ? {
                          textDecorationLine: 'line-through',
                        }
                      : {}
                  }>
                  {data.item.title.length > 15
                    ? data.item.title.slice(0, 15) + '...'
                    : data.item.title}
                </Text>
                {data.item.images && data.item.images.length > 0 ? (
                  <Icon
                    name="image"
                    size={16}
                    style={{
                      marginLeft: 8,
                    }}
                  />
                ) : (
                  <></>
                )}
              </View>
              {data.item.description && (
                <Text
                  color={textColor}
                  variant="caption"
                  style={
                    data.item.done
                      ? {
                          textDecorationLine: 'line-through',
                        }
                      : {}
                  }>
                  {data.item.description}
                </Text>
              )}

              <Text color={textColor} variant="caption">
                {new Date(data.item.date).toLocaleString('pt')}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 4,
            }}>
            <TouchableOpacity
              containerStyle={styles.button}
              onPress={() =>
                navigation?.navigate('Edit Task', {
                  taskId: data.item.id,
                })
              }>
              <Icon name="mode-edit" size={24} />
            </TouchableOpacity>
            <TouchableOpacity
              containerStyle={styles.button}
              onPress={confirmDeleteTask}>
              <Icon name="delete" size={24} color="#CF0A0A" />
            </TouchableOpacity>
          </View>
        </>
      )}
    </Surface>
  );
}

export default TaskItem;
