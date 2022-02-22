import React, { useState } from "react";
import FetchApiData from "./FetchApiData";
import "./Style/login.css";
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName && password) {
      <FetchApiData userName={userName} password={password} />;
    } else {
      console.log("empty values");
    }
  };
  return (
    <>
      <div className="flex">
        <div className="box">
          <div className="innerBox">
            <h1>LOGIN PAGE</h1>
            <hr />
            <form onSubmit={handleSubmit}>
              <input
                className="marginTop"
                type="text"
                id="userName"
                name="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your userName "
              />
              <br />

              <input
                className="copyWidth"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password ...."
              />
              <br />

              <button type="submit" className="button">
                LOG IN
              </button>
            </form>
            <br />
            <br />
            <br />
            <br />
            <hr />
            <h4 className="topMargin">Powered by Team SKM</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
