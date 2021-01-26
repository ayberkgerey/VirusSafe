import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default function ControlScreen() {
  const [showSilenceMod, setShowSilenceMod] = useState(true);
  const [showSleepTimer, setShowSleepTimer] = useState(true);
  const [showAuto, setShowAuto] = useState(true);
  const [showTurbo, setShowTurbo] = useState(true);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoImage}
        resizeMode="contain"
        source={require('../assets/virussafe_logo.png')}
      />
      <View style={styles.buttonContainer}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              setShowSilenceMod(!showSilenceMod);
            }}>
            {showSilenceMod ? (
              <Image
                style={styles.buttonImage}
                resizeMode="contain"
                source={require('../assets/silenceModPassive.png')}
              />
            ) : (
              <Image
                style={styles.buttonImage}
                resizeMode="contain"
                source={require('../assets/silenceModActive.png')}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setShowSleepTimer(!showSleepTimer);
            }}>
            {showSleepTimer ? (
              <Image
                style={styles.buttonImage}
                resizeMode="contain"
                source={require('../assets/sleepTimerPassive.png')}
              />
            ) : (
              <Image
                style={styles.buttonImage}
                resizeMode="contain"
                source={require('../assets/sleepTimerActive.png')}
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <TouchableOpacity
            onPress={() => {
              setShowAuto(!showAuto);
            }}>
            {showAuto ? (
              <Image
                style={styles.buttonImage}
                resizeMode="contain"
                source={require('../assets/autoPassive.png')}
              />
            ) : (
              <Image
                style={styles.buttonImage}
                resizeMode="contain"
                source={require('../assets/autoActive.png')}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setShowTurbo(!showTurbo);
            }}>
            {showTurbo ? (
              <Image
                style={styles.buttonImage}
                resizeMode="contain"
                source={require('../assets/turboPassive.png')}
              />
            ) : (
              <Image
                style={styles.buttonImage}
                resizeMode="contain"
                source={require('../assets/turboActive.png')}
              />
            )}
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
