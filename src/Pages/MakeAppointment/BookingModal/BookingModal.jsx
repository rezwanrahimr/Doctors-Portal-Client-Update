import { format } from "date-fns";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import Swal from "sweetalert2";

const BookingModal = ({
  selectdAppointment,
  selectedDate,
  setSelectedAppointment,
  refetch,
}) => {
  const { name, slots } = selectdAppointment;
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const slots = form.slots.value;
    const fullName = form.name.value;
    const number = form.number.value;
    const email = form.email.value;

    const booking = {
      appointmentDate: date,
      treatmentName: name,
      patientName: fullName,
      slots,
      email,
      number,
    };

    // Post Booking Database
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setSelectedAppointment(null);
          Swal.fire("Success !", "Booking is Confirm !", "success");
          refetch();
        } else {
          setSelectedAppointment(null);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You Can Booking 1 Treatment ! Try Another Time",
          });
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center">
            {name.toUpperCase()}
          </h3>
          <form
            className="grid gap-5 grid-cols-1 mt-10"
            onSubmit={handleBooking}
          >
            <input
              type="text"
              value={format(selectedDate, "PP")}
              name="date"
              readOnly
              className="input input-bordered w-full "
            />
            <select className="select select-bordered w-full " name="slots">
              {slots?.map((element, index) => (
                <option key={index} value={element}>
                  {element}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              readOnly
              value={user?.displayName}
              className="input input-bordered w-full "
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              readOnly
              value={user?.email}
              className="input input-bordered w-full "
            />
            <input
              type="number"
              required
              placeholder="Phone Number"
              name="number"
              value={user?.phoneNumber}
              className="input input-bordered w-full "
            />
            <input type="submit" className="btn btn-accent w-full mt-2" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
