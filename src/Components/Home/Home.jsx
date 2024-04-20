import React from "react";
import "./home.css";
import brand from "../../images/brand_images.jpeg";
import Bio from "../Body/Bio";
import Work from "../Body/Work";
import About from "../Body/About";
import Myskills from "../Body/Myskills";
import Testimonial from "../Body/Testimonial";
import Services from "../Body/Services";
import Experiences from "../Body/Experiences";

const Home = () => {
  return (
    <>
      <div className="home_container">
        <div className="top_left">
          <div className="hero_container">
            <nav className="top_nav_bar">
            <li><a href="#aboutus">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#myskills">Skills</a></li>
              <li><a href="#Testimonial">Testimonial</a></li>
              <li><a href="#Experience">Experience</a></li>


            </nav>
            <div className="hero_text_1">
              <p>portfolio</p>
            </div>
            <div className="hero_text_2">
              <p className="hero_text_2_1">
                <span style={{ color: "lightcoral" }}>R</span>ahul
              </p>
              <p className="hero_text_2_2">
                <span style={{ color: "lightcoral" }}>P</span>atel
              </p>
            </div>
            <div className="hero_text_3">
              <div className="hero_text_3_1">
                <p>Software Developer & Designer</p>
                <hr />
              </div>
              <div className="hero_text_3_2">
                <p>
                  
                  <a
                    href="mailto:rr710505@gmail.com?subject=Inquiry%20About%20Your%20Service&body=Hello,%0D%0A%0D%0AI'm reaching out to inquire about your services. Please provide me with more information.%0D%0A%0D%0AThank you."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#F08D8D" }}
                  >
                    Email me
                  </a>
                </p>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div className="top_right">
          <img
            className="top_right_img"
            src={brand}
            alt="brand_img"
            loading="lazy"
          />
        </div>
      </div>
      <Bio />
      <Work />
      <About />
      <Myskills />
      <Testimonial />
      <Services />
      <Experiences />
    </>
  );
};

export default Home;
