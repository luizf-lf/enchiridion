import {
  Button,
  ListItem,
  Switch,
  Text,
  TextInput,
} from '@react-native-material/core';
import { NavigationContext, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, SafeAreaView } from 'react-native';
import { bgColor, textColor } from '../constants/colors';
import { globalStyles } from '../constants/globalStyles';
import firestore from '@react-native-firebase/firestore';
import TaskInterface from '../interfaces/TaskInterface';
import Icon from 'react-native-vector-icons/MaterialIcons';

function EditTaskScreen() {
  const route = useRoute() as any;
  const tasksCollectionRef = firestore().collection('Tasks');
  const navigation = React.useContext(NavigationContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDone, setTaskIsDone] = useState(false);
  const [taskDate, setTaskDate] = useState(0);
  const [isSavingData, setIsSavingData] = useState(false);

  const handleDataUpdate = async () => {
    try {
      setIsSavingData(true);

      await tasksCollectionRef.doc(route.params.taskId).update({
        title: taskTitle,
        description: taskDescription,
        done: taskDone,
        doneAt: taskDone ? Date.now() : null,
      });

      navigation?.goBack();
    } catch (error) {
      Alert.alert('Error', 'Could not update task data. Try again later.');
      console.error('Could not update task: ' + error);
    } finally {
      setIsSavingData(false);
    }
  };

  useEffect(() => {
    if (route.params) {
      tasksCollectionRef
        .doc(route.params.taskId)
        .get()
        .then(dataSnap => {
          if (dataSnap.exists) {
            const { date, description, done, title } =
              dataSnap.data() as TaskInterface;

            setTaskTitle(title);
            setTaskDescription(description || '');
            setTaskIsDone(done);
            setTaskDate(date);
          }
        });
    }
  }, []);

  return (
    <SafeAreaView style={globalStyles.viewContainer}>
      <Text variant="h5" color={textColor} style={{ marginBottom: 16 }}>
        Edit Task
      </Text>

      <Text variant="caption" color={textColor} style={{ marginBottom: 8 }}>
        Task created at {new Date(taskDate).toLocaleString('pt')}
      </Text>
      <Text color={textColor} variant="caption">
        Title
      </Text>
      <TextInput
        value={taskTitle}
        variant="standard"
        style={{ marginBottom: 8 }}
        onChangeText={text => setTaskTitle(text)}
      />
      <Text color={textColor} variant="caption">
        Description
      </Text>
      <TextInput
        value={taskDescription}
        variant="standard"
        style={{ marginBottom: 8 }}
        onChangeText={text => setTaskDescription(text)}
      />
      <ListItem
        title="Done"
        trailing={
          <Switch
            value={taskDone}
            onValueChange={() => setTaskIsDone(!taskDone)}
          />
        }
        onPress={() => setTaskIsDone(!taskDone)}
      />
      <Button
        title={isSavingData ? 'Saving' : 'Save'}
        leading={
          isSavingData ? (
            <ActivityIndicator color={bgColor} />
          ) : (
            <Icon name="save" size={18} color={bgColor} />
          )
        }
        style={{ marginTop: 16 }}
        onPress={handleDataUpdate}
      />
    </SafeAreaView>
  );
}

export default EditTaskScreen;
