import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';

const DeviceContext = React.createContext();

class DeviceProvider extends Component {
  state = {
    name: '',
    code: '',
  };
  componentDidMount = () => {
    AsyncStorage.getItem('name').then((name) => this.setState({name: name}));
    AsyncStorage.getItem('code').then((code) => this.setState({code: code}));
  };

  setName = (name) => {
    AsyncStorage.setItem('name', name);
    this.setState({name});
  };

  setCode = (code) => {
    AsyncStorage.setItem('code', code);
    this.setState({code});
  };
  render() {
    return (
      <DeviceContext.Provider
        value={{
          name: this.state.name,
          code: this.state.code,
          setName: this.setName,
          setCode: this.setCode,
        }}>
        {this.props.children}
      </DeviceContext.Provider>
    );
  }
}

export {DeviceProvider, DeviceContext};
