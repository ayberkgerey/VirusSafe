import React, {useState, createContext} from 'react';

const DeviceContext = createContext();
const {Provider} = DeviceContext;

const DeviceProvider = ({children}) => {
  const [devices, setDevices] = useState([]);

  const addDevice = (device) => {
    console.log('device', device);
    let deviceArr = [...devices];
    device.id = devices.length + 1;
    deviceArr.push(device);
    setDevices(deviceArr);
  };

  const deleteDevice = (device) => {
    let deviceArr = [...devices];
    const index = deviceArr.findIndex((item, i) => {
      return item.id === device.id;
    });
    if (index !== -1) {
      deviceArr.splice(index, 1);
      setDevices(deviceArr);
    }
  };

  return <Provider value={{devices, setDevices, addDevice, deleteDevice}}>{children}</Provider>;
};

export {DeviceProvider, DeviceContext};
