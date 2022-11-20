import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import defaultUserAvatar from "../../assets/images/defaultUserAvatar.jpeg";

const ProfileComponent = () => {
  const user = useSelector((store) => store.user);
  const avatarUrl = user?.user?.avatarUrl || defaultUserAvatar;
  console.log(user?.user?.avatarUrl);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    userName: user?.userName || "",
  });

  // add logic for deleting and updating a user
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      className="p-3 d-flex flex-column justify-content-center fullPage"
      onSubmit={handleSubmit}
    >
      <div className="row g-3 d-flex flex-row justify-content-center">
        <div className="mb-3 col-md-6">
          <div class="form-group d-flex justify-content-between">
            <label htmlFor="user-avatar" className="form-label">
              Avatar
            </label>
            <img
              src={avatarUrl}
              alt="User avatar"
              className="user-avatar"
              id="user-avatar"
            />
          </div>
          <div class="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={userData.userName}
              aria-describedby="emailHelp"
              readOnly
            />
          </div>
        </div>
      </div>

      <div class="row d-flex justify-content-center">
        <div className="col-sm-12 col-md-6 align-self-center">
          <button class="btn btn-danger w-100" type="submit">
            Delete account
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfileComponent;
