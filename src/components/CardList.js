import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import DeviceCard from './DeviceCard';

const CardList = ({devices, connect}) => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => item.id.toString()}
        data={devices}
        renderItem={({item}) => (
          <View style={{marginTop: 15}}>
            <DeviceCard device={item} connect={connect} />
          </View>
        )}
      />
    </View>
  );
};

export default CardList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 58,
    width: '100%',
    marginLeft: '10%',
  },
});
