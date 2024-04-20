import React from "react";
import "./footer.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import insta from "../../images/insta.png"
import linkdin from "../../images/linkdin.png"
import github from "../../images/github.png"
import fb from "../../images/fb.png"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_containr">
        <div className="footer_img">
          <div className="f-img-d">
            <a href="https://www.instagram.com/rahulpatel11255/">
            <img src={insta} alt="" />
            </a>
          </div>
          <div className="f-img-d">
            <a href="https://www.linkedin.com/in/rahul-patel-323baa213/">
            <img src={linkdin} alt="" />
            </a>
          </div>
          <div className="f-img-d">
          <a href="https://github.com/Rahul11255">
            <img src={github} alt="" />
            </a>
          </div>
          <div className="f-img-d">
          <a href="https://wa.me/9354081946">
            <img src={fb} alt="" />
            </a>
          </div>
        </div>
        <div>
          <p className="copy_right">
            Copyright ©2024 All rights reserved | This Website is made with by
          <span> <FavoriteIcon/> Rahul Patel </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
