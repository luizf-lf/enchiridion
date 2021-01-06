import React from 'react';
import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://github.com/luizf-lf.png' }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Luiz</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>
      <Text style={styles.bio}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, quas
        doloremque, provident consectetur voluptate nobis nostrum in illo quidem
        accusamus accusantium iusto sint tempore totam natus autem dignissimos
        neque repellendus?
      </Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço Hora{'   '}
          <Text style={styles.priceValue}>R$ 29,90</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.isFavorite]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato.</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
