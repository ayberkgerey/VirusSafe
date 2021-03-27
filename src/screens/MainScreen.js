import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, PermissionsAndroid, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {CardList, RegisterCard} from 'components';
import {useDevices} from 'hooks';
import {BleManager} from 'react-native-ble-plx';

const transactionId = 'pax';
const AUTOMOD = 'QVVUT01PRCM=';
const OFFMOD = 'T0ZGTU9EIw==';
const TURBOMOD = 'VFVSQk9NT0Qj';
const SILENCEMOD = 'U0lMRU5DRU1PRCM=';

export default function MainScreen() {
  const [shouldShow, setShouldShow] = useState(false);
  const {devices, addDevice} = useDevices();
  const bleManager = useRef(new BleManager()).current;
  const [serviceUUID, setServiceUUID] = useState(null);
  const [characteristicsUUID, setCharacteristicsUUID] = useState(null);
  const [connectedDevice, setConnectedDevice] = useState(null);

  const connect = (id) => {
    console.log('connect to id', id);
  };

  useEffect(() => {
    if (Platform.OS === 'android' && Platform.Version >= 23) {
      PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then((result) => {
        if (result) {
          console.log('Permission is OK');
        } else {
          PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then((result) => {
            if (result) {
              console.log('User accept');
            } else {
              console.log('User refuse');
            }
          });
        }
      });
    }
  }, []);

  const scanDevices = () => {
    bleManager.startDeviceScan(null, null, (error, device) => {
      console.log('Scan devices');
      if (error) {
        console.log('Scan devices error ', error);
        bleManager.stopDeviceScan();
        return;
      }

      if (devices.find((d) => d.name === device.name)) {
        console.log('find device : ', device);
        bleManager.stopDeviceScan();
        const serviceUUIDs = device.serviceUUIDs[0];
        setServiceUUID(serviceUUIDs);
        connectToDevice(device);
      }
    });
  };

  const connectToDevice = (d) => {
    bleManager
      .connectToDevice(d.id, {autoConnect: true})
      .then((device) => {
        (async () => {
          const services = await device.discoverAllServicesAndCharacteristics();
          const characteristic = await getServicesAndCharacteristics(services);
          console.log('characteristic', characteristic);
          setCharacteristicsUUID(characteristic.uuid);
          setConnectedDevice(device);
          //this.setState({"deviceid":device.id, serviceUUID:serviceUUIDs, characteristicsUUID : characteristic.uuid,device:device })
        })();
        return device.discoverAllServicesAndCharacteristics();
      })
      .then((device) => {})
      .then(
        () => {
          console.log('Listening... device: {}', d);
        },
        (error) => {
          console.log('Connection error: {}', error);
        },
      );
  };

  const getServicesAndCharacteristics = (device) => {
    return new Promise((resolve, reject) => {
      device.services().then((services) => {
        const characteristics = [];
        services.forEach((service, i) => {
          service.characteristics().then((c) => {
            console.log('service.characteristics');
            characteristics.push(c);
            console.log('characteristics', characteristics);
            if (i === services.length - 1) {
              const temp = characteristics.reduce((acc, current) => {
                return [...acc, ...current];
              }, []);
              const dialog = temp.find((characteristic) => characteristic.isWritableWithoutResponse);
              if (!dialog) {
                reject('No writable characteristic');
              }
              resolve(dialog);
            }
          });
        });
      });
    });
  };

  const writeMessage = async (message) => {
    bleManager.cancelTransaction(transactionId);
    if (connectedDevice) {
      connectedDevice
        .writeCharacteristicWithResponseForService(serviceUUID, characteristicsUUID, message)
        .then((characteristic) => {
          console.log('write response : {}', characteristic);
        })
        .catch((error) => {
          console.log('error in writing {}', error);
        });
    } else {
      console.log('There is not a connected device');
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} resizeMode="contain" source={require('../assets/virussafe_logo.png')} />
      <View style={styles.cardList}>
        <CardList devices={devices} connect={connect} />
      </View>
      {shouldShow ? (
        <View style={styles.registerCard}>
          <RegisterCard addDevice={addDevice} setShow={setShouldShow} />
        </View>
      ) : null}
      <View style={styles.plusSign}>
        <TouchableOpacity
          onPress={() => {
            setShouldShow(!shouldShow);
          }}>
          <Icon name="plus" size={35} color="#acee0f" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            scanDevices();
          }}>
          <Icon name="search-plus" size={35} color="#acee0f" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            writeMessage(AUTOMOD);
          }}>
          <Icon name="magic" size={35} color="#acee0f" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            writeMessage(OFFMOD);
          }}>
          <Icon name="dot-circle-o" size={35} color="#acee0f" />
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
  registerCard: {
    ...StyleSheet.absoluteFill,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 999,
  },
  plusSign: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    marginBottom: 10,
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
