import React from "react";

export default function Contact() {
  return (
    <>
      <div className="main Contact container text-center">
        <div className="ContactHead">
          <h1>Contact Component</h1>
        </div>
        <div className="star d-flex justify-content-center align-items-center">
          <div className="beforestar"></div>
          <i className=" star fa-solid fa-star"></i>
          <div className="afterstar"></div>
        </div>
      <div className="form W-25 m-auto">
        <form >
          <div data-mdb-input-init class="form-outline mb-4">
            <input
              type="email"
              id="form1Example1"
              class="form-control"
              placeholder="UserName"
            />
            <label class="form-label " for="form1Example1">
              userName
            </label>
          </div>

          <div data-mdb-input-init class="form-outline mb-4">
            <input
              type="password"
              id="form1Example2"
              class="form-control"
              placeholder="UserAge"
            />
            <label class="form-label" for="form1Example2">
              UserAge
            </label>
          </div>
          <div data-mdb-input-init class="form-outline mb-4">
            <input
              type="password"
              id="form1Example2"
              class="form-control"
              placeholder="UserEmail"
            />
            <label class="form-label" for="form1Example2">
              UserEmail
            </label>
          </div>
          <div data-mdb-input-init class="form-outline mb-4">
            <input
              type="password"
              id="form1Example2"
              class="form-control"
              placeholder="UserPassword"
            />
            <label class="form-label" for="form1Example2">
              UserPassword
            </label>
          </div>

          <button
            data-mdb-ripple-init
            type="submit"
            class=" submit btn  btn-block w-25 "
          >
            Sign in
          </button>
        </form>
        </div>
      </div>
    </>
  );
}
