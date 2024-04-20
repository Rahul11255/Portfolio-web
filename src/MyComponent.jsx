// MyComponent.js

import React from 'react';
import  img from "./images/brand_images.jpeg"


const MyComponent = () => {
  return (
    <div className="container">
      <div className="text-container">
        <p>This is some text in the first div.</p>
      </div>

      <div className="list-container">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>

      <div className="image-container">
        <img src={img} alt="Hero" />
      </div>
    </div>
  );
};

export default MyComponent;
