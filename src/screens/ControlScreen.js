import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default function ControlScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoImage}
        resizeMode="contain"
        source={require('../assets/virussafe_logo.png')}
      />
      <View style={styles.buttonContainer}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image
              style={styles.buttonImage}
              resizeMode="contain"
              source={require('../assets/silenceModPassive.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.buttonImage}
              resizeMode="contain"
              source={require('../assets/sleepTimerPassive.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <TouchableOpacity>
            <Image
              style={styles.buttonImage}
              resizeMode="contain"
              source={require('../assets/autoPassive.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={styles.buttonImage}
              resizeMode="contain"
              source={require('../assets/turboPassive.png')}
            />
          </TouchableOpacity>
        </View>
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
  logoImage: {
    height: '18%',
    width: '70%',
  },
  buttonImage: {
    height: 70,
    width: 200,
  },
  buttonContainer: {
    marginTop: '95%',
  },
});
