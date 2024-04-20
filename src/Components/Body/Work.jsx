import React from "react";
import "./body.css";
import work from "../../images/work.jpg"

const Work = () => {
  return (
    <div className="body_container work_C">
      <div className="items">
        <div className="work_first_div">
          <h1>Background</h1>
          <p>
            Ocus Prime Studio <br /> Art Director, 2024-2025 <br />
            Graphic Designer, 2023-2024
          </p>
          <h3>
            Freelance Designer and Art <br /> Director, 2025-present
          </h3>
          <p>
            Trempleway Art Academy,
            <br /> 2020-2023 <br /> BA Graphic Design <br /> Magna cum 
          </p>
        </div>
      </div>
      <div className="items">
        <div className="work_second_div">
          <h1>Expertise</h1>
          <ul>
            <li>Branding & Visual <br /> Communication</li>
            <li>Digital Illustration</li>
            <li>Creative Project Management</li>
            <li>Content Visualization & <br /> Execution</li>
            <li>Brand Refresh and <br /> Transformation</li>
          </ul>
        </div>
      </div>
      <div className="items">
        <div className="work_third_div">
         <img src={work} alt="W0rk_images"  loading="lazy" />
        </div>

      </div>
    </div>
  );
};

export default Work;
