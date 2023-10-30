import logo from './logo.svg';
import './App.css';
import {createContext,useState} from 'react';
import UserInfo from './UserInfo';
export const sharedData=createContext();


function App() {
  const [firstName,setFirstName]=useState("Unknown")
const [lastName,setLastName]=useState("Unknown")
const [agree,setAgree]=useState(false)
const updateFirstName =(event) =>{
  setFirstName(event.target.value)
}
const updateLastName =(event) =>{
  setLastName(event.target.value)
}
const updateAgress=(event) =>{
  setAgree(event.target.checked)
}
 
  return (
    <div className="App">
       First Name: <input type="text" name="firstName"  onChange={updateFirstName}/><br/><br/>
        Last Name: <input type="text" name="lastName" onChange={updateLastName}/><br/><br/>
        Agree: <input type="checkbox" name="agree" onChange={updateAgress}/><br/><br/>
      <sharedData.Provider value={{firstName,lastName}}>
       
        {agree ? <UserInfo/> : ""}
        </sharedData.Provider>
    
    </div>
  );
}

export default App;
