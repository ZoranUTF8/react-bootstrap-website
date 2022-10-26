import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const ProfileComponent = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    userName: user?.userName || "",
  });

  // add logic for deleting adn updating a user
  function handleSubmit(e) {
    e.preventDefault();
    if (!userData.userName) {
      toast.error("Check your input");
      return;
    }

    console.log("ola");
  }

  return (
    <form
      className="p-3 d-flex flex-column justify-content-center"
      onSubmit={handleSubmit}
    >
      <div className="row g-3 d-flex flex-row justify-content-center">
        <div className="mb-3 col-md-6">
          <label for="username" className="form-label">
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
          <div id="usernameHelp" className="form-text">
            Your username
          </div>
        </div>
      </div>

      <div class="row d-flex justify-content-center">
        <div className="col-sm-12 col-md-6 align-self-center">
          <button class="btn btn-primary w-100" type="submit">
            Delete account
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfileComponent;
