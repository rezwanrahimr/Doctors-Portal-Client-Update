import { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointment from "../AvailableAppointment/AvilableAppointment";

const MakeAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <section>
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppointmentBanner>
      <AvailableAppointment selectedDate={selectedDate}></AvailableAppointment>
    </section>
  );
};

export default MakeAppointment;
