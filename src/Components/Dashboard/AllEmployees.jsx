import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getEmployees,
  deleteEmployee,
} from "../../features/allEmployees/allEmployeesSlice";

import moment from "moment";

const AllEmployees = () => {
  const dispatch = useDispatch();

  const { isDeleting, allEmployees, isGettingEmployees } = useSelector(
    (store) => store.allEmployees
  );
  const { isLoading } = useSelector((store) => store.employee);

  useEffect(() => {
    dispatch(getEmployees());
  }, [isDeleting]);

  if (isLoading || isGettingEmployees || isDeleting) {
    return (
      <div class="container fullPage d-flex align-items-center justify-content-center">
        <div class="jumbotron full-height-element d-flex align-items-center justify-content-center flex-column">
          <div class="spinner-border mb-3"></div>
          <h1>Loading</h1>
        </div>
      </div>
    );
  }
  if (allEmployees.length === 0) {
    return (
      <div class="container fullPage d-flex align-items-center justify-content-center">
        <div class="jumbotron full-height-element">
          <h1>No employees found.</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container p-3 fullPage">
      <div class="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Age</th>
              <th scope="col">Salary</th>
              <th scope="col">Address</th>
              <th scope="col">Position</th>
              <th scope="col">Department</th>
              <th scope="col">Education</th>
              <th scope="col">Status</th>
              <th scope="col">Added</th>
              <th scope="col">Joined</th>
              <th scope="col">Updated</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {allEmployees?.map((user) => (
              <tr key={user._id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td>{user.salary}</td>
                <td>{user.address}</td>
                <td>{user.position}</td>
                <td>{user.department}</td>
                <td>{user.education}</td>
                <td>{user.status}</td>
                <td>{user.addedByName}</td>

                <td>{moment(user.createdAt, "YYYYMMDD").fromNow()}</td>
                <td>{moment(user.updatedAt, "YYYYMMDD").fromNow()}</td>
                <td className="float-right">
                  <button
                    className="btn btn-danger mb-1"
                    style={{ width: "80px", opacity: "90%" }}
                    onClick={() => dispatch(deleteEmployee(user._id))}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-primary"
                    style={{ width: "80px", opacity: "90%" }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEmployees;