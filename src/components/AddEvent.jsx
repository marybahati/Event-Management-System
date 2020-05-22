import React, { useState } from "react";

const AddEvent = () => {
  const [owner, setOwner] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [attendees, setaAttendees] = useState([]);
  const [date, setDate] = useState("");
  const [starttime, setStartTime] = useState("");
  const [endtime, setEndTime] = useState("");
  const [img, setImg] = useState("");
  // console.log(owner,location,description,attendees,date,starttime,endtime,img)
  return (
    <div className="container mt-5">
      <h2>Add Event</h2>
      <form className="mt-3">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Event owner</label>
            <input
              type="text"
              className="form-control"
              id="owner"
              value={owner}
              onChange={(event) => setOwner(event.target.value)}
              placeholder="James Mwangi"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="1234 Main St"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Event description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Its a music event"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Confirmed attendees</label>
          <select
            multiple
            className="form-control"
            id="attendees"
            value={attendees}
            onChange={(event) => setaAttendees(event.target.value)}
          >
            <option value="Mary">Mary</option>
            <option value="Bahati">Bahati</option>
            <option value="Kamau">Kamau</option>
            <option value="Mercy">Mercy</option>
          </select>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="inputState">Start date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputState">Start time</label>
            <input
              type="time"
              className="form-control"
              id="starttime"
              value={starttime}
              onChange={(event) => setStartTime(event.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="inputZip">End time </label>
            <input
              type="time"
              className="form-control"
              id="endtime"
              value={endtime}
              onChange={(event) => setEndTime(event.target.value)}
            />
          </div>
        </div>
        <div className="card-deck">
          <div className="card">
            <img
              className="card-img-top"
              src="data:image/jpeg;base64,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"
              alt="Card image cap"
            />
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCQx4_W8ntYOEpmYUPC8qn8kCKptZe-i4lZIgdpRufJP50XEcS&usqp=CAU"
              alt="Card image cap"
            />
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="data:image/jpeg;base64,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"
              alt="Card image cap"
            />
          </div>
        </div>
        <input
          type="file"
          id="img"
          accept="image/*"
          className="mt-5"
          value={img}
          onChange={(event) => setImg(event.target.value)}
        ></input>{" "}
        <br />
        <button type="submit" className="btn btn-primary mt-5 mb-5">
          Share{" "}
        </button>
        <button type="submit" className="btn btn-primary ml-5 mt-5 mb-5">
          Send Invite
        </button>
        <button type="submit" className="btn btn-primary ml-5 mt-5 mb-5">
          Save
        </button>
      </form>
    </div>
  );
};
export default AddEvent;
