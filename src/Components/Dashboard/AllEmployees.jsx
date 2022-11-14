import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getEmployees,
  deleteEmployee,
} from "../../features/allEmployees/allEmployeesSlice";
import {
  setEditEmployee,
  viewEmployee,
} from "../../features/employee/employeeSlice";
import PaginationContainer from "../Pagination/PaginationContainer";
import moment from "moment";

const AllEmployees = () => {
  const dispatch = useDispatch();

  const {
    isDeleting,
    allEmployees,
    isGettingEmployees,
    totalEmployees,
    numOfPages,
    page,
  } = useSelector((store) => store.allEmployees);

  const { isLoading } = useSelector((store) => store.employee);

  useEffect(() => {
    dispatch(getEmployees());
  }, [page, isDeleting]);

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
    <div className="container p-3 fullPage d-flex flex-column">
      <h3 className="display-5 align-self-center">All employees</h3>
      <h5>
        Total {totalEmployees} employee{allEmployees.length > 1 && "s"} found.
      </h5>
      <div class="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-secondary">
            <tr>
              <th scope="col">#</th>
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
            {allEmployees?.map((user, index) => (
              <tr key={user._id} className="table-container ">
                <td>{index}</td>
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

                <td>{moment(user.createdAt).format("ll")}</td>
                <td>{moment(user.updatedAt).format("ll")}</td>
                <td className="table-action-button-container d-flex align-items-center justify-content-center">
                  <button
                    className="btn btn-danger table-action-button"
                    onClick={() => dispatch(deleteEmployee(user._id))}
                  >
                    Delete
                  </button>
                  <Link
                    className="btn btn-primary table-action-button"
                    to={"/admin/add-employees"}
                    onClick={() =>
                      dispatch(
                        setEditEmployee({
                          editEmployeeId: user._id,
                          firstName: user.firstName,
                          lastName: user.lastName,
                          age: user.age,
                          salary: user.salary,
                          address: user.address,
                          position: user.position,
                          department: user.department,
                          education: user.education,
                          status: user.status,
                        })
                      )
                    }
                  >
                    Edit
                  </Link>

                  <Link
                    className="btn btn-primary table-action-button bg-success"
                    to={"/admin/view-employee"}
                    onClick={() =>
                      dispatch(
                        viewEmployee({
                          firstName: user.firstName,
                          lastName: user.lastName,
                          age: user.age,
                          salary: user.salary,
                          address: user.address,
                          position: user.position,
                          department: user.department,
                          education: user.education,
                          status: user.status,
                        })
                      )
                    }
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {numOfPages > 1 && <PaginationContainer />}
    </div>
  );
};

export default AllEmployees;
