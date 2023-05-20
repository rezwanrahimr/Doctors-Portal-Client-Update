import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="hero banner-bg">
      <div className="hero-content  banner-content flex-col lg:flex-row-reverse justify-between">
        <div>
          <img
            src={chair}
            className=" rounded-lg shadow-2xl"
            width={"594px"}
            height={"355px"}
          />
        </div>
        <div className="me-14">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
