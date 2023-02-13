import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, Text } from '@react-native-material/core';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContext,
  useRoute,
} from '@react-navigation/native';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { globalStyles } from '../constants/globalStyles';
import { TaskImageRefInterface } from '../interfaces/TaskInterface';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { appColors } from '../constants/colors';
import Storage from '@react-native-firebase/storage';

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
  const [imageUri, setImageUri] = useState('');
  const colors = {
    white: DefaultTheme.colors.background,
    dark: DarkTheme.colors.background,
  };
  const viewHeight = Dimensions.get('window').height;

  const confirmDeleteImage = () => {
    console.log('confirmDeleteImage');
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
          title="Delete"
          color={appColors.red}
          tintColor={appColors.red}
          onPress={confirmDeleteImage}
        />
      </View>
    </SafeAreaView>
  );
}

export default ImageViewScreen;
