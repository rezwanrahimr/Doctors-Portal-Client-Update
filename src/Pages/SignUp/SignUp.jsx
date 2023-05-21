import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider";

const SignUp = () => {
  // Call Context!
  const { createUserWithEmail, signInWithGoogle } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (password.length < 8) {
      return Swal.fire({
        icon: "error",
        title: "Password Must be 8 Charter",
        text: "Something went wrong!",
      });
    }

    createUserWithEmail(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // Sign in with Google!
  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
      });
  };
  return (
    <div className="hero min-h-screen my-24">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div
          className="card flex-shrink-0   shadow-2xl bg-base-100"
          style={{ width: "353px" }}
        >
          <form className="card-body " onSubmit={handleSignUp}>
            <h1 className="text-2xl font-bold text-center">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-medium">Name</span>
              </label>
              <input
                required
                type="text"
                name="name"
                placeholder=" Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-medium">Email</span>
              </label>
              <input
                required
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-medium">
                  Password
                </span>
              </label>
              <input
                required
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-black font-medium"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent" type="submit">
                Sign up
              </button>
            </div>
            <label className="label text-sm">
              Already Have a Account?
              <Link
                to="/login"
                className="label-text-alt link link-hover text-secondary font-medium text-sm "
              >
                Login
              </Link>
            </label>
            <label className="label">
              <hr />
              or <hr />
            </label>
            <button
              className="btn btn-outline btn-accent"
              onClick={handleGoogleSignUp}
            >
              CONTINUE WITH GOOGLE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
