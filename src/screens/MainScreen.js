import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import RegisterCard from '../components/RegisterCard';
import DeviceCard from '../components/DeviceCard';
import {DeviceContext} from '../provider/DeviceProvider';
import {VisibilityContext} from '../provider/VisibilityProvider';

export default function MainScreen() {
  const [shouldShow, setShouldShow] = useState(false);
  const device = useContext(DeviceContext);
  const visibility = useContext(VisibilityContext);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoImage}
        resizeMode="contain"
        source={require('../assets/virussafe_logo.png')}
      />
      <DeviceCard />

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
    height: '25%',
    width: '90%',
  },
});
