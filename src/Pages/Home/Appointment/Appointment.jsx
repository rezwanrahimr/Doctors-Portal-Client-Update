import doctor from "../../../assets/images/doctor-small.png";
import "./Appointment.css";

const Appointment = () => {
  return (
    <div className="hero  appointment-container">
      <div className="hero-content flex-col lg:flex-row relative ">
        <div className="absolute img-position">
          <img
            src={doctor}
            className="max-w-sm rounded-lg shadow-2xl invisible md:visible"
            alt="doctor "
          />
        </div>
        <div className="grid justify-items-end">
          <div className="text-white  md:w-1/2 p-4 md:p-0">
            <h2 className="font-bold text-secondary text-xl">Appointment</h2>
            <h1 className="text-4xl font-semi-bold">
              Make an appointment Today
            </h1>
            <p className=" md:py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
