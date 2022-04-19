import { ToastContainer, toast } from "react-toastify";
// import { Redirect } from "react-router-dom";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./SignUp.css";

function SignUp(props) {
  const [sign, setSign] = useState(true);
  const [kirish, setKirish] = useState(true);
  const [onSide, setOnSide] = useState(false);
  const query = document.querySelector.bind(document);

  const registered = (e) => {
    e.preventDefault();

    fetch("http://192.168.0.114:8000/v1/auth/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        firstname: query("#firstname").value,
        lastname: query("#lastname").value,
        phoneNumber: query("#phone").value,
        password: query("#password").value,
      }),
    }).then((response) => {
      if (response.status === 201) {
        setSign(true);
        toast.success("we sent code on your phone");
      } else toast.error("Telephone Number Is Already Exixsts");
    });
  };

  const check = (e) => {
    e.preventDefault();
    fetch("http://192.168.0.114:8000/v1/auth/authorization", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ code: query("#sms").value }),
    }).then((response) => {
      if (response.status === 201) {
        query("#sms").value = "";
        setKirish(true);
      } else toast.error("code incorrect");
    });
  };

  const login = (e) => {
    e.preventDefault();
    fetch("http://192.168.0.114:8000/v1/auth/log-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        phoneNumber: query("#loginNumber").value,
        password: query("#loginPassword").value,
      }),
    })
      .then((response) => {
        if (response.status === 201) {
          setOnSide(true);
          localStorage.setItem("sign", "e'lon berish");
        } else toast.error("Telephone Number or password incorrect");
        return response.json();
      })
      .then((res) => {
        localStorage.setItem("token", res.token);
      });
  };

  return (
    <div className=" d-flex align-items-center justify-content-center p-5">
      <ToastContainer autoClose={2000} />
      {sign ? (
        kirish ? (
          onSide ? (
            <Navigate to="/" />
          ) : (
            <form>
              <label>Log-in</label>
              <input
                id="loginNumber"
                type="text"
                className="form-control"
                placeholder="tel nomerni kiriting"
              />
              <input
                id="loginPassword"
                type="password"
                className="form-control"
                placeholder="parolni kiriting"
              />
              <button onClick={login} type="submit" className="btn btn-primary">
                yuborish
              </button>
            </form>
          )
        ) : (
          <form>
            <label>Sms xabarnoma</label>
            <input
              id="sms"
              type="text"
              className="form-control"
              placeholder="sms codeni kiriting"
            />
            <button onClick={check} type="submit" className="btn btn-primary">
              yuborish
            </button>
          </form>
        )
      ) : (
        <form onSubmit={registered}>
          <h2>Send Message</h2>
          <div className="inputBox">
            <input type="text" id="firstname" name="name" required />
            <span>Firat name</span>
          </div>
          <div className="inputBox">
            <input type="text" id="lastname" name="lastname" required />
            <span>Last name</span>
          </div>
          <div className="inputBox">
            <input type="text" id="phone" name="phone number" required />
            <span>Phone number</span>
          </div>
          <div className="inputBox">
            <input type="password" id="password" name="phone number" required />
            <span>Password</span>
          </div>
          <div className="inputBox">
            <input
              onClick={registered}
              id="btn"
              className="btn btn-success"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      )}
    </div>
  );
}

export default SignUp;
