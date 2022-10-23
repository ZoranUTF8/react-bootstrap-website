import { useState, useEffect } from "react";
import loginPage from "../../assets/images/loginPage.svg";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, registerUser } from "../../features/user/userSlice";
import { useNavigate } from "react-router-dom";
const initialUserState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Login = () => {
  // Component state
  const [userState, setUserState] = useState(initialUserState);
  const { user, isLoading } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // check if user is already logged in
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user]);

  // Component functions
  const handleChange = (evt) => {
    evt.preventDefault();
    const { name, value } = evt.target;
    setUserState({ ...userState, [name]: value });
  };
  // Handle form submission
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const { email, password, name, isMember } = userState;

    if (!email || !password || (!isMember && !name)) {
      return toast.error("Check your input", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
    isMember
      ? dispatch(loginUser({ email, password }))
      : dispatch(registerUser({ email, password, name }));
  };
  // Toggle member
  const toggleMember = () => {
    setUserState((prevState) => ({
      ...prevState,
      isMember: !prevState.isMember,
    }));
  };

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
            <p className="text-center d-flex justify-content-center align-items-center">
              {userState.isMember ? "Not Registered ?" : "Already Registered ?"}
              <button className="btn" onClick={toggleMember}>
                {userState.isMember ? "Register" : "Login"}
              </button>
            </p>
          </form>
        </div>
        <div className="col-md-8">
          <img src={loginPage} alt="login image" className="img-fluid w-100" />
        </div>
      </div>
    </div>
  );
};

export default Login;
