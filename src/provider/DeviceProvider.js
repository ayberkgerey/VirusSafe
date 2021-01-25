import React, {useState, useEffect} from 'react';

const DeviceContext = React.createContext();

const DeviceProvider = (props) => {
  const [devices, setDevices] = useState([]);
  const [name, setName] = useState();
  const [code, setCode] = useState();

  const addDevice = () => {
    setDevices([...devices, {key: devices.length, name, code}]);
  };

  return (
    <DeviceContext.Provider
      value={{setName, setCode, devices, setDevices, addDevice}}>
      {props.children}
    </DeviceContext.Provider>
  );
};

export {DeviceProvider, DeviceContext};
