import {
  ActivityIndicator,
  Button,
  Text,
  TextInput,
} from '@react-native-material/core';
import React, { useState } from 'react';
import { Alert, Platform, ToastAndroid, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { appColors, textColor } from '../constants/colors';
import { globalStyles } from '../constants/globalStyles';
import auth from '@react-native-firebase/auth';
import { useFirebaseAuth } from '../context/AuthContext';
import { NavigationContext } from '@react-navigation/native';

function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');

  const { user, setUser } = useFirebaseAuth();

  const navigation = React.useContext(NavigationContext);

  const handleLogin = async () => {
    try {
      if (userEmail.length > 0 && userPass.length > 0) {
        setIsLoading(true);

        const signInResult = await auth().signInWithEmailAndPassword(
          userEmail,
          userPass,
        );

        setUser(signInResult.user);
        setIsLoading(false);
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
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await auth().signOut();

      setUser({});

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
            style={{ marginBottom: 16 }}
            secureTextEntry
          />

          <Button
            title="Login"
            leading={
              isLoading ? (
                <ActivityIndicator color="#FFF" size="large" />
              ) : (
                <Icon name="vpn-key" size={24} color="#FFF" />
              )
            }
            disabled={isLoading}
            onPress={handleLogin}
            style={{ marginBottom: 16, backgroundColor: appColors.primary }}
          />

          <Button
            title="Register"
            variant="text"
            titleStyle={{
              color: appColors.primary,
            }}
            leading={
              <Icon name="person-add" size={24} color={appColors.primary} />
            }
            onPress={() => navigation?.navigate('Register')}
          />
        </>
      ) : (
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text color={textColor}>You are logged in as</Text>
          <Text style={{ fontWeight: 'bold', marginBottom: 16 }}>
            {user.email}
          </Text>
          <Button
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
      )}
    </View>
  );
}

export default LoginScreen;
