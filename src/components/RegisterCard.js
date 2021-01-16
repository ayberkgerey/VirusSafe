import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage,
} from 'react-native';

class RegisterCard extends Component {
  state = {
    name: '',
    code: '',
  };

  componentDidMount = () => {
    AsyncStorage.getItem('name').then((value) => this.setState({name: value}));
    AsyncStorage.getItem('code').then((value) => this.setState({code: value}));
  };
  setDeviceName = (value) => {
    AsyncStorage.setItem('name', value);
    this.setState({name: value});
  };
  setDeviceCode = (value) => {
    AsyncStorage.setItem('code', value);
    this.setState({code: value});
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
          <TouchableOpacity>
            <Text style={styles.buttonTitle}>KAYIT</Text>
          </TouchableOpacity>
        </View>
        <Text style={{color: 'blue'}}>{this.state.name}</Text>
        <Text style={{color: 'blue'}}>{this.state.code}</Text>
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
