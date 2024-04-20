import React from "react";
import "./testimonial.css";
import profile from "../../images/profile.jpg";
const Cards = () => {
  return (
    <div className="card">
      <div className="card_div_1">
        <div>
          <img src={profile} alt="" />
        </div>
        <div>
          <h2>Roger Scott</h2>
          <p>MARKETING MANAGER </p>
        </div>
      </div>
      <div className="card_div_2">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero omnis molestias, ab consequatur eos quod exercitationem, pariatur quia dolorum deleniti 
      </p>
      </div>
    </div>
  );
};

export default Cards;
