import React from "react";
import styled from "styled-components";
import axios from 'axios';

const Connection = ({ setUserToken }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (event) => { 
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => { 
    setPassword(event.target.value);
  }


  // async function handleSubmit(event) { ... }
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // email et password
    // envoyer { email, password }
    axios.post('http://localhost:3030/users/auth', {
      email,
      password
    }).then((response) => {
      setUserToken(response.data);
    }).catch((error) => {
      console.log("error ", error)
    });
  }

  return (
    <Container>
      <form>
        <input placeholder="email" 
          onChange={handleEmailChange} 
        />

        <input placeholder="password" type="password" 
          onChange={handlePasswordChange} 
        />

        <button onClick={handleSubmit} >Submit</button>
      </form>
    </Container>);
}

export default Connection;

const Container = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
`;