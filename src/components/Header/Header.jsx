import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/dark.png";
import search from "../../assets/images/loupe.png";
import user from "../../assets/images/user.png";
import "./Header.css";

function Header() {
  const [locSign, setLocal] = useState("");

  setInterval(() => {
    setLocal(localStorage.getItem("sign"));
  }, 500);

  return (
    <div className="shadow-secondary">
      <header className="d-flex justify-content-between align-items-center pt-2 pb-2 container">
        <Link to="/">
          <img
            id="proniya"
            style={{ marginBottom: "5px" }}
            src={logo}
            alt="logo"
          />
        </Link>
        <nav className="border-muted bg-white d-flex justify-content-center align-items-center m-0 p-0">
          <ul className="d-flex align-items-center m-1 m-0 p-0">
            <li className="nav-link">
              <NavLink to="/">home</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/shop">shop</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/about">about</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </nav>
        <div id="icons" className="d-flex justify-content-between">
          <img src={search} alt="search" />
          <Link to="/sign-up">
            {locSign ? locSign : "Sign Up"}
            <img src={user} alt="user" />
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
