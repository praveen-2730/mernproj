import React from "react";

const Contact = () => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-light">
      <div
        className="p-4 bg-white rounded shadow"
        style={{ width: "400px", marginTop: "150px" }}
      >
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Example textarea</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;
