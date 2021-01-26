import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default function ControlScreen() {
  const [showSilenceMod, setShowSilenceMod] = useState(false);
  const [showSleepTimer, setShowSleepTimer] = useState(false);
  const [showAuto, setShowAuto] = useState(false);
  const [showTurbo, setShowTurbo] = useState(false);

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
              setShowAuto(false);
              setShowTurbo(false);
              setShowSleepTimer(false);
            }}>
            {showSilenceMod ? (
              <Image
                style={styles.buttonImage}
                resizeMode="contain"
                source={require('../assets/silenceModActive.png')}
              />
            ) : (
              <Image
                style={styles.buttonImage}
                resizeMode="contain"
                source={require('../assets/silenceModPassive.png')}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setShowSleepTimer(!showSleepTimer);
              setShowAuto(false);
              setShowSilenceMod(false);
              setShowTurbo(false);
            }}>
            {showSleepTimer ? (
              <Image
                style={styles.buttonImage}
                resizeMode="contain"
                source={require('../assets/sleepTimerActive.png')}
              />
            ) : (
              <Image
                style={styles.buttonImage}
                resizeMode="contain"
                source={require('../assets/sleepTimerPassive.png')}
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <TouchableOpacity
            onPress={() => {
              setShowAuto(!showAuto);
              setShowSilenceMod(false);
              setShowSleepTimer(false);
              setShowTurbo(false);
            }}>
            {showAuto ? (
              <Image
                style={styles.buttonImage}
                resizeMode="contain"
                source={require('../assets/autoActive.png')}
              />
            ) : (
              <Image
                style={styles.buttonImage}
                resizeMode="contain"
                source={require('../assets/autoPassive.png')}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setShowTurbo(!showTurbo);
              setShowSilenceMod(false);
              setShowSleepTimer(false);
              setShowAuto(false);
            }}>
            {showTurbo ? (
              <Image
                style={styles.buttonImage}
                resizeMode="contain"
                source={require('../assets/turboActive.png')}
              />
            ) : (
              <Image
                style={styles.buttonImage}
                resizeMode="contain"
                source={require('../assets/turboPassive.png')}
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
