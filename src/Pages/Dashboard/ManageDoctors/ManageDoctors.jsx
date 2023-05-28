import { useQuery } from "react-query";
import Loader from "../../Shared/Loader/Loader";
import Swal from "sweetalert2";
const ManageDoctors = () => {
  // Get All Doctors
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["/doctors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/doctors");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  //   Delete Doctor
  const handleDeleteDoctor = (_id) => {
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
        fetch(`http://localhost:5000/doctors/${_id}`, {
          method: "DELETE",
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch();
            }
          });
      }
    });
  };
  return (
    <div>
      {data.length == 0 ? (
        <div className="flex items-center justify-center">
          <h1 className="font-bold">No Data Found !</h1>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold my-5">MANAGE DOCTORS</h1>

          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr className="text-white">
                  <th></th>
                  <th>AVATAR</th>
                  <th>NAME</th>
                  <th>SPECIALITY</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((doctor, i) => (
                  <tr key={doctor._id}>
                    <th>
                      <label>{i + 1}</label>
                    </th>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={doctor?.photo} alt="Doctor Photo" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">{doctor.name}</div>
                          <div className="text-sm opacity-50">Bangladesh</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {doctor.specialty}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        Doctors Portal
                      </span>
                    </td>
                    <td>
                      <button
                        className="btn btn-error text-white"
                        onClick={() => handleDeleteDoctor(doctor._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageDoctors;
