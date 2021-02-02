import React, {useState} from 'react';

const DeviceContext = React.createContext();

const DeviceProvider = (props) => {
  const [devices, setDevices] = useState([]);
  const [tempCode, setTempCode] = useState('');

  return (
    <DeviceContext.Provider
      value={{devices, setDevices, tempCode, setTempCode}}>
      {props.children}
    </DeviceContext.Provider>
  );
};

export {DeviceProvider, DeviceContext};
