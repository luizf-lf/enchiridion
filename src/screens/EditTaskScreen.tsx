import {
  Button,
  ListItem,
  Switch,
  Text,
  TextInput,
} from '@react-native-material/core';
import { NavigationContext, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import { bgColor, textColor } from '../constants/colors';
import { globalStyles } from '../constants/globalStyles';
import TaskInterface from '../interfaces/TaskInterface';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { launchCamera } from 'react-native-image-picker';
import { Platform } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

function EditTaskScreen() {
  const route = useRoute() as any;
  const tasksCollectionRef = firestore().collection('Tasks');
  const navigation = React.useContext(NavigationContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDone, setTaskIsDone] = useState(false);
  const [taskDate, setTaskDate] = useState(0);
  const [taskImages, setTaskImages] = useState([] as string[]);
  const [isSavingData, setIsSavingData] = useState(false);
  const [isSavingImage, setIsSavingImage] = useState(false);

  const handleAddImage = async () => {
    if (Platform.OS === 'android') {
      const permissionResult = await PermissionsAndroid.request(
        'android.permission.CAMERA',
      );
      if (!(permissionResult === PermissionsAndroid.RESULTS.GRANTED)) {
        Alert.alert(
          'Permission Denied',
          'You will not be able to add images to this task.',
        );
        return;
      }
      try {
        const image = await launchCamera({
          mediaType: 'photo',
        });

        if (image.assets) {
          const { fileName, uri } = image.assets[0];
          if (fileName && uri) {
            setIsSavingImage(true);
            const imageRef = storage().ref(
              `Tasks/${route.params.taskId}/${
                Date.now() + fileName.split('.')[1]
              }`,
            );
            await imageRef.putFile(uri);
            ToastAndroid.show('Image uploaded', 5000);
            const imageUrl = await imageRef.getDownloadURL();
            await tasksCollectionRef.doc(route.params.taskId).update({
              images: [imageUrl, ...taskImages],
            });

            setTaskImages([imageUrl, ...taskImages]);
            setIsSavingImage(false);
          }
        }
      } catch (error) {
        Alert.alert('Error', 'Unable to upload image. Try again soon.');
        console.error('Error when adding a new image: ' + error);
      }
    }
  };

  const handleDataUpdate = async () => {
    try {
      if (isSavingData) return;
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
            const { date, description, done, title, images } =
              dataSnap.data() as TaskInterface;

            setTaskTitle(title);
            setTaskDescription(description || '');
            setTaskIsDone(done);
            setTaskDate(date);
            setTaskImages(images || []);
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

      <Text
        color={textColor}
        variant="caption"
        style={{ marginTop: 16, marginBottom: 8 }}>
        Images
      </Text>
      <ScrollView horizontal>
        <TouchableOpacity
          style={{
            borderStyle: 'dashed',
            borderWidth: 2,
            borderRadius: 8,
            paddingHorizontal: 16,
            borderColor: textColor,
            flexGrow: 1,
            justifyContent: 'center',
          }}
          onPress={handleAddImage}>
          {isSavingImage ? (
            <ActivityIndicator />
          ) : (
            <Icon name="camera-alt" size={24} />
          )}
        </TouchableOpacity>
        {taskImages.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={{ height: 96, width: 96, borderRadius: 8, marginLeft: 8 }}
          />
        ))}
      </ScrollView>

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
