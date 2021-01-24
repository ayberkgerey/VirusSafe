import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {DeviceContext} from '../provider/DeviceProvider';

const DeviceCard = (props) => {
  const device = useContext(DeviceContext);

  const [showDelete, setShowDelete] = useState(false);
  const [showConnect, setShowConnect] = useState(true);

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        style={styles.touchContainer}
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
            <TouchableOpacity style={styles.deleteContainer}>
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
