import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>Adventure Travels</h1>
                <p className="mt-4 ">
                  <h5>Contact With Us</h5>
                  <small>
                    <i className="fab fa-facebook-square px-1"></i>
                    <i className="fas fa-mail-bulk px-1"></i>
                    <i className="fab fa-twitter-square px-1"></i>
                    <i className="fab fa-linkedin-in px-1"></i>
                    <i className="fab fa-whatsapp-square px-1"></i>
                  </small>
                </p>
                <p className="mt-2">
                  <small>Adventure Travels © Adventure.com</small>
                </p>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Hotline</h3>

                <div className="phone align-items-center justify-content-center mt-4">
                  <div>
                    <h5>+001610687014</h5>
                  </div>
                </div>
                <div className="map  align-items-center justify-content-center">
                  <div>
                    <p>
                      Dhaka Banni Ahmmed Tower,
                      <br /> Road: 17 Block: A
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
