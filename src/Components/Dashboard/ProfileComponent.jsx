import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import defaultUserAvatar from "../../assets/images/defaultUserAvatar.jpeg";
import userProfile from "../../assets/images/userProfile.svg";
import demoUserAvatar from "../../assets/images/demoUserAvatar.jpg";
import Modal from "../../utils/Modal";

const ProfileComponent = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(true);
  const [modalData, setModalData] = useState({
    title: "Delete",
    body: "this is body",
  });
  const { user } = useSelector((store) => store.user);

  const [userData, setUserData] = useState({
    userName: user?.userName || "",
    avatarUrl: user?.avatarUrl || demoUserAvatar,
    userEmail: "",
    userPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleProfileAction = (action) => {
  };

  return (
    <>
      <div className="container fullPage">
        <div className="row gx-5 p-2">
          <div className="col-md-12 col-lg-6 ">
            <div className="row gy-3">
              <div className="row gy-3 gx-3">
                <div className="col-md-6 align-self-center">
                  <label htmlFor="userName">Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    name="userName"
                    value={userData.userName}
                    onChange={handleChange}
                    data-toggle="modal"
                    data-target="#userProfileModal"
                  />
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                  <img
                    src={userData.avatarUrl}
                    class="rounded img-thumbnail w-50 user-profile-avatar"
                    alt="user avatar"
                    name="userAvatar"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  name="userPassword"
                  value={userData.userPassword}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="userEmail"
                  value={userData.userEmail}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="pwd"
                  value={userData.userPassword}
                  placeholder="New password"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group d-flex justify-content-center gap-3">
                <button
                  type="submit"
                  className="btn btn-info"
                  onClick={() => handleProfileAction("update")}
                >
                  Update profile
                </button>
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={() => handleProfileAction("delete")}
                >
                  Delete profile
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 mt-5">
            <img
              src={userProfile}
              alt="user profile image"
              className="img-fluid w-100"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {modal && (
        <Modal
          title={modalData.title}
          body={modalData.body}
          hide={() => setModal(false)}
        />
      )}
    </>
  );
};

export default ProfileComponent;
