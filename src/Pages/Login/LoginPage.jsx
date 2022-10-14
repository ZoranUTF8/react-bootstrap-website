import { useState } from "react";
import loginPage from "../../assets/images/loginPage.svg";

const initialUserState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const LoginPage = () => {
  const [userState, setUserState] = useState(initialUserState);

  const handleChange = (evt) => {
    evt.preventDefault();
    console.log(evt.target);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt.target);
  };

  const toggleMember = () => {
    setUserState((prevState) => ({
      ...prevState,
      isMember: !prevState.isMember,
    }));
  };

  console.log(userState);

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
                  value={userState.name}
                  onChange={handleChange}
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
                value={userState.password}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-info w-100 mb-1">
              {userState.isMember ? "Login" : "Register"}
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

export default LoginPage;
