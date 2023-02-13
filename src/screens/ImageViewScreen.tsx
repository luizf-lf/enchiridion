import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Text } from '@react-native-material/core';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContext,
  useRoute,
} from '@react-navigation/native';
import { Alert, Image, SafeAreaView, StyleSheet, View } from 'react-native';
import { globalStyles } from '../constants/globalStyles';
import { TaskImageRefInterface } from '../interfaces/TaskInterface';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { appColors } from '../constants/colors';
import Storage from '@react-native-firebase/storage';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 16,
  },
  body: {
    alignItems: 'center',
  },
  backButton: {
    padding: 8,
    borderRadius: 32,
  },
});

function ImageViewScreen() {
  const route = useRoute() as any;
  const navigation = React.useContext(NavigationContext);
  const image = route.params.image as TaskImageRefInterface;
  const taskId = route.params.taskId;
  const taskImages = route.params.allImages as TaskImageRefInterface[];
  const [imageUri, setImageUri] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const colors = {
    white: DefaultTheme.colors.background,
    dark: DarkTheme.colors.background,
  };

  // TODO: Optimize to a exported function (also remove from edit task)
  const confirmDeleteImage = () => {
    Alert.alert('Delete image?', 'This action is irreversible', [
      {
        text: 'Yes',
        onPress: () => deleteImage(image),
      },
      {
        text: 'No',
        isPreferred: true,
      },
    ]);
  };

  const deleteImage = async (image: TaskImageRefInterface) => {
    try {
      setIsDeleting(true);
      await storage().ref(image.ref).delete();
      await firestore()
        .collection('Tasks')
        .doc(taskId)
        .update({
          images: taskImages.filter(item => item.ref !== image.ref),
        });
      navigation?.goBack();
    } catch (error) {
      console.error(`deleteImage: Could not delete image: ${error}`);
    }
  };

  useEffect(() => {
    const getImageUrl = async () => {
      setImageUri(await Storage().ref(image.ref).getDownloadURL());
    };

    getImageUrl();
  }, []);

  return (
    <SafeAreaView
      style={{
        ...globalStyles.viewContainer,
        backgroundColor: colors.dark,
        flexGrow: 1,
        justifyContent: 'space-between',
      }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Icon name="arrow-back" size={24} color={colors.white} />
        </TouchableOpacity>
        <Text variant="h5" color={colors.white}>
          View Image
        </Text>
      </View>
      <View style={styles.body}>
        {imageUri === '' ? (
          <ActivityIndicator size="large" color={colors.white} />
        ) : (
          <Image
            source={{
              uri: imageUri,
            }}
            style={{
              height: '85%',
              width: '100%',
              borderRadius: 16,
            }}
            resizeMode="contain"
          />
        )}
      </View>
      <View>
        <Button
          variant="text"
          title={isDeleting ? 'Deleting' : 'Delete'}
          color={appColors.red}
          tintColor={appColors.red}
          onPress={confirmDeleteImage}
          leading={
            isDeleting ? (
              <ActivityIndicator color={appColors.red} />
            ) : (
              <Icon name="delete-forever" size={24} color={appColors.red} />
            )
          }
          disabled={isDeleting}
        />
      </View>
    </SafeAreaView>
  );
}

export default ImageViewScreen;
