import { format } from "date-fns";

const BookingModal = ({
  selectdAppointment,
  selectedDate,
  setSelectedAppointment,
}) => {
  const { name, slots } = selectdAppointment;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const slots = form.slots.value;
    const fullName = form.name.value;
    const number = form.number.value;
    const email = form.email.value;

    console.log(`
    ${date}
    ${slots}
    ${fullName}
    ${number}
    ${email}
    `);

    setSelectedAppointment(null);
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
              className="input input-bordered w-full "
            />
            <input
              type="number"
              placeholder="Phone Number"
              name="number"
              className="input input-bordered w-full "
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
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
