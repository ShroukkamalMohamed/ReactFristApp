import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import pic1 from "../../assest/poert1.png";
import pic2 from "../../assest/port2.png";
import pic3 from "../../assest/port3.png";
export default function Portfolio() {
  const [imageName, setImageName] = useState("");
  const [showModal, setShowModal] = useState(false);
  function displayClickedImage(imageName) {
    setImageName(imageName);
    setShowModal(true);
  }
  const allimages = [pic1, pic2, pic3, pic2, pic3, pic1];
  return (
    <>
      <div className="main portfolio">
        <div className="container text-center">
          <div className="PortfolioHead">
            <h1>Portfolio Component</h1>
          </div>
          <div className="star d-flex justify-content-center align-items-center">
            <div className="beforestar"></div>
            <i className=" star fa-solid fa-star"></i>
            <div className="afterstar"></div>
          </div>
          <div className="row">
            {allimages.map((e, index) => {
              return (
                <div className="col-md-4 mt-2">
                  <img
                    onClick={() => {
                      displayClickedImage(e);
                    }}
                    src={e}
                    alt=""
                    className="w-100"
                  />
                </div>
              );
            })}
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
