import React from "react";

const Modal = ({ title, body, hide }) => {
  console.log(title, body);

  const modalStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.8)",
  };
  return (
    <div className="modal show fade" style={modalStyle}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {title}
            </h5>
            <button type="button" className="btn-close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{body}</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={hide}>
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
