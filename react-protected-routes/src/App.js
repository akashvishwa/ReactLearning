import React,{ useContext } from 'react';
import './App.css';
import { UserContext } from './contexts/Contexts';
import { Login } from './components/Login';

// author akash vishwakarma

function App() {
  const {user,setUser}=useContext(UserContext);
  
  const updateUser=()=>{
    setUser({id:2,name:'django',role:'manager'});
  }
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
