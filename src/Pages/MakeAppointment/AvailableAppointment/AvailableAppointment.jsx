import { format } from "date-fns";
import { useEffect, useState } from "react";
import AppointmentOptions from "../AppointmentOptions/AppointmentOptions";

const AvailableAppointment = ({ selectedDate }) => {
  const [availableOptions, setAvailableOptions] = useState([]);
  useEffect(() => {
    fetch("/public/appointmentOption.json")
      .then((res) => res.json())
      .then((data) => setAvailableOptions(data));
  }, []);
  return (
    <section className="my-14">
      <div className="text-center">
        <p className="font-bold text-primary">
          Available Services on {format(selectedDate, "PP")}
        </p>
        <p>Please select a service.</p>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8 mt-8">
        {availableOptions.map((option) => (
          <AppointmentOptions
            key={option._id}
            availableOptions={option}
          ></AppointmentOptions>
        ))}
      </div>
    </section>
  );
};

export default AvailableAppointment;
