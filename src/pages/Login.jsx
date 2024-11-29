import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Все поля должны быть заполнены!");
    } else {
      setError("");
      navigate("/main");
    }
  };


  return (
    <LoginContainer>
      <h1>Вход</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Error>{error}</Error>}
        <button type="submit">Войти</button>
      </form>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  text-align: center;

  input {
    margin-left: 170px;
    margin-top: 20px;
    display: flex;
    width: 250px;
    height: 30px;
  }
  button {
    margin-top: 20px;
    width: 100px;
    height: 35px;
    background-color: #008000;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    :hover {
      background-color: #005200;
    }
  }
`;

const Error = styled.p`
  color: red;
  margin-top: 10px;
`;

export default Login;
