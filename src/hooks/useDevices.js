import React, {useContext} from 'react';
import {DeviceContext} from 'provider/DeviceProvider';

export function useDevices() {
  const {devices, setDevices, addDevice, deleteDevice} = useContext(DeviceContext) || {};
  return {devices, setDevices, addDevice, deleteDevice};
}
