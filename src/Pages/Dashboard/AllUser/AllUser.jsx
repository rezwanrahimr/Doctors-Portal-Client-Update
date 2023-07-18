import { useQuery } from "react-query";
import Swal from "sweetalert2";

const AllUser = () => {
  // get all users
  const { data: users = [], refetch } = useQuery({
    queryKey: ["/users"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctors-portal-server-2023-ivory.vercel.app/users",
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

  const handleAdmin = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You went to admin this !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://doctors-portal-server-2023-ivory.vercel.app/admin/${_id}`,
          {
            method: "PUT",
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              refetch();
            }
          });
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://creative-agency-backend-henna.vercel.app/user/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              refetch();
            }
          });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div>
      <h1 className="text-3xl font-bold my-5">ALL USERS</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-white">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Remove User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button className="" onClick={() => handleAdmin(user._id)}>
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button className="" onClick={() => handleDelete(user._id)}>
                    Remove User
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

export default AllUser;
