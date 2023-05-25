import { useQuery } from "react-query";

const AllUser = () => {
  // get all users
  const { data: users = [] } = useQuery({
    queryKey: ["/users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });
  console.log("check", users);
  const handleAdmin = (_id) => {
    fetch(`http://localhost:5000/admin/${_id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
                  {users?.role === "admin" ? (
                    " "
                  ) : (
                    <button className="" onClick={() => handleAdmin(user._id)}>
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button className="">Remove User</button>
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
