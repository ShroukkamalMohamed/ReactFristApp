import React from "react";
export default function Home() {
  return (
    <>
      <div className="main home text-center mainbg-background">
        <img
          src={require("../assest/avataaars.svg").default}
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
