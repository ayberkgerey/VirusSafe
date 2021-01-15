import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const DeviceList = ({devices, toggleDevice}) => (
  <View style={{paddingTop: 60, padding: 35, backgroundColor: '#272C2C'}}>
    {devices.map((device) => (
      <TouchableOpacity key={device.id} onPress={() => toggleDevice(device.id)}>
        <Text
          style={{
            fontSize: 24,
            color: 'aqua',
            textDecorationLine: device.completed ? 'line-through' : 'none',
          }}>
          {device.name}
        </Text>
        <Text
          style={{
            fontSize: 24,
            color: 'aqua',
            textDecorationLine: device.completed ? 'line-through' : 'none',
          }}>
          {device.code}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);
export default DeviceList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
