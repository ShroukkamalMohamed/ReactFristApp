import React from "react";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <>
      <div className="mainbg-background main text-center ">
        <div className="container ">
          <div className="aboutHead">
            <h1>ABOUT COMPONENT</h1>
          </div>
          <div className="star d-flex justify-content-center align-items-center">
            <div className="beforestar"></div>
            <i className=" star fa-solid fa-star"></i>
            <div className="afterstar"></div>
          </div>
          <div className="aboutDetails d-flex p-3">
            <p className="fs-5 p-4">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
            <p className="fs-5 p-4">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
