import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoImage}
        resizeMode="contain"
        source={require('../assets/virussafe_logo.png')}
      />

      <View style={styles.plusSign}>
        <TouchableOpacity>
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
    backgroundColor: '#3a3939',
  },
  title: {
    marginTop: '10%',
    color: '#acee0f',
    fontSize: 25,
  },
  plusSign: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  logoImage: {
    height: '25%',
    width: '90%',
  },
});
