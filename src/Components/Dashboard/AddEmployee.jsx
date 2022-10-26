import React from "react";

const AddEmployee = () => {
  return (
    <div className="container fullPage">
      <form className="p-3">
        <div className="row mb-3">
          <div className="col-sm-12 col-md-6">
            <div class="form-group">
              <label for="firstname">Firstname</label>
              <input
                type="text"
                class="form-control"
                id="firstname"
                aria-describedby="firstnameHelp"
                placeholder="Firstname"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div class="form-group">
              <label for="lastname">Lastname</label>
              <input
                type="text"
                class="form-control"
                id="lastname"
                aria-describedby="lastname"
                placeholder="Lastname"
              />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">
            <div class="form-group">
              <label for="firstname">Age</label>
              <input
                type="number"
                class="form-control"
                id="age"
                placeholder="Age"
              />
            </div>
          </div>
          <div className="col-4">
            <div class="form-group">
              <label for="salary">Salary</label>
              <input
                type="number"
                class="form-control"
                id="salary"
                placeholder="Salary"
              />
            </div>
          </div>
          <div className="col-4">
            <div class="form-group">
              <label for="inputState">Education</label>
              <select id="inputState" class="form-control">
                <option selected>High school</option>
                <option>Associate</option>
                <option>Bachelor’s</option>
                <option>Master’s</option>
                <option>Doctoral</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-12 col-md-6">
            <div class="form-group">
              <label for="address">Address</label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="Address"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div class="form-group">
              <label for="Position">Position</label>
              <input
                type="text"
                class="form-control"
                id="position"
                aria-describedby="position"
                placeholder="Position"
              />
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-12 col-md-6">
            <div class="form-group">
              <label for="department ">Department</label>
              <input
                type="text"
                class="form-control"
                id="department "
                placeholder="Department "
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div class="form-group">
              <label for="inputState">Status</label>
              <select id="inputState" class="form-control">
                <option selected>Employed</option>
                <option>Not employed</option>
                <option>Suspended</option>
                <option>Sick leave</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-2">
            <button type="submit" class="btn btn-primary w-100">
              Add
            </button>
          </div>
          <div className="col-sm-12 col-md-6">
            <button type="submit" class="btn btn-primary w-100">
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
