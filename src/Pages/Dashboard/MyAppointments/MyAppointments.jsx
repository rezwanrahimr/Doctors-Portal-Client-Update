import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../context/AuthProvider";
import Loader from "../../Shared/Loader/Loader";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyAppointments = () => {
  const { user } = useContext(AuthContext);
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookings?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  // Delete Booking Items
  const handleDeleteAppointment = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${_id}`, {
          method: "DELETE",
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semi-bold my-5">MY APPOINTMENT</h2>
      <div className="overflow-x-auto">
        <table className="table w-full  ">
          {/* head */}
          <thead className="bg-white text-white">
            <tr>
              <th></th>
              <th>Name</th>
              <th>TREATMENT</th>
              <th>TIME</th>
              <th>PAYMENT</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((appointment, i) => (
              <tr key={appointment._id}>
                <th>{i + 1}</th>
                <td>{appointment.patientName}</td>
                <td>{appointment.treatmentName}</td>
                <td>{appointment.slots}</td>
                <td>
                  <Link to={`/dashboard/payment/${appointment._id}`}>
                    <button className="btn btn-success text-white">Pay</button>
                  </Link>
                  <button
                    className="btn btn-error ms-3 text-white"
                    onClick={() => handleDeleteAppointment(appointment._id)}
                  >
                    cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
