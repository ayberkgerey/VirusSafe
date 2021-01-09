import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function DeviceCard(props) {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.title}>{props.deviceName}</Text>
          <Text style={styles.codeTitle}>{props.deviceCode}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.connectTitle}>Connect</Text>
          <Icon name="signal" size={20} color="#acee0f" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 6,
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
});
