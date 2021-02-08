import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Switch,
} from 'react-native';
import {DeviceContext} from '../provider/DeviceProvider';
import {BleManager} from 'react-native-ble-plx';
// device id : 74:DA:EA:A7:97:53
//service UUID : 00001801-0000-1000-8000-00805f9b34fb
//UUID : 00002a05-0000-1000-8000-00805f9b34fb
//AUTOMOD : QVVUT01PRCM=
export default function ControlScreen() {
  const [showSilenceMod, setShowSilenceMod] = useState(false);
  const [showSleepTimer, setShowSleepTimer] = useState(false);
  const [showAuto, setShowAuto] = useState(false);
  const [showTurbo, setShowTurbo] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [count, setCount] = useState(0);
  const tempDevice = useContext(DeviceContext);
  const manager = new BleManager();

  const AUTOMOD = 'QVVUT01PRCM=';
  const serviceUUID = '0000ffe0-0000-1000-8000-00805f9b34fb';
  const characteristicUUID = '0000ffe1-0000-1000-8000-00805f9b34fb';

  useEffect(() => {
    manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.log(JSON.stringify(error));
        return;
      }
      if (device.name === tempDevice.tempCode) {
        console.log('DEVICE CONNECTED.');

        manager.stopDeviceScan();
        // Proceed with connection.
        device
          .connect()
          .then((device) => {
            console.log('Connected...Discovering services and characteristics');
            return device.discoverAllServicesAndCharacteristics();
          })
          .then(async (device) => {
            console.log('Services and characteristics discovered');
            //return this.testChar(device)
            console.log(
              'device id : ' +
                device.id +
                'device name : ' +
                device.name +
                'device rssi : ' +
                device.rssi,
            );

            const services = await device.services();
            const characteristics0 = await services[0].characteristics();
            const characteristics1 = await services[1].characteristics();
            const characteristics2 = await services[2].characteristics();
            console.log('Characteristics0: ', characteristics0);
            console.log('Characteristics1: ', characteristics1);
            console.log('Characteristics2: ', characteristics2);

            await manager.writeCharacteristicWithResponseForDevice(
              device.id,
              serviceUUID,
              characteristicUUID,
              AUTOMOD,
            );
            await manager.writeCharacteristicWithResponseForDevice(
              device.id,
              serviceUUID,
              characteristicUUID,
              AUTOMOD,
            );
            await manager.writeCharacteristicWithResponseForDevice(
              device.id,
              serviceUUID,
              characteristicUUID,
              AUTOMOD,
            );

            // Do work on device with services and characteristics
          })
          .catch((error) => {
            console.log(error);
            // Handle errors
          });
      }
    });
  });

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
      <Text>{tempDevice.tempCode}</Text>
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
                setShowAuto(false);
                setShowTurbo(false);
                setShowSilenceMod(false);
                setShowSleepTimer(true);
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
                setCount((prevState) => prevState + 1);
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
