import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Image, Switch} from 'react-native';

export default function ControlScreen() {
  const [showSilenceMod, setShowSilenceMod] = useState(false);
  const [showSleepTimer, setShowSleepTimer] = useState(false);
  const [showAuto, setShowAuto] = useState(false);
  const [showTurbo, setShowTurbo] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    if (!isEnabled) {
      setShowAuto(true);
      setShowTurbo(false);
      setShowSilenceMod(false);
      setShowSleepTimer(false);
    } else {
      setShowAuto(false);
      setShowTurbo(false);
      setShowSilenceMod(false);
      setShowSleepTimer(false);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoImage}
        resizeMode="contain"
        source={require('../assets/virussafe_logo.png')}
      />
      <Switch
        trackColor={{false: '#767577', true: '#767577'}}
        thumbColor={isEnabled ? '#acee0f' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <View style={styles.buttonContainer}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              if (!isEnabled) {
              } else {
                setShowSilenceMod(true);
                setShowAuto(false);
                setShowTurbo(false);
                setShowSleepTimer(false);
              }
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
              if (!isEnabled) {
              } else {
                setShowSleepTimer(true);
                setShowAuto(false);
                setShowSilenceMod(false);
                setShowTurbo(false);
              }
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
              if (!isEnabled) {
              } else {
                setShowAuto(true);
                setShowSilenceMod(false);
                setShowSleepTimer(false);
                setShowTurbo(false);
              }
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
              if (!isEnabled) {
              } else {
                setShowTurbo(true);
                setShowSilenceMod(false);
                setShowSleepTimer(false);
                setShowAuto(false);
              }
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
