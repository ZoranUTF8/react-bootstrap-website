import { useSelector, useDispatch } from "react-redux";

const ViewEmployee = () => {
  const {
    firstName,
    lastName,
    age,
    salary,
    address,
    position,
    department,
    education,
    status,
  } = useSelector((store) => store.employee);

  return (
    <div className="fullPage ">
      <div className="container row p-3">
        <h3 className="display-5">Employee details</h3>

        <div className="row mb-2">
          <div className="col-sm-12 col-md-6">
            <div className="form-group">
              <label htmlFor="firstname">Firstname</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                aria-describedby="firstnameHelp"
                placeholder="Firstname"
                value={firstName}
                name="firstName"
                readOnly
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form-group">
              <label htmlFor="lastname">Lastname</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                aria-describedby="lastname"
                placeholder="Lastname"
                value={lastName}
                name="lastName"
                readOnly
              />
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                placeholder="Age"
                value={age}
                name="age"
                readOnly
              />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="salary">Salary</label>
              <input
                type="number"
                className="form-control"
                id="salary"
                placeholder="Salary"
                value={salary}
                name="salary"
                readOnly
              />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="education">Education</label>
              <input
                type="text"
                className="form-control"
                id="education"
                aria-describedby="education"
                placeholder="Education"
                value={education}
                name="education"
                readOnly
              />
            </div>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-sm-12 col-md-6">
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Address"
                value={address}
                name="address"
                readOnly
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form-group">
              <label htmlFor="Position">Position</label>
              <input
                type="text"
                className="form-control"
                id="position"
                aria-describedby="position"
                placeholder="Position"
                value={position}
                name="position"
                readOnly
              />
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-12 col-md-6">
            <div className="form-group">
              <label htmlFor="department ">Department</label>
              <input
                type="text"
                className="form-control"
                id="department"
                placeholder="Department"
                value={department}
                name="department"
                readOnly
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form-group">
              <label htmlFor="status">Status</label>
              <input
                type="text"
                className="form-control"
                id="status"
                aria-describedby="status"
                placeholder="Status"
                value={status}
                name="status"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
