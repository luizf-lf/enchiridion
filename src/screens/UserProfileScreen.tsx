import { ActivityIndicator, Button, Text } from '@react-native-material/core';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  Platform,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { appColors, cardColor, textColor } from '../constants/colors';
import { globalStyles } from '../constants/globalStyles';
import auth from '@react-native-firebase/auth';
import { useFirebaseAuth } from '../context/AuthContext';
import LoginForm from '../components/LoginForm';
import storage from '@react-native-firebase/storage';

import DefaultUserImage from '../assets/user.png';
import { launchImageLibrary } from 'react-native-image-picker';

function UserProfileScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdatingPFP, setUpdatingPFP] = useState(false);
  const [profilePicture, setProfilePicture] = useState('');

  const { user, setUser } = useFirebaseAuth();

  // TODO: Check image lifecycle
  const handleUpdateProfilePicture = async () => {
    try {
      if (user) {
        const library = await launchImageLibrary({
          mediaType: 'photo',
          selectionLimit: 1,
        });

        setUpdatingPFP(true);
        if (library.assets && library.assets?.length > 0) {
          const selectedImage = library.assets[0];
          if (!selectedImage.uri) {
            console.warn('selectedImage.uri is undefined.');
            return;
          }

          const imageRef = storage().ref(
            `${user?.uid}/Profile Pictures/${selectedImage.fileName}`,
          );
          await imageRef.putFile(selectedImage.uri);
          const imageUrl = await imageRef.getDownloadURL();

          await user.updateProfile({
            photoURL: imageUrl,
          });

          setProfilePicture(imageUrl);

          if (Platform.OS === 'android') {
            ToastAndroid.show('Picture updated', 5000);
          }
        }
      }
    } catch (error) {
      Alert.alert('Error', `Unable to update the profile picture: ${error}`);
      console.error(error);
    } finally {
      setUpdatingPFP(false);
    }
  };

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await auth().signOut();

      setUser(null);

      if (Platform.OS === 'android') {
        ToastAndroid.show('Logged out', 5000);
      }
    } catch (error) {
      Alert.alert('Error', `Unable to logout: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user && user.photoURL) {
      setProfilePicture(user.photoURL);
    }
  }, []);

  return (
    <View style={globalStyles.viewContainer}>
      <Text variant="h5" color={textColor} style={{ marginBottom: 16 }}>
        User Profile
      </Text>
      {!user ? (
        <LoginForm />
      ) : (
        <View style={{ backgroundColor: cardColor, borderRadius: 16 }}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1676458482055-2f681a9ba120?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80',
            }}
            style={{
              height: 200,
              width: '100%',
              borderRadius: 16,
            }}
            resizeMode="cover"
          />

          <View style={{ padding: 16 }}>
            <TouchableOpacity
              style={{
                marginTop: -96,
                marginBottom: 16,
                height: 128,
                width: 128,
                borderWidth: 4,
                borderColor: cardColor,
                borderRadius: 128,
                backgroundColor: cardColor,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={handleUpdateProfilePicture}>
              {isUpdatingPFP ? (
                <ActivityIndicator size="large" />
              ) : (
                <Image
                  source={
                    profilePicture === ''
                      ? DefaultUserImage
                      : { uri: profilePicture }
                  }
                  style={{
                    height: 128,
                    width: 128,
                    borderWidth: 4,
                    borderColor: cardColor,
                    borderRadius: 128,
                  }}
                />
              )}
            </TouchableOpacity>

            <Text color={textColor} variant="h5">
              {user.displayName}
            </Text>
            <Text color={textColor} variant="caption">
              {user.email}
            </Text>
            {user.metadata.lastSignInTime && (
              <Text color={textColor} variant="caption">
                Last login at{' '}
                {new Date(user.metadata.lastSignInTime).toLocaleString('pt')}
              </Text>
            )}

            <Button
              style={{ marginTop: 32 }}
              title="Logout"
              variant="text"
              titleStyle={{ color: appColors.red }}
              trailing={
                isLoading ? (
                  <ActivityIndicator color={appColors.red} size="large" />
                ) : (
                  <Icon name="logout" size={20} color={appColors.red} />
                )
              }
              onPress={handleLogout}
              disabled={isLoading}
            />
          </View>
        </View>
      )}
    </View>
  );
}

export default UserProfileScreen;
