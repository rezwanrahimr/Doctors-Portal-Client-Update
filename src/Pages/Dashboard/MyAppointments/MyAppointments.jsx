import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../context/AuthProvider";
import Loader from "../../Shared/Loader/Loader";

const MyAppointments = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading } = useQuery({
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
  console.log(data);
  return (
    <div>
      <h2 className="text-3xl font-bold my-5">My Appointment</h2>
      <div className="overflow-x-auto">
        <table className="table w-full  ">
          {/* head */}
          <thead className="bg-white text-white">
            <tr>
              <th></th>
              <th>Name</th>
              <th>SERVICE</th>
              <th>TIME</th>
            </tr>
          </thead>
          <tbody>
            {data.map((appointment, index) => (
              <tr key={appointment._id}>
                <th>{index + 1}</th>
                <td>{appointment.patientName}</td>
                <td>{appointment.treatmentName}</td>
                <td>{appointment.slots}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
