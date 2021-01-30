import React, {useState} from 'react';

const DeviceContext = React.createContext();

const DeviceProvider = (props) => {
  const [devices, setDevices] = useState([]);

  return (
    <DeviceContext.Provider value={{devices, setDevices}}>
      {props.children}
    </DeviceContext.Provider>
  );
};

export {DeviceProvider, DeviceContext};
