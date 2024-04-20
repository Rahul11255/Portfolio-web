import React from "react";
import "./myskills.css";
import Prog from "./Prog";

const Myskills = () => {
  return (
    <>
      <section className="skill_container" id="myskills">
        <div className="top_skill_Text">
          <h1>My Skills</h1>
        </div>
        <div className="center_skill_text">
          <Prog
            div1h5={"ADOBE PHOTOSHOP"}
            div2h5={"JAVASCRIPT"}
            div3h5={"WORDPRESS"}
            span1={"90"}
            span2={"85"}
            span3={"89"}
          />
          <br />
          <Prog
            div1h5={"FIGMA"}
            div2h5={"HTML5"}
            div3h5={"ADOBE XD"}
            span1={"85"}
            span2={"95"}
            span3={"80"}
          />
          <Prog
            div1h5={"ADOBE ILLUSTRATOR"}
            div2h5={"CSS3"}
            div3h5={"SEO"}
            span1={"90"}
            span2={"95"}
            span3={"80"}
          />
        </div>
      </section>
    </>
  );
};

export default Myskills;
