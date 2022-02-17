import React from "react";
// import "./login.css";
import "./Style/login.css";
function Login() {
  return (
    <>
      <div className="flex">
        <div className="box">
          <div className="innerBox">
            <h1>LOGIN PAGE</h1>
            <hr />
            <input
              className="marginTop"
              type="text"
              id="fid"
              name="fid"
              placeholder="Enter your id "
            />
            <br />

            <input
              className="copyWidth"
              type="password"
              id="fpass"
              name="fpass"
              placeholder="Password ...."
            />
            <br />

            <button className="button">LOG IN</button>
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
