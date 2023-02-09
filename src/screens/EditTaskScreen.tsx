import { Text, TextInput } from '@react-native-material/core';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { textColor } from '../constants/colors';
import { globalStyles } from '../constants/globalStyles';
import firestore from '@react-native-firebase/firestore';
import TaskInterface from '../interfaces/TaskInterface';

function EditTaskScreen() {
  const route = useRoute() as any;
  const tasksCollectionRef = firestore().collection('Tasks');
  const [taskData, setTaskData] = useState(
    null as {
      date: number;
      description?: string;
      done: boolean;
      title: string;
    } | null,
  );

  useEffect(() => {
    if (route.params) {
      // setTaskId(route.params.taskId);
      tasksCollectionRef
        .doc(route.params.taskId)
        .get()
        .then(dataSnap => {
          if (dataSnap.exists) {
            const { date, description, done, title } =
              dataSnap.data() as TaskInterface;
            setTaskData({ date, description, done, title });
          }
        });
    }
  }, []);

  return (
    <SafeAreaView style={globalStyles.viewContainer}>
      <Text variant="h5" color={textColor} style={{ marginBottom: 8 }}>
        Edit Task
      </Text>

      <Text color={textColor}>Title</Text>
      <TextInput value={taskData?.title} />
      <Text color={textColor}>Description</Text>
      <TextInput value={taskData?.description} />
    </SafeAreaView>
  );
}

export default EditTaskScreen;
