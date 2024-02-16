// MyContext.js
"use client";
import React, { createContext, useState } from 'react';

// Create the context
const  MyContext = createContext();
export default MyContext;

// Create a provider component
export const MyProvider = ({ children }) => {
  const [serviceType, setServiceType] = useState({"location":"surat","category":"salon","pricerange":"23","rating":"3"});
  console.log(serviceType)
  const updateVariable = (newValue) => {
    setServiceType(newValue);
  };
  

  const [serviceName, setServiceName] = useState({});

  const updateServiceName = (newValue) => {
    setServiceName(newValue);
  };

  const [isService, setIsService] = useState(false);

  const updateIsService= (newValue) => {
    setIsService(newValue);
  };


// , serviceName,updateServiceName,isService,updateIsService
  return (
    <MyContext.Provider value={{ serviceType, updateVariable, serviceName,updateServiceName,isService,updateIsService }}>
      {children}
    </MyContext.Provider>
  );
};
