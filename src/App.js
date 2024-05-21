import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";

import { Users } from "./data/loginMockup";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
 
  const [userNames, setUsersNames] = useState();
  const [userEmails, setUsersEmails] = useState();
  
  const [error, setError] = useState()

  useEffect (() => {
      const names = Users.map((user) => user.name);
      setUsersNames (names)
      const emails = Users.map((user) => user.email);
      setUsersEmails (emails)
  }, [])


  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleError = () => {
   const nameExists = userNames.includes(name);
   const emailExists = userEmails.includes(email);
   if (nameExists && emailExists) {
    setError(false)
   } else {
    setError(true)
   }
   
  }
   
  const handleEmailChange =  (e) => {
    setEmail(e.target.value);

  }

  const handleSubmit = (e) => { 
    e.preventDefault();
    handleError();
  };

  const isSubmitDisabled = !name || !email;

  console.log ('isSubmitDisabled:', isSubmitDisabled)
  
  return (
    <div className="App">
      <Login name={name} email={email} handleSubmit={handleSubmit} handleNameChange={handleNameChange} handleEmailChange={handleEmailChange} 
      disabled={isSubmitDisabled} />
      {error && <p style={{color: 'red'}}>Error: Invalid name or email</p>}
    </div>
  );
};

export default App;
