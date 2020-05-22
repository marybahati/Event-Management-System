import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export const Home = () => {
  return (
    <Router>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: "teal",
        }}
      >
        <div
          className="mx-auto "
          style={{ width: 400, backgroundColor: "white", marginTop: 200 }}
        >
          <h3 className="pt-5 text-center">Welcome to Fly Events Inc </h3>
          <div className="mb-4 mt-3" style={{ marginLeft: 130 }}>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={<Link to="/create-event" />}
            >
              <Link to="/create-event" style={{ textDecoration: "none" }}>
                {" "}
                Create an Event{" "}
              </Link>
            </button>
          </div>
          <div className="pb-5" style={{ marginLeft: 130 }}>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={<Link to="/view-events" />}
            >
              <Link to="/view-events" style={{ textDecoration: "none" }}>
                {" "}
                View all events{" "}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Router>
  );
};
