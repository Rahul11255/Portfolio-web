import React, { useEffect, useState } from "react";
import arrowicon from "../images/up-arrow_7356259.png";

const GotoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToTopButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <section className="gototop_container">
    {isVisible && (
      <div onClick={goToTopButton} className="top_btn">
        <img src={arrowicon} alt="arrow" />
      </div>
    )}
    </section>
  );
};

export default GotoTop;
