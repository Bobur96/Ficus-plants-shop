/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import eror from "../assets/images/error-404/404.png";

function notFound(props) {
  return (
    <>
      <div
        className="breadcrumb-area breadcrumb-height"
        data-bg-image="assets/images/breadcrumb/bg/1-1-1919x388.jpg"
      >
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-12">
              <div className="breadcrumb-item">
                <h2 className="breadcrumb-heading">Error 404</h2>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>404</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="error-404-area section-space-y-axis-100"
        data-bg-image="assets/images/error-404/bg/1-1920x886.png"
      >
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-12 align-self-center">
              <div className="error-404-content">
                <div className="error-404-img">
                  <img src={eror} alt="Error Image" />
                </div>
                <h2 className="title">
                  <span>Oops,</span> page not found!
                </h2>
                <div className="button-wrap">
                  <a className="btn btn-error" href="index.html">
                    Back to home
                    <i className="pe-7s-home"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Main Content Area End Here --> */}

      {/* <!-- Begin Newsletter Area --> */}
      <div
        className="newsletter-area section-border-y-axis"
        data-bg-image="assets/images/newsletter/1-1920x400.jpg"
      >
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12 align-self-center">
              <div className="newsletter-content">
                <h2 className="newsletter-title">
                  Subscribe Our Newsletter & Get Update Everytime
                </h2>
                <form className="newsletter-form" id="mc-form" action="#">
                  <input
                    className="input-field"
                    id="mc-email"
                    type="email"
                    autocomplete="off"
                    name="Enter Your Email"
                    value="Enter Your Email"
                    onblur="if(this.value==''){this.value='Enter Your Email'}"
                    onfocus="if(this.value=='Enter Your Email'){this.value=''}"
                  />
                  <div className="btn-wrap">
                    <button className="btn btn-submit" id="mc-submit">
                      <i className="pe-7s-paper-plane"></i>
                    </button>
                  </div>
                </form>
                {/* <!-- Mailchimp Alerts --> */}
                <div className="mailchimp-alerts text-centre mt-3">
                  <div className="mailchimp-submitting"></div>
                  <div className="mailchimp-success"></div>
                  <div className="mailchimp-error"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default notFound;
