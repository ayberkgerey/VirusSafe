import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import {connect} from 'react-redux';
import {addCode, addName} from '../redux/actions';

class RegisterCard extends Component {
  state = {
    deviceName: '',
    deviceCode: '',
  };
  addName = (text) => {
    //redux store
    this.props.dispatch(addName(text));
    this.setState({deviceName: ''});
  };
  addCode = (text) => {
    //redux store
    this.props.dispatch(addCode(text));
    this.setState({deviceName: ''});
  };
  componentDidMount = () => {
    AsyncStorage.getItem('deviceName').then((value) =>
      this.setState({deviceName: value}),
    );
    AsyncStorage.getItem('deviceCode').then((value) =>
      this.setState({deviceCode: value}),
    );
  };
  setDeviceName = (value) => {
    AsyncStorage.setItem('deviceName', value);
    this.setState({deviceName: value});
  };
  setDeviceCode = (value) => {
    AsyncStorage.setItem('deviceCode', value);
    this.setState({deviceCode: value});
  };

  render() {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.cardLine}>
          <Text style={styles.title}>CIHAZ KODU</Text>
          <TextInput
            style={styles.inputContainer}
            onChangeText={this.setDeviceCode}
          />
        </View>
        <View style={styles.cardLine}>
          <Text style={styles.title}>CIHAZ ADI</Text>
          <TextInput
            style={styles.inputContainer}
            onChangeText={this.setDeviceName}
          />
        </View>
        <View style={styles.buttonsLine}>
          <TouchableOpacity>
            <Text style={styles.buttonTitle}>TEMİZLE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.addName(this.state.deviceName),
                this.addCode(this.state.deviceCode);
            }}>
            <Text style={styles.buttonTitle}>KAYIT</Text>
          </TouchableOpacity>
        </View>
        <Text style={{color: 'blue'}}>{this.state.deviceName}</Text>
        <Text style={{color: 'blue'}}>{this.state.deviceCode}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: '20%',
    padding: 17,
    height: 180,
    width: '90%',
    backgroundColor: '#3a3939',
    borderColor: '#acee0f',
    borderWidth: 0.9,
  },
  cardLine: {
    marginBottom: 20,
    height: 35,
    flexDirection: 'row',
    borderColor: '#acee0f',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    color: 'black',
    marginLeft: 30,
    backgroundColor: 'white',
    width: '65%',
    height: 35,
    textAlign: 'right',
  },

  title: {
    color: '#acee0f',
  },
  buttonsLine: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonTitle: {
    color: '#e6e6e6',
    fontSize: 24,
  },
});

export default RegisterCard;
