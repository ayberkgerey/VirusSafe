import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {useNavigation} from '@react-navigation/core';
import {DeviceContext} from '../provider/DeviceProvider';
import {BleManager} from 'react-native-ble-plx';

const DeviceCard = (props) => {
  const [showDelete, setShowDelete] = useState(false);
  const [showConnect, setShowConnect] = useState(true);
  const navigation = useNavigation();
  const device = useContext(DeviceContext);
  const manager = new BleManager();

  const removeIt = () => {
    console.log(JSON.stringify(device.devices));
    const filter = device.devices.filter((item) => item.code !== props.code);
    device.setDevices(filter);
  };

  const scanAndConnect = () => {
    console.log('Scanning Devices...');
    manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.log(JSON.stringify(error));
        return;
      }
      // Check if it is a device you are looking for based on advertisement data
      // or other criteria.
      if (device.name === props.code) {
        // Stop scanning as it's not necessary if you are scanning for one device.
        console.log('Device Connected!');
        manager.stopDeviceScan();
        device
          .connect()
          .then((device) => {
            console.log(
              JSON.stringify(device.discoverAllServicesAndCharacteristics()),
            );
            return device.discoverAllServicesAndCharacteristics();
          })
          .then((device) => {
            // Do work on device with services and characteristics
          })
          .catch((error) => {
            // Handle errors
          });
        navigation.navigate('ControlScreen', {screen: 'ControlScreen'});
        // Proceed with connection.
      }
    });
  };

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        style={styles.touchContainer}
        onPress={scanAndConnect}
        onLongPress={() => {
          setShowConnect(!showConnect);
          setShowDelete(!showDelete);
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.title}>{props.name}</Text>
            <Text style={styles.codeTitle}>{props.code}</Text>
          </View>
          {showConnect ? (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.connectTitle}>Connect</Text>
              <Icon name="signal" size={20} color="#acee0f" />
            </View>
          ) : null}
          {showDelete ? (
            <TouchableOpacity onPress={removeIt} style={styles.deleteContainer}>
              <Text style={styles.deleteTitle}>Delete</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default DeviceCard;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    height: 58,
    width: '90%',
    backgroundColor: '#3a3939',
    borderColor: '#acee0f',
    borderWidth: 0.9,
  },
  title: {
    color: '#acee0f',
    fontSize: 20,
  },
  codeTitle: {
    color: '#e6e6e6',
    fontSize: 12,
  },
  connectTitle: {
    color: '#e6e6e6',
    fontSize: 16,
    marginRight: 10,
  },
  touchContainer: {
    padding: 6,
  },
  deleteContainer: {
    width: 70,
    backgroundColor: '#acee0f',
    alignItems: 'center',
    marginRight: 10,
  },
  deleteTitle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 10,
  },
});
