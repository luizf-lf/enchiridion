import { ActivityIndicator, Button, Text } from '@react-native-material/core';
import React, { useEffect, useState } from 'react';
import { Alert, Image, Platform, StyleSheet, ToastAndroid, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { appColors, cardColor, textColor } from '../constants/colors';
import { globalStyles } from '../constants/globalStyles';
import auth from '@react-native-firebase/auth';
import { useFirebaseAuth } from '../context/AuthContext';
import LoginForm from '../components/LoginForm';
import { launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

import DefaultUserImage from '../assets/user.png';
import DefaultHeaderImage from '../assets/header.jpg';

const styles = StyleSheet.create({
  profileImage: {
    height: 128,
    width: 128,
    borderWidth: 4,
    borderColor: cardColor,
    borderRadius: 128,
  },
});

function UserProfileScreen() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isUpdatingPFP, setUpdatingPFP] = useState(false);
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);
  const [profilePicture, setProfilePicture] = useState('');

  const { user, setUser } = useFirebaseAuth();

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

          const imageName = selectedImage.fileName
            ? `${Date.now()}.${selectedImage.fileName.split('.')[1]}`
            : Date.now();
          const imageRef = storage().ref(`User Data/${user?.uid}/Profile Pictures/${imageName}`);
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
      setIsLoggingOut(true);
      await auth().signOut();

      setUser(null);

      if (Platform.OS === 'android') {
        ToastAndroid.show('Logged out', 5000);
      }
    } catch (error) {
      Alert.alert('Error', `Unable to logout: ${error}`);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const confirmDeleteAccount = () => {
    Alert.alert('Delete Account?', 'This action is irreversible, and will delete all data related to this account.', [
      {
        text: 'Yes',
        onPress: handleDeleteAccount,
      },
      {
        isPreferred: true,
        text: 'No',
      },
    ]);
  };

  const handleDeleteAccount = async () => {
    // TODO: Revalidate user login (ask for password again)
    try {
      setIsDeletingAccount(true);
      if (user) {
        const tasks = await firestore().collection('Tasks').where('taskOwnerUid', '==', user.uid).get();
        for (let i = 0; i < tasks.docs.length; i++) {
          const task = tasks.docs[i];
          await firestore().collection('Tasks').doc(task.id).delete();
        }
        // FIXME: Storage ref does not exist
        // await storage().ref(`User Data/${user.uid}`).delete();
        // console.log('Deleted storage data');
        await user.delete();

        if (Platform.OS === 'android') {
          ToastAndroid.show('Account deleted', 5000);
        }

        setUser(null);
      }
    } catch (error) {
      Alert.alert('Error', `Could not delete account: ${error}`);
    } finally {
      setIsDeletingAccount(false);
    }
  };

  useEffect(() => {
    if (user && user.photoURL && user.displayName) {
      setProfilePicture(user.photoURL);
    }
  }, [user]);

  return (
    <View style={globalStyles.viewContainer}>
      <Text variant="h5" color={textColor} style={{ marginBottom: 16 }}>
        User Profile
      </Text>
      {!user ? (
        <LoginForm />
      ) : (
        <View style={{ backgroundColor: cardColor, borderRadius: 16 }}>
          {/* // TODO: Implement header update */}
          <Image
            source={DefaultHeaderImage}
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
              ) : profilePicture === '' ? (
                <Image source={DefaultUserImage} style={styles.profileImage} />
              ) : (
                <Image source={{ uri: profilePicture }} style={styles.profileImage} />
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
                Last login at {new Date(user.metadata.lastSignInTime).toLocaleString('pt')}
              </Text>
            )}

            <Button
              style={{ marginTop: 32 }}
              title="Logout"
              variant="text"
              titleStyle={{ color: appColors.red }}
              trailing={
                isLoggingOut ? (
                  <ActivityIndicator color={appColors.red} size="large" />
                ) : (
                  <Icon name="logout" size={20} color={appColors.red} />
                )
              }
              onPress={handleLogout}
              disabled={isLoggingOut}
            />

            <Button
              style={{ marginTop: 8, backgroundColor: appColors.red }}
              title="Delete Account"
              leading={
                isDeletingAccount ? <ActivityIndicator color="#FFF" /> : <Icon name="delete" size={20} color="#FFF" />
              }
              onPress={confirmDeleteAccount}
              disabled={isDeletingAccount}
            />
          </View>
        </View>
      )}
    </View>
  );
}

export default UserProfileScreen;
