  import React from "react";
  import "./Footer.css";
  import { assets } from "../../assets/assets";
  const Footer = () => {
  return(
    <div className="footer" id="footer">
      
      <div className="footer-content">
        <div className="footer-left">
          <img src={assets.logo}/>
          <p>© 2026 Food Delivery. All rights reserved.</p>
          <p></p>Our Online Food Delivery System is designed to make ordering food fast, simple, and convenient. It connects customers with their favorite restaurants through a smooth digital platform, ensuring secure payments, real-time tracking, and reliable service.
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />

        

          </div>
  {/*         
                  <p className="footer-copuright">© Created by dipak 2026 Food Delivery. All rights reserved.</p> */} 

          </div>
                  <div className="footer-center">
                    <h2>COMPANY</h2>
                    <ul>
                      <li>Home</li>
                      <li>About us</li>
                      <li>delivery</li>
                      <li>Privacy policy</li>
                    </ul>
      </div>
        <div className="footer-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+91 8799975679</li>
            <li>dipakpatil200412@gmail.com</li>
          </ul>
          </div>
          
          
  </div>
  <hr />
    <p className="footer-copuright">© Created by DIPAK Food Delivery System. All rights reserved.</p>
    
      </div>
  )
  };
  export default Footer;