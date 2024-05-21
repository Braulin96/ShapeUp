import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Spinner from "./utilities/Spinner";

import { Users } from "./data/loginMockup";

import Woman from "./assets/images/woman.jpeg";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userNames, setUsersNames] = useState();
  const [userEmails, setUsersEmails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState();
  const [error, setError] = useState();
  const [fetchError, setFetchError] = useState();

  useEffect(() => {
    const names = Users.map((user) => user.name);
    setUsersNames(names);
    const emails = Users.map((user) => user.email);
    setUsersEmails(emails);
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const category = "nature";

  const fetchImages = async () => {
    try {
      const response = await fetch("https://source.unsplash.com/random");
      const image = response.url;
      setCurrentImage(image);
      setIsLoading(false);
    } catch (error) {
      setFetchError(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleError = () => {
    const nameExists = userNames.includes(name);
    const emailExists = userEmails.includes(email);
    if (nameExists && emailExists) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleError();
  };

  const isSubmitDisabled = !name || !email;
  
  return (
    <div className="App">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Login
            name={name}
            email={email}
            handleSubmit={handleSubmit}
            handleNameChange={handleNameChange}
            handleEmailChange={handleEmailChange}
            disabled={isSubmitDisabled}
          />
            {error && (
            <p style={{ color: "red" }}>Error: Invalid name or email</p>
          )}
          <div className="rounded-full overflow-hidden w-[300px] mx-auto mt-[20px]">
            <img src={currentImage} alt="woman" className="bg-cover" />
          </div>
        
        </>
      )}
    </div>
  );
};

export default App;
