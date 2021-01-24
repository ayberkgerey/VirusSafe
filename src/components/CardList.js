import React, {useContext} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import DeviceCard from './DeviceCard';
import {DeviceContext} from '../provider/DeviceProvider';

export default function CardList() {
  const device = useContext(DeviceContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {name: device.name, code: device.code},
          {name: device.name, code: device.code},
        ]}
        renderItem={({item}) => (
          <View style={{marginTop: 20}}>
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
