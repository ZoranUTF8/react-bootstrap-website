import { useState, useEffect } from "react";
import loginPage from "../../assets/images/loginPage.svg";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import {
  loginUser,
  registerUser,
  uploadUserAvatar,
} from "../../features/user/userSlice";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";

const initialUserState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  imageFile: null,
};

const Login = () => {
  // Component state
  const [userState, setUserState] = useState(initialUserState);
  const { user, isLoading } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // check if user is already logged in
  useEffect(() => {
    user && navigate("/admin");
  }, [user]);

  // Component functions
  const handleChange = (evt) => {
    evt.preventDefault();
    const { name, value } = evt.target;
    setUserState({ ...userState, [name]: value });
  };
  // Handle form submission
  //! FIX
  const handleSubmit = async (evt) => {
    evt.preventDefault();

    let { email, password, isMember, name, imageFile } = userState;

    console.log("handleSubmit");
    switch (isMember) {
      case true:
        if (!email || !password) {
          return toast.error("Check your input", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        } else {
          dispatch(loginUser({ email, password }));
        }
        break;
      case false:
        if (!email || !password || !name || !imageFile) {
          return toast.error("Check your input", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        } else {
          const {
            payload: { url: avatarUrl },
          } = await dispatch(uploadUserAvatar(userState.imageFile));

          dispatch(registerUser({ email, password, name, avatarUrl }));
        }
        break;

      default:
        console.log("No such option");
        break;
    }
  };

  // Handle demo user
  const handleDemoUser = () => {
    dispatch(loginUser({ email: "testuser@gmail.com", password: "testuser" }));
  };
  // Toggle member
  const toggleMember = () => {
    setUserState((prevState) => ({
      ...prevState,
      isMember: !prevState.isMember,
    }));
  };

  const handleFile = (e) => {
    let file = e.target.files[0];
    setUserState({ ...userState, imageFile: file });
  };

  if (isLoading) return <Loading />;
  return (
    <div className="container p-3">
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <form onSubmit={handleSubmit}>
            <h1>{userState.isMember ? "Login" : "Register"}</h1>
            {!userState.isMember && (
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={userState.name}
                  onChange={handleChange}
                  minLength="3"
                  maxLength="30"
                />
                {/* Image upload */}

                <input
                  type="file"
                  name="file"
                  id="file"
                  className="form-control form-control-sm mt-3"
                  onChange={(e) => handleFile(e)}
                />
              </div>
            )}

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                value={userState.email}
                onChange={handleChange}
              />

              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={userState.password}
                onChange={handleChange}
                minLength="8"
              />
            </div>
            <button
              type="submit"
              className="btn btn-info w-100 mb-1"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
            <button
              type="button"
              className="btn btn-success w-100 mb-1"
              disabled={isLoading}
              onClick={handleDemoUser}
            >
              {isLoading ? "Loading..." : "Live demo"}
            </button>
            {/* is member toggle button */}
            <p className="text-center d-flex justify-content-center align-items-center">
              {userState.isMember ? "Not Registered ?" : "Already Registered ?"}
              <button className="btn" onClick={toggleMember}>
                {userState.isMember ? "Register" : "Login"}
              </button>
            </p>
          </form>
        </div>
        <div className="col-md-8">
          <img
            src={loginPage}
            alt="login image"
            className="img-fluid w-100"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
