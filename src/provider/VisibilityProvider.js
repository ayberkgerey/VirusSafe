import React, {useState} from 'react';

const VisibilityContext = React.createContext();

const VisibilityProvider = (props) => {
  const [showRegister, setShowRegister] = useState(false);
  const [showDevice, setShowDevice] = useState(false);

  return (
    <VisibilityContext.Provider
      value={{
        showRegister,
        showDevice,
        setShowRegister,
        setShowDevice,
      }}>
      {props.children}
    </VisibilityContext.Provider>
  );
};

export {VisibilityProvider, VisibilityContext};
