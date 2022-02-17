import React, { useEffect, useState } from "react";
import validation from "./validation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function SignupForm({ submitForm }) {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setdataIsCorrect] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    setdataIsCorrect(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors]);

  return (
    <div className="container">
      <div className="outer-div">
        <div className="icon">
          {/* <h2><FontAwesomeIcon icon="fas fa-user" /></h2> */}
          <h2>
            <FontAwesomeIcon size="5x" icon={faUser} />
          </h2>
          <form className="form-wrapper">
            <div className="name">
              <label className="label">Full Name</label>
              <input
                className="input"
                type="text"
                name="fullname"
                value={values.fullname}
                onChange={handleChange}
              />
              {errors.fullname && <p className="error">{errors.fullname}</p>}
            </div>
            {/* <div className='email'>
                <label className='label'>Email</label>
                <input 
                className='input' 
                type="email" 
                name='email' 
                value={values.email}
                onChange={handleChange}
                />
                {errors.email && <p className='error'>{errors.email}</p>}

            </div> */}
            <div className="password">
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <div>
              <button className="submit" onClick={handleFormSubmit}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
