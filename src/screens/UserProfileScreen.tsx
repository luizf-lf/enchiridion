import { ActivityIndicator, Button, Text } from '@react-native-material/core';
import React, { useState } from 'react';
import { Alert, Image, Platform, ToastAndroid, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { appColors, cardColor, textColor } from '../constants/colors';
import { globalStyles } from '../constants/globalStyles';
import auth from '@react-native-firebase/auth';
import { useFirebaseAuth } from '../context/AuthContext';
import LoginForm from '../components/LoginForm';

import DefaultUserImage from '../assets/user.png';

function UserProfileScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const { user, setUser } = useFirebaseAuth();

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
            <View style={{ marginTop: -96, marginBottom: 16 }}>
              <Image
                source={
                  user.photoURL ? { uri: user.photoURL } : DefaultUserImage
                }
                style={{
                  height: 128,
                  width: 128,
                  borderWidth: 4,
                  borderColor: cardColor,
                  borderRadius: 128,
                }}
              />
            </View>

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
