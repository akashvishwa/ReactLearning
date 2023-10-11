import React, { createContext, useState } from 'react';

export const UserContext = createContext();
export const AuthContext = createContext();

const defusers=[
  { id: 1, name: "akash", role: "admin", email: 'akash@yopmail.com', password: 'Test@123' },
  { id: 1, name: "manager", role: "manager", email: 'manager@yopmail.com', password: 'Test@123' }
]

export const Contexts = ({ children }) => {
  const [users, setUsers] = useState(defusers);
  const [login, setLogin] = useState();
  return (
    <>
      <AuthContext.Provider value={{ login, setLogin }}>
        <UserContext.Provider value={{ users, setUsers }}>
          {children}
        </UserContext.Provider>
      </AuthContext.Provider>
    </>
  )
}