import React from "react";
import HeroImage from "../../asset/images/hero-image.png";
import { ReactComponent as ArrowIcon } from "../../asset/icons/arrow-right.svg";
import { ReactComponent as DownloadIcon } from "../../asset/icons/download-icon.svg";
import Button from "../Button/Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <div className="hero-section-wrapper center">
        <div className="hero-section equal-margin">
          <div className="hero-left">
            <h1>Hi, I'm Razesh</h1>
            <h3>Frontend Developer</h3>
            <p>
              I'm creative designer based on Nepal, and I am very dedicated and
              passionate to my work.
            </p>
            <div className="hero-btns">
              <Button type="body" btnLabel="Hire Me" icon={<ArrowIcon />} />
              <Button
                type="outline"
                btnLabel="Download CV"
                icon={<DownloadIcon />}
              />
            </div>
          </div>
          <div className="hero-right">
            <img src={HeroImage} alt="" height={600} />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
