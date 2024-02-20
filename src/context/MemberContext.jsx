import React, { useState, createContext } from "react";

export const MemberContext = createContext(null);
function MemberContextProvider({ children }) {
  const [activeMember, setActiveMember] = useState("Ava Max");

  return (
    <MemberContext.Provider value={{ activeMember, setActiveMember }}>
      {children}
    </MemberContext.Provider>
  );
}

export default MemberContextProvider;
