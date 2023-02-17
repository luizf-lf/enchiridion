import {
  ActivityIndicator,
  Button,
  Text,
  TextInput,
} from '@react-native-material/core';
import React, { useState } from 'react';
import { Alert, Platform, ToastAndroid, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { appColors, cardColor, textColor } from '../constants/colors';
import { globalStyles } from '../constants/globalStyles';

import auth from '@react-native-firebase/auth';
import { useFirebaseAuth } from '../context/AuthContext';
import { NavigationContext } from '@react-navigation/native';

function RegisterScreen() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [userPassConfirm, setUserPassConfirm] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const { setUser } = useFirebaseAuth();
  const navigation = React.useContext(NavigationContext);

  const handleRegister = async () => {
    if (
      userName.length > 0 &&
      userEmail.length > 0 &&
      userPass.length > 0 &&
      userPassConfirm.length > 0
    ) {
      try {
        if (userPass !== userPassConfirm) {
          Alert.alert(
            'Passwords does not match',
            'Please type the passwords correctly and try again.',
          );
          return;
        }
        setIsLoading(true);
        const createdUser = await auth().createUserWithEmailAndPassword(
          userEmail,
          userPass,
        );

        await createdUser.user.updateProfile({
          displayName: userName,
        });
        createdUser.user.displayName = userName;

        setUser(createdUser.user);

        if (Platform.OS === 'android') {
          ToastAndroid.show('User created successfully', 5000);
        }

        navigation?.goBack();
      } catch (error: any) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            Alert.alert(
              'Email in use',
              "There's already an user with this email. Please use another one.",
            );
            break;
          case 'auth/invalid-email':
            Alert.alert(
              'Invalid Email',
              'The provided email is invalid. Use a valid email format.',
            );
            break;
          default:
            Alert.alert('Unknown Error', `Could not create user: ${error}`);
            console.error(`Could not create user: ${error}`);
            break;
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <View style={globalStyles.viewContainer}>
      <Text variant="h5" color={textColor} style={{ marginBottom: 16 }}>
        Register
      </Text>

      <Text color={textColor} style={{ marginBottom: 16 }}>
        Register a new account to use the RNPlayground Firebase features.
      </Text>

      <TextInput
        label="Name"
        value={userName}
        onChangeText={input => setUserName(input)}
        leading={<Icon name="person" size={24} />}
        inputStyle={{
          color: textColor,
        }}
        inputContainerStyle={{
          backgroundColor: cardColor,
        }}
        color={appColors.primary}
        variant="filled"
        style={{ marginBottom: 16 }}
      />
      <TextInput
        label="Email"
        value={userEmail}
        onChangeText={input => setUserEmail(input)}
        leading={<Icon name="mail" size={24} />}
        inputStyle={{
          color: textColor,
        }}
        inputContainerStyle={{
          backgroundColor: cardColor,
        }}
        color={appColors.primary}
        variant="filled"
        style={{ marginBottom: 16 }}
      />
      <TextInput
        label="Password"
        value={userPass}
        onChangeText={input => setUserPass(input)}
        leading={<Icon name="lock" size={24} />}
        inputStyle={{
          color: textColor,
        }}
        inputContainerStyle={{
          backgroundColor: cardColor,
        }}
        color={appColors.primary}
        variant="filled"
        style={{ marginBottom: 16 }}
        secureTextEntry
      />
      <TextInput
        label="Confirm Password"
        value={userPassConfirm}
        onChangeText={input => setUserPassConfirm(input)}
        leading={<Icon name="lock" size={24} />}
        inputStyle={{
          color: textColor,
        }}
        inputContainerStyle={{
          backgroundColor: cardColor,
        }}
        color={appColors.primary}
        variant="filled"
        style={{ marginBottom: 16 }}
        secureTextEntry
      />

      <Button
        title="Register"
        leading={
          isLoading ? (
            <ActivityIndicator color="#FFF" size="large" />
          ) : (
            <Icon name="person-add" size={24} color="#FFF" />
          )
        }
        disabled={isLoading}
        onPress={handleRegister}
        style={{ marginBottom: 16, backgroundColor: appColors.primary }}
      />
    </View>
  );
}

export default RegisterScreen;
