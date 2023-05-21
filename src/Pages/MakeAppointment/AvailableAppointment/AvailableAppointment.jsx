import { format } from "date-fns";
import { useEffect, useState } from "react";
import AppointmentOptions from "../AppointmentOptions/AppointmentOptions";
import BookingModal from "../BookingModal/BookingModal";

const AvailableAppointment = ({ selectedDate }) => {
  const [availableOptions, setAvailableOptions] = useState([]);
  const [selectdAppointment, setSelectedAppointment] = useState(null);
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
            setSelectedAppointment={setSelectedAppointment}
          ></AppointmentOptions>
        ))}
      </div>

      {selectdAppointment && (
        <BookingModal
          selectdAppointment={selectdAppointment}
          selectedDate={selectedDate}
          setSelectedAppointment={setSelectedAppointment}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointment;
