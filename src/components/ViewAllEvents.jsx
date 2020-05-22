import React from "react";

export const ViewAllEvents = () => {
  return (
    <div className="container mt-5">
      <h2>View All Events</h2>
      <input
        className="form-control mr-sm-2 mb-5 mt-5"
        type="search"
        placeholder="Search  by date"
      />
      <table className="table table-bordered ">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Name of event owner</th>
            <th scope="col">Location</th>
            <th scope="col">Comments</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">12/5/2020</th>
            <td>Mark Kamau</td>
            <td>Raddison blue</td>
            <td>Event was awesome</td>
          </tr>
          <tr>
            <th scope="row">14/5/2020</th>
            <td>Jacob nderitu</td>
            <td>Savelberg retreat center</td>
            <td>Improve on the services</td>
          </tr>
          <tr>
            <th scope="row">16/5/2020</th>
            <td>Lucy Kmoyo</td>
            <td>IHUB </td>
            <td>Event was awesome</td>
          </tr>
          <tr>
            <th scope="row">120/5/2020</th>
            <td>Mwaleh Alex</td>
            <td>Mama Ngina street</td>
            <td>Improve on the services</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-outline-success my-2 my-sm-0 mt-5 mr-5">
        {" "}
        Edit Event{" "}
      </button>
      <button className="btn btn-outline-success my-2 my-sm-0  mt-5">
        {" "}
        Update Event{" "}
      </button>
    </div>
  );
};
