import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
  const { user } = useContext(AuthContext);
  const booking = useLoaderData();

  //   stripe
  const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_PK}`);
  const { appointmentDate, email, patientName, slots, treatmentName, price } =
    booking;
  return (
    <div>
      <div>
        <h1>Hello, {user.displayName}</h1>
        <h2>Please Pay for {treatmentName}</h2>
        <p>
          Your Appointment:{appointmentDate} at {slots}
        </p>
        <p>Please Pay: ${price}</p>
      </div>
    </div>
  );
};

export default Payment;
