import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RegisterCard from '../components/RegisterCard';
import VisibleDevices from '../containers/VisibleDevices';
import {Provider} from 'react-redux';
import store from '../redux/store/store';
class DeviceApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RegisterCard />
          <View>
            <VisibleDevices />
          </View>
        </View>
      </Provider>
    );
  }
}
export default DeviceApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#272C2C',
  },
});

/* <Provider store={store}>
      <TodoApp />
    </Provider> */
