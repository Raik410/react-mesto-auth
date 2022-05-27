import React, { useState } from "react";
import "../styles/Login.css";
import * as auth from '../utils/auth.js';
function Login(props) {
    const [message, setMessage] = useState('');
  const [formParams, setFormParams] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSumbit(e) {
    e.preventDefault();
    if (!formParams.email || !formParams.password){
        return;
      }
      props.handleLogin({ email: formParams.email, password: formParams.password })
      .catch(err => {
                setMessage(err.message);
              });
  }

  return (
    <div className="login">
      <h2 className="login__title">Вход</h2>
      <div className="login__container">
        <form onSubmit={handleSumbit} className="login__form">
            {message}
          <input
            className="login__input"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            onChange={handleChange}
            value={formParams.email}
          />
          <input
            className="login__input"
            name="password"
            type="password"
            id="password"
            placeholder="Пароль"
            onChange={handleChange}
            value={formParams.password}
          />
          <button type="submit" className="login__button">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
