import React from "react";
import { deleteUser } from "../../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Modal = ({ title, body, hide, type }) => {
  const { user, isLoading } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const modalStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.8)",
  };

  const handleConfirm = (type) => {
    switch (type) {
      case "delete":
        if (user.userName !== "demo") {
          dispatch(deleteUser(user));
        } else {
          toast.error("Cannot delete demo user", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
          navigate("/admin");
        }
        break;

      default:
        break;
    }
  };

  return (
    <div
      className="modal show fade"
      data-bs-backdrop="static"
      style={modalStyle}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {title}
            </h5>
            <button type="button" className="btn-close" onClick={hide}></button>
          </div>
          <div className="modal-body">{body}</div>
          <div className="modal-footer">
            <button
              type="button"
              className={type === "delete" ? "btn btn-danger" : "btn btn-info"}
              onClick={() => handleConfirm(type)}
            >
              Confirm
            </button>
            <button type="button" className="btn btn-primary" onClick={hide}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
