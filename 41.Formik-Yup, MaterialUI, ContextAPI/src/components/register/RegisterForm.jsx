import React from "react";
import "./RegisterForm.css";
import { useFormik } from "formik";
// import { useNavigate } from "react-router-dom";

import axios from "axios";
import { registerschema } from "../../shemas/RegisterSchema";
const RegisterForm = () => {
//   const navigate = useNavigate();

  const submitForm = async (values, action) => {
    await axios.post("http://localhost:3000/users", values);
    setTimeout(() => {
      action.resetForm();
    }, 1000);
    // navigate("/login");
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      isLogin: false,
    },
    onSubmit: submitForm,
    validationSchema: registerschema,
  });

  return (
    <div className="register-container">
      <form className="register-form" action="" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div>
          <div className="label-container">
            <label htmlFor="name">Name</label>
            {errors.name ? <span className="error">{errors.name}</span> : null}
          </div>
          <input
            type="text"
            id="name"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="label-container">
            <label htmlFor="surname">Surname</label>
            {errors.surname ? (
              <span className="error">{errors.surname}</span>
            ) : null}
          </div>
          <input
            type="text"
            id="surname"
            value={values.surname}
            onChange={handleChange}
          />
        </div>
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
            <label htmlFor="email">Email</label>
            {errors.email ? (
              <span className="error">{errors.email}</span>
            ) : null}
          </div>
          <input
            type="email"
            id="email"
            value={values.email}
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
        <div>
          <div className="label-container">
            <label htmlFor="confirmpassword">ConfirmPassword</label>
            {errors.confirmpassword ? (
              <span className="error">{errors.confirmpassword}</span>
            ) : null}
          </div>
          <input
            type="password"
            id="confirmpassword"
            value={values.confirmpassword}
            onChange={handleChange}
          />
        </div>
        <button className="register-btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
