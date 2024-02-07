import React from "react";
import "../../Css/Footer.css";

export default function Footer() {
  return (
    <>
      <div className=" footer   d-flex flex-column flex-flex-wrap">
        <div className="  container d-flex justify-content-between text-center py-3">
          <div className="location d-flex flex-column">
            <h2>Location</h2>
            <span>2215 John Daniel Drive</span>
            <span>Clark, MO 65243</span>
          </div>
          <div className="aroundWeb d-flex flex-column">
            <h2>Around The Web</h2>
            <div class="icons">
              <i class="fa-brands fa-facebook "></i>
              <i class="fa-brands fa-twitter "></i>
              <i class="fa-brands fa-linkedin-in "></i>
              <i class="fa-solid fa-globe "></i>
            </div>
          </div>
          <div className="freelancer d-flex flex-column">
            <h2>About Freelance</h2>
            <span>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </span>
          </div>
        </div>
        <div className="Copyright">Copyright © Your Website 2021</div>
      </div>
    </>
  );
}
