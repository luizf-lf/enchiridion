import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import styles from './styles';

function GiveClasses() {
  const navigation = useNavigation();

  function handleGoBackToLanding() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={giveClassesBgImage}
        style={styles.content}
        resizeMode="contain"
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você deve se cadastrar como professor em nossa
          plataforma web.
        </Text>
      </ImageBackground>
      <RectButton onPress={handleGoBackToLanding} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
