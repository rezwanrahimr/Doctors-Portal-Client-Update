import { useState } from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
const AppointmentBanner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="hero banner-bg">
      <div className="hero-content  banner-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className=" rounded-lg shadow-2xl"
          width={"594px"}
          height={"355px"}
        />
        <div>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
          <p>You Have Selected : {format(selectedDate, "PP")}</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
