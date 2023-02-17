import {
  ActivityIndicator,
  Button,
  Text,
  TextInput,
} from '@react-native-material/core';
import React, { useState } from 'react';
import { Alert, Platform, ToastAndroid, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { textColor } from '../constants/colors';
import { globalStyles } from '../constants/globalStyles';
import auth from '@react-native-firebase/auth';
import { useFirebaseAuth } from '../context/AuthContext';

function LoginScreen() {
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');

  const { user, setUser } = useFirebaseAuth();

  const handleLogin = async () => {
    try {
      if (userEmail.length > 0 && userPass.length > 0) {
        setIsLoggingIn(true);

        const signInResult = await auth().signInWithEmailAndPassword(
          userEmail,
          userPass,
        );

        setUser(signInResult.user);
        setIsLoggingIn(false);
        if (Platform.OS === 'android') {
          ToastAndroid.show('Logged in', 5000);
        }
      }
    } catch (error: any) {
      switch (error.code) {
        case 'auth/invalid-email':
          Alert.alert('Invalid email', 'Provide a valid user email to login');
          break;
        case 'auth/user-not-found':
          Alert.alert(
            'User not found',
            'A user with this email does not exists',
            [
              {
                text: 'Register',
                // onPress: () => navigation?.navigate('Register')
              },
              {
                text: 'Ok',
              },
            ],
          );
          break;
        case 'auth/wrong-password':
          Alert.alert('Wrong password', 'The provided password is incorrect');
          break;

        default:
          Alert.alert(
            'Could not sign in',
            'An unknown error occurred. Please try again.',
          );
          console.error(error);
          break;
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <View style={globalStyles.viewContainer}>
      <Text variant="h5" color={textColor} style={{ marginBottom: 16 }}>
        Login
      </Text>
      {!user.email ? (
        <>
          <Text color={textColor} style={{ marginBottom: 16 }}>
            Login to use the RNPlayground Firebase features.
          </Text>
          <TextInput
            label="Email"
            value={userEmail}
            onChangeText={input => setUserEmail(input)}
            inputStyle={{
              color: textColor,
            }}
            variant="outlined"
            leading={<Icon name="mail" size={24} />}
            style={{ marginBottom: 16 }}
          />
          <TextInput
            label="Password"
            value={userPass}
            onChangeText={input => setUserPass(input)}
            inputStyle={{
              color: textColor,
            }}
            variant="outlined"
            leading={<Icon name="lock" size={24} />}
            secureTextEntry={true}
            style={{ marginBottom: 16 }}
          />

          <Button
            title="Login"
            leading={
              isLoggingIn ? (
                <ActivityIndicator color="#FFF" size="large" />
              ) : (
                <Icon name="vpn-key" size={24} color="#FFF" />
              )
            }
            disabled={isLoggingIn}
            onPress={handleLogin}
          />
        </>
      ) : (
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text color={textColor}>You are logged in as</Text>
          <Text style={{ fontWeight: 'bold' }}>{user.email}</Text>
        </View>
      )}
    </View>
  );
}

export default LoginScreen;
