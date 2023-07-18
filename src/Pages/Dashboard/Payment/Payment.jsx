import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "../CheckOutForm/CheckOutForm";

const Payment = () => {
  const { user } = useContext(AuthContext);
  const booking = useLoaderData();

  //   stripe
  const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_PK}`);
  const { appointmentDate, email, patientName, slots, treatmentName, price } =
    booking;

  return (
    <div className="p-8">
      <div style={{ fontFamily: "Pacifico,cursive", lineHeight: "50px" }}>
        <h1 className="text-4xl">
          <span className="text-secondary">Hello,</span> {user.displayName}
        </h1>
        <h2 className="text-3xl my-2">
          Please Pay for <span className="text-secondary">{treatmentName}</span>
        </h2>
        <p className="text-3xl bg-white">
          Your Appointment:{" "}
          <span className="text-secondary">{appointmentDate}</span> at{" "}
          <span className="text-secondary">{slots}</span>
        </p>
        <p className="text-3xl mt-2 bg-white">
          Please Pay: $ <span>{price}</span>
        </p>
      </div>
      <div className="w-96 my-12 bg-white p-8">
        <Elements stripe={stripePromise}>
          <CheckOutForm booking={booking}></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
