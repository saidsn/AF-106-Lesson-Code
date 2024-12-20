import React from "react";
import { useFormik } from "formik";
import { loginschema } from "../../shemas/LoginSchema";
import "./LoginForm.css";
import axios from "axios";

const LoginForm = () => {
  const submitForm = async (values, action) => {
    const res = await axios.get("http://localhost:3000/users");
    const updatedUser = {
      ...res.data[0],
      isLogin: true,
    };
    await axios.put(
      `http://localhost:3000/users/${updatedUser.id}`,
      updatedUser
    );
    setTimeout(() => {
      action.resetForm();
    }, 1000);
  };
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      username: "",
      password: "",
      //   isLogin: false,
    },
    onSubmit: submitForm,
    validationSchema: loginschema,
  });
  return (
    <div className="login-container">
      <form className="login-form" action="" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <div className="label-container">
            <label htmlFor="username">Username</label>
            {errors.username ? (
              <span className="error">{errors.username}</span>
            ) : null}
          </div>
          <input
            type="text"
            id="username"
            value={values.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="label-container">
            <label htmlFor="password">Password</label>
            {errors.password ? (
              <span className="error">{errors.password}</span>
            ) : null}
          </div>
          <input
            type="password"
            id="password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <button className="register-btn" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
