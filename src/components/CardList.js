import React, {useContext, useState} from 'react';
import {View, FlatList, ListView, StyleSheet} from 'react-native';
import DeviceCard from './DeviceCard';
import {DeviceContext} from '../provider/DeviceProvider';

export default function CardList() {
  const device = useContext(DeviceContext);
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => item.id.toString()}
        data={device.devices}
        renderItem={({item}) => (
          <View style={{marginTop: 15}}>
            <DeviceCard name={item.name} code={item.code} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 58,
    width: '100%',
    marginLeft: '10%',
  },
});
