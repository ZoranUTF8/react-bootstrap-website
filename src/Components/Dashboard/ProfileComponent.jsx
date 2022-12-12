import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import defaultUserAvatar from "../../assets/images/defaultUserAvatar.jpeg";
import userProfile from "../../assets/images/userProfile.svg";
import demoUserAvatar from "../../assets/images/demoUserAvatar.jpg";
import Modal from "../Utils/Modal";
import UpdateUserModal from "../Utils/UpdateUserModal";
import Loading from "../Loading/Loading";

const ProfileComponent = () => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [updateUserModal, setUpdateUserModal] = useState(false);

  const [modalData, setModalData] = useState({
    title: "",
    body: "",
    type: "",
    action: "",
  });
  const { user, isLoading } = useSelector((store) => store.user);

  const [userData, setUserData] = useState({
    userName: user?.userName || "",
    avatarUrl: user?.avatarUrl || demoUserAvatar,
  });

  const handleProfileAction = (action) => {
    switch (action) {
      case "update":
        setUpdateUserModal(true);
        break;
      case "delete":
        setModalData({
          ...modalData,
          title: "Delete user account",
          body: "Are you sure you want to delete your account?",
          type: "delete",
        });
        setModal(true);

        break;

      default:
        console.log(
          "No such action: " + action + " in profile component line 38."
        );
        break;
    }
  };

  const closeModal = (type) => {
    type === "delete" ? setModal(false) : setUpdateUserModal(false);
  };
  {
  }

  if (isLoading) {
    return <Loading />;
  }
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
                    readOnly={true}
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
          hide={() => closeModal("delete")}
          type={modalData.type}
        />
      )}
      {updateUserModal && <UpdateUserModal hide={() => closeModal("update")} />}
    </>
  );
};

export default ProfileComponent;
