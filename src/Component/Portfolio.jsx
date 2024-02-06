import React, { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Portfolio() {
  const [imageName, setImageName] = useState("");
  const [showModal, setShowModal] = useState(false);
  function displayClickedImage(imageName) {
    setImageName(imageName);
    setShowModal(true);
  }

  return (
    <>
      <div className="main portfolio">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                onClick={() => {
                  displayClickedImage(require("../assest/poert1.png"));
                }}
                src={require("../assest/poert1.png")}
                alt=""
                className="w-100"
              />
            </div>
            <div className="col-md-4">
              <img
                onClick={() => {
                  displayClickedImage(require("../assest/port3.png"));
                }}
                src={require("../assest/port3.png")}
                alt=""
                className="w-100"
              />
            </div>
            <div className="col-md-4">
              <img
                onClick={() => {
                  displayClickedImage(require("../assest/port2.png"));
                }}
                src={require("../assest/port2.png")}
                alt=""
                className="w-100"
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4">
              <img
                onClick={() => {
                  displayClickedImage(require("../assest/port3.png"));
                }}
                src={require("../assest/port3.png")}
                alt=""
                className="w-100"
              />
            </div>
            <div className="col-md-4">
              <img
                onClick={() => {
                  displayClickedImage(require("../assest/poert1.png"));
                }}
                src={require("../assest/poert1.png")}
                alt=""
                className="w-100"
              />
            </div>
            <div className="col-md-4">
              <img
                onClick={() => {
                  displayClickedImage(require("../assest/port2.png"));
                }}
                src={require("../assest/port2.png")}
                alt=""
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
      {/* ~==========================>>>>Modal<<<<<<<<<============================= */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Body>
          {showModal && <img src={imageName} alt="Clicked" className="w-100" />}
        </Modal.Body>
      </Modal>
      {/* ~==========================>>>>end of Modal<<<<<<<<<======================= */}
    </>
  );
}
