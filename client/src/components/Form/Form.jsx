import React from "react";
import { useState } from "react";
import validation from "../validation.js";
import Styles from "../Form/Form.module.css";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setErrors(validation({ ...userData, [name]: value }));
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={Styles.form}>
      <form onSubmit={handleSubmit}>
        <br />
        <br />

        <img className={Styles.formImage} src={"rickForm.jpeg"} alt="Rick" />

        <br />
        <br />

        <div className={Styles.formEmail}>
          <label>E-MAIL: </label>
          <input
            onChange={handleChange}
            value={userData.email}
            type="text"
            name="email"
          />
          {errors.e1 ? (
            <p>{errors.e1}</p>
          ) : errors.e2 ? (
            <p>{errors.e2}</p>
          ) : (
            <p>{errors.e3}</p>
          )}
        </div>

        <br />
        <br />

        <div className={Styles.formPassword}>
          <label>PASSWORD: </label>
          <input
            onChange={handleChange}
            value={userData.password}
            type="text"
            name="password"
          />
          {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>}
        </div>

        <br />
        <br />

        <button type="submit">Submit</button>

        <br />
        <br />
      </form>
    </div>
  );
};

export default Form;
