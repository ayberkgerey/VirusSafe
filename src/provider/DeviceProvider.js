import React, {Component} from 'react';

const DeviceContext = React.createContext();

class DeviceProvider extends Component {
  state = {
    name: '',
    code: '',
  };

  setName = (name) => {
    this.setState({name});
  };

  setCode = (code) => {
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
