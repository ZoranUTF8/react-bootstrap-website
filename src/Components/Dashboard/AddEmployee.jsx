import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  handleFormChange,
  clearFormValues,
  updateEmployee,
  createEmployee,
} from "../../features/employee/employeeSlice";
import Loading from "../Loading/Loading";

const AddEmployee = () => {
  const dispatch = useDispatch();

  const {
    isLoading,
    firstName,
    lastName,
    age,
    salary,
    address,
    position,
    department,
    educationOptions,
    education,
    statusOptions,
    status,
    isEditing,
    editEmployeeId,
  } = useSelector((store) => store.employee);

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !age ||
      !salary ||
      !address ||
      !position ||
      !department ||
      !education ||
      !status
    ) {
      toast.error("Please check your input");
      return;
    }

    if (isEditing) {
      dispatch(
        updateEmployee({
          firstName,
          lastName,
          age,
          salary,
          address,
          position,
          department,
          education,
          status,
        })
      );
      return;
    }

    dispatch(
      createEmployee({
        firstName,
        lastName,
        age,
        salary,
        address,
        position,
        department,
        education,
        status,
      })
    );
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleFormChange({ name, value }));
  }

  return (
    <div className="container fullPage">
      <form className="p-3" onSubmit={handleSubmit}>
        <h3 className="display-5">
          {isEditing ? "Edit employee" : "Add employee"}
        </h3>

        <div className="row mb-3">
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
                onChange={handleChange}
                name="firstName"
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
                onChange={handleChange}
                name="lastName"
              />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="firstname">Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                placeholder="Age"
                value={age}
                onChange={handleChange}
                name="age"
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
                onChange={handleChange}
                name="salary"
              />
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="inputState">Education</label>
              <select
                id="inputState"
                className="form-control"
                value={education}
                onChange={handleChange}
                name="education"
              >
                <option defaultValue>High school</option>
                <option>Associate</option>
                <option>Bachelors</option>
                <option>Masters</option>
                <option>Doctoral</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-12 col-md-6">
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Address"
                value={address}
                onChange={handleChange}
                name="address"
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
                onChange={handleChange}
                name="position"
              />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-12 col-md-6">
            <div className="form-group">
              <label htmlFor="department ">Department</label>
              <input
                type="text"
                className="form-control"
                id="department"
                placeholder="Department"
                value={department}
                onChange={handleChange}
                name="department"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form-group">
              <label htmlFor="inputState">Status</label>
              <select
                id="inputState"
                className="form-control"
                value={status}
                onChange={handleChange}
                name="status"
              >
                <option defaultValue>employed</option>
                <option>not-employed</option>
                <option>suspended</option>
                <option>sick-leave</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-2">
            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={isLoading}
            >
              {isEditing && "Update"}
              {isLoading && !isEditing && <Loading />}
              {!isLoading && !isEditing && "Add"}
            </button>
          </div>
          <div className="col-sm-12 col-md-6">
            <button
              type="button"
              className="btn btn-secondary w-100"
              onClick={() => dispatch(clearFormValues())}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
