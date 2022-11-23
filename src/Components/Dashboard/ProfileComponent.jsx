import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import defaultUserAvatar from "../../assets/images/defaultUserAvatar.jpeg";
import userProfile from "../../assets/images/userProfile.svg";

const ProfileComponent = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const avatarUrl = user?.user?.avatarUrl || defaultUserAvatar;

  // console.log(user);

  const [userData, setUserData] = useState({
    userName: user?.userName || "",
    avatarUrl: user?.avatarUrl || defaultUserAvatar,
    userEmail: "",
    userPassword: "",
  });

  // add logic for deleting and updating a user
  function handleSubmit(e) {
    e.preventDefault();
  }

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="container fullPage">
      <div className="row g-3">
        <div className="col-md-12 col-lg-6 ">
          <form>
            <div className="row g-3">
              <div className="form-group">
                <label htmlFor="userName">Username:</label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  name="userName"
                  value={userData.userName}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <img
                  src={userData.avatarUrl}
                  class="rounded mx-auto d-block"
                  alt="user avatar"
                />
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
            </div>
          </form>
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
  );
};

export default ProfileComponent;
