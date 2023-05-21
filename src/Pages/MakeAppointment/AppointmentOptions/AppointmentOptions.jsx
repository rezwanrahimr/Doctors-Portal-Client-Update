import React from "react";

const AppointmentOptions = ({ availableOptions }) => {
  const { _id, name, slots } = availableOptions;
  return (
    <div className="card  bg-base-100 ">
      <div className="card-body text-center ">
        <h2 className="text-center text-secondary text-2xl font-bold">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Not Available !"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
        </p>
        <div className=" justify-center">
          <button className="btn btn-primary text-white">
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
