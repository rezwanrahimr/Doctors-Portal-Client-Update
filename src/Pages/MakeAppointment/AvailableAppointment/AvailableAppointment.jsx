import { format } from "date-fns";
import AppointmentOptions from "../AppointmentOptions/AppointmentOptions";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "react-query";
import { useState } from "react";
import Loader from "../../Shared/Loader/Loader";

const AvailableAppointment = ({ selectedDate }) => {
  const [selectdAppointment, setSelectedAppointment] = useState(null);
  const date = format(selectedDate, "PP");
  const {
    data: availableOptions,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `https://doctors-portal-server-2023-ivory.vercel.app/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <section className="my-14">
      <div className="text-center">
        <p className="font-bold text-primary">
          Available Services on {format(selectedDate, "PP")}
        </p>
        <p>Please select a service.</p>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-8 mt-8">
        {availableOptions?.map((option) => (
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
          refetch={refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointment;
