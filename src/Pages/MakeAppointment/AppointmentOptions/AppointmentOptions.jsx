import React from "react";

const AppointmentOptions = ({ availableOptions, setSelectedAppointment }) => {
  const { _id, name, slots, price } = availableOptions;
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
        <p>
          Price: <small>{price}</small>
        </p>
        <div className=" justify-center">
          <label
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="btn btn-primary text-white"
            onClick={() => setSelectedAppointment(availableOptions)}
          >
            BOOK APPOINTMENT
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
