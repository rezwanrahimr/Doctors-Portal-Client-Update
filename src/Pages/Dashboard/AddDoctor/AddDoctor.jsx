import { useQuery } from "react-query";
import Loader from "../../Shared/Loader/Loader";
import Swal from "sweetalert2";

const AddDoctor = () => {
  const imageKey = import.meta.env.VITE_imgBB;
  const { data: treatment, isLoading } = useQuery({
    queryKey: "treatment",
    queryFn: async () => {
      const res = await fetch(
        "https://doctors-portal-server-2023-ivory.vercel.app/treatment"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  const handleFormData = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const specialty = form.specialty.value;
    const photo = form.photoUrl.files[0];

    //  Store Photo on ImageHosting Site
    const formatData = new FormData();
    formatData.append("image", photo);
    fetch(`https://api.imgbb.com/1/upload?key=${imageKey}`, {
      method: "POST",
      body: formatData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          const doctor = {
            name,
            email,
            specialty,
            photo: data.data.url,
          };

          fetch(`https://doctors-portal-server-2023-ivory.vercel.app/doctors`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                Swal.fire(
                  "Successfully Added !",
                  "You clicked the button!",
                  "success"
                );
              }
            });
        }
      });
  };

  return (
    <div className="w-96 text-center ms-14">
      <h1 className="text-3xl font-bold my-5">ADD A DOCTOR</h1>
      <div className="card w-96 py-8 bg-base-100 shadow-xl text-center">
        <form onSubmit={handleFormData}>
          <label className="label">
            <span className="label-text ms-8">Name</span>
          </label>
          <input
            required
            name="name"
            type="text"
            placeholder="enter your name"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text ms-8">Email</span>
          </label>
          <input
            required
            name="email"
            type="text"
            placeholder="enter your email"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text ms-8">Specialty</span>
          </label>
          <select
            required
            className="select select-bordered w-full max-w-xs"
            name="specialty"
          >
            {treatment.map((treat) => (
              <option key={treat._id}>{treat.name}</option>
            ))}
          </select>
          <label className="label"></label>
          <input
            required
            name="photoUrl"
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />{" "}
          <br />
          <button className="btn btn-accent btn-wide my-6" type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
