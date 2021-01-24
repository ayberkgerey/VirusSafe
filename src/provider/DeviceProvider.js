import React, {useState, useEffect} from 'react';

const DeviceContext = React.createContext();

const DeviceProvider = (props) => {
  const [devices, setDevices] = useState([]);
  const [name, setName] = useState([]);
  const [code, setCode] = useState([]);

  return (
    <DeviceContext.Provider
      value={{code: code, name: name, setName: setName, setCode: setCode}}>
      {props.children}
    </DeviceContext.Provider>
  );
};

export {DeviceProvider, DeviceContext};
