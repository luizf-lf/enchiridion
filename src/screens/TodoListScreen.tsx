import {
  ActivityIndicator,
  Button,
  Text,
  TextInput,
} from '@react-native-material/core';
import React, { useEffect, useState } from 'react';
import { Alert, TouchableOpacity, View } from 'react-native';
import { appColors, cardColor, textColor } from '../constants/colors';
import { globalStyles } from '../constants/globalStyles';
import firestore from '@react-native-firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';
import TaskInterface from '../interfaces/TaskInterface';
import TaskItem from '../components/TaskItem';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContext } from '@react-navigation/native';
import { useFirebaseAuth } from '../context/AuthContext';

function TodoListScreen() {
  const [taskInput, setTaskInput] = useState('');
  const [isSavingTask, setIsSavingTask] = useState(false);
  const [fireData, setFireData] = useState([] as TaskInterface[]);
  const tasksCollectionRef = firestore().collection('Tasks');
  const navigation = React.useContext(NavigationContext);
  const { user } = useFirebaseAuth();

  useEffect(() => {
    if (user) {
      const subscriber = tasksCollectionRef
        .where('taskOwnerUid', '==', user.uid)
        .orderBy('date', 'desc')
        .onSnapshot(
          dataSnapshot => {
            console.log('Firebase Tasks snapshot updated at ' + new Date());
            const items = [] as TaskInterface[];
            dataSnapshot.forEach(fireItem => {
              const { date, description, done, title, images } =
                fireItem.data();
              items.push({
                id: fireItem.id,
                date,
                description,
                done,
                title,
                images,
              });
            });
            setFireData(items);
          },
          error => {
            Alert.alert('There was an error recovering the Tasks data.');
            console.error('Error recovering Tasks: ' + error);
          },
        );

      return () => subscriber();
    }
  }, []);

  const handleTaskSubmit = () => {
    if (taskInput.length > 0) {
      setIsSavingTask(true);
      tasksCollectionRef
        .add({
          date: Date.now(),
          title: taskInput,
          description: null,
          done: false,
          doneAt: null,
          taskOwnerUid: user?.uid,
        })
        .then(() => {
          setTaskInput('');
        })
        .catch(e => {
          Alert.alert('There was an error saving a new task. Try again later.');
          console.error('Error on adding a new task: ' + e);
        })
        .finally(() => setIsSavingTask(false));
    }
  };

  return (
    <View
      style={{
        ...globalStyles.viewContainer,
        justifyContent: 'space-between',
        flexGrow: 1,
      }}>
      {!user ? (
        <View>
          <Text color={textColor} variant="h5" style={{ marginBottom: 4 }}>
            Todo List
          </Text>
          <Text color={appColors.red} style={{ marginBottom: 16 }}>
            You must login in order to use the Todo List app.
          </Text>
          <Button
            title="Login"
            leading={<Icon name="vpn-key" size={24} color="#FFF" />}
            onPress={() => navigation?.navigate('Login')}
            style={{ marginBottom: 16, backgroundColor: appColors.primary }}
          />
        </View>
      ) : (
        <>
          <Text color={textColor} variant="h5" style={{ marginBottom: 4 }}>
            Todo List
          </Text>
          <FlatList
            data={fireData}
            keyExtractor={data => data.id}
            renderItem={data => (
              <TaskItem data={data} navigation={navigation} />
            )}
            ListEmptyComponent={() => (
              <View style={{ flexGrow: 1, alignItems: 'center' }}>
                <Text color={textColor} variant="caption">
                  No Items
                </Text>
              </View>
            )}
            style={{ flex: 1 }}
          />
          <TextInput
            placeholder="Enter your task here."
            value={taskInput}
            onChangeText={input => setTaskInput(input)}
            onEndEditing={handleTaskSubmit}
            inputStyle={{
              color: textColor,
            }}
            trailing={
              isSavingTask ? (
                <ActivityIndicator size="large" />
              ) : (
                <TouchableOpacity onPress={handleTaskSubmit}>
                  <Icon name="send" size={24} />
                </TouchableOpacity>
              )
            }
            inputContainerStyle={{
              backgroundColor: cardColor,
            }}
          />
        </>
      )}
    </View>
  );
}

export default TodoListScreen;
