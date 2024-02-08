import React from "react";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <div className="main home text-center mainbg-background d-flex justify-content-center align-items-center flex-column">
        <img
          src={require("../../assest/avataaars.svg").default}
          className="w-100 h-25 "
          alt=""
        />
        <div className="title">
          <h1>START FRAMEWORK</h1>
        </div>
        <div className="star d-flex justify-content-center align-items-center">
          <div className="beforestar"></div>
          <i className=" star fa-solid fa-star"></i>
          <div className="afterstar"></div>
        </div>
        <div className="details">
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}
