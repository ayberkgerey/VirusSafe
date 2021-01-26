import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Button} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import RegisterCard from '../components/RegisterCard';
import CardList from '../components/CardList';

export default function MainScreen() {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoImage}
        resizeMode="contain"
        source={require('../assets/virussafe_logo.png')}
      />
      <View style={styles.cardList}>
        <CardList />
      </View>

      {shouldShow ? (
        <View>
          <RegisterCard />
        </View>
      ) : null}
      <View style={styles.plusSign}>
        <TouchableOpacity
          onPress={() => {
            setShouldShow(!shouldShow);
          }}>
          <Icon name="plus" size={65} color="#acee0f" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#171717',
  },

  plusSign: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  logoImage: {
    height: '18%',
    width: '70%',
  },
  cardList: {
    flex: 1,
    height: 58,
    width: '100%',
    alignItems: 'center',
  },
});
