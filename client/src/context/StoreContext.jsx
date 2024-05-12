import React, { createContext } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // Define the context value here
  const contextValue = {
    // Your context data goes here
  };

  // Return the provider with the defined context value
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
