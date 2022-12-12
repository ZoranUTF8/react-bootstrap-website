import { useState } from "react";
import { deleteUser } from "../../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateUser } from "../../features/user/userSlice";

const UpdateUserModal = ({ hide }) => {
  const { user } = useSelector((store) => store.user);

  const [userValues, setUserValues] = useState({
    userName: user.userName || "",
    email: user.email || "",
    avatarUrl: user.avatarUrl || "",
    password: user.password || "",
    repeatedPassword: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const modalStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.8)",
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUserValues({ ...userValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { userName, email, avatarUrl, password, repeatedPassword } =
      userValues;

    if (password !== repeatedPassword) {
      toast.error("Passwords do not match.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } else if (!userName || !email || !password || !repeatedPassword) {
      toast.error("Check your input.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } else {
      dispatch(updateUser(userValues));
      hide();
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
              Update user profile
            </h5>
            <button type="button" className="btn-close" onClick={hide}></button>
          </div>
          <div className="modal-body">
            <form className="d-flex flex-column" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="userName">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="userNameInput"
                  name="userName"
                  minLength={3}
                  maxLength={30}
                  aria-describedby="emailHelp"
                  placeholder="Enter new username"
                  value={userValues.userName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="emailInput">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={userValues.email}
                  onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="passwordInput">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordInput"
                  minLength={8}
                  name="password"
                  placeholder="Password"
                  value={userValues.password}
                  onChange={handleChange}
                  autoComplete="newPassword"
                />
              </div>
              <div className="form-group">
                <label htmlFor="passwordInputRepeat">Repeat password</label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordInputRepeat"
                  placeholder="Password"
                  minLength={8}
                  name="repeatedPassword"
                  value={userValues.repeatedPassword}
                  onChange={handleChange}
                  autoComplete="newPassword"
                />
                <small id="passwordHelp" className="form-text text-muted">
                  Make sure your passwords match.
                </small>
              </div>

              <button type="submit" className="btn btn-primary mt-3">
                Submit
              </button>
            </form>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={hide}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserModal;
