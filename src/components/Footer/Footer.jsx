import React from "react";
import facebook from "../../assets/images/facebook.png";
import telegram from "../../assets/images/telegram.png";
import twitter from "../../assets/images/twitter.png";
import app from "../../assets/images/earth-globe.png";
import logo from "../../assets/images/logo/dark.png";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="border border-muted pt-4">
      <div className="row container pb-4">
        <div className="col-lg-3">
          <div className="footer-widget-item">
            {/* <div className="footer-widget-logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <p className="footer-widget-desc">Lorem ipsum dolor</p> */}
            <div className="social-link with-border">
              <div className="icon">
                <a href="#/">
                  <img id="first" src={facebook} alt="" />
                </a>
                <a href="#/">
                  <img src={twitter} alt="" />
                </a>
                <a href="https://t.me/usmonkhujayev_oo1">
                  <img src={telegram} alt="" />
                </a>
                <a href="http://my-react-portfolioo.netlify.app">
                  <img id="last" src={app} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-3 pb-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright">
                <span className="copyright-text">
                  © 2021 Pronia Made with
                  <i className="fa fa-heart text-danger"></i> by
                  <a href="#/">HasThemes</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
