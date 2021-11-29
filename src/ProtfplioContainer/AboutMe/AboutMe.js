import React from 'react';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className="section">
        <div className="container">
          <div className="content-section">
            <div className="title">
              <h1>About Me</h1>
            </div>
            <div className="content">
              <h3>
                <strong> Full-Stack-Web Developer</strong>
               
              </h3>
              <p>
                I am a Full-Stack Developer with excellent at adopting new
                technologies. Able to work at great proficiency, clean and
                efficient coding. Ready to take the challenging role. Skilled in
                React, MongoDB, and well-known CSS Frameworks like Bootstrap,
                Tailwind and MUI Express, Node.js
              </p>
              <div className="button">
                {/* <Link to="/all-products"><a href="http://www.google.com">Explore More Product</a></Link> */}
              </div>
            </div>
            <div className="social">
              <a href="http://www.google.com">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="http://www.google.com">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="http://www.google.com">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="image-section">
            <img
              src="https://i.ibb.co/nCg1yxh/pexels-neosiam-590750.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default AboutMe;