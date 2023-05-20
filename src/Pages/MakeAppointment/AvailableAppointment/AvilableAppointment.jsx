import { format } from "date-fns";

const AvailableAppointment = ({ selectedDate }) => {
  return (
    <section>
      <div className="text-center">
        <p className="font-bold text-primary">
          Available Services on {format(selectedDate, "PP")}
        </p>
        <p>Please select a service.</p>
      </div>
    </section>
  );
};

export default AvailableAppointment;
