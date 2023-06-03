import React, { createContext, useState } from "react";
//create sidebar context
export const SidebarContext = createContext();
const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handelClose = () => {
    setIsOpen(false);
  };
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handelClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
