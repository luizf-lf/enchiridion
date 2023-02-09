import { Surface, Text } from '@react-native-material/core';
import { CheckBox } from '@rneui/themed';
import React from 'react';
import { Alert, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { cardColor, textColor } from '../constants/colors';
import TaskInterface from '../interfaces/TaskInterface';
import firestore from '@react-native-firebase/firestore';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
        onPress: () => tasksRef.doc(id).delete(),
        style: 'destructive',
      },
      {
        text: 'Cancel',
      },
    ]);
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
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View>
          <CheckBox checked={data.item.done} onIconPress={handleStatusUpdate} />
        </View>
        <View>
          <Text
            color={textColor}
            style={
              data.item.done
                ? {
                    textDecorationLine: 'line-through',
                  }
                : {}
            }>
            {data.item.title}
          </Text>
          {data.item.description && (
            <Text color={textColor} variant="caption">
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
    </Surface>
  );
}

export default TaskItem;
