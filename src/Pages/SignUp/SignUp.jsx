import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useJWT from "../../hooks/useJWT";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  // Call Context!
  const { createUserWithEmail, signInWithGoogle, profileUpdate } =
    useContext(AuthContext);
  const [signUpEmail, setSignUpEmail] = useState("");
  const [token] = useJWT(signUpEmail);
  const navigate = useNavigate();
  if (token) {
    navigate("/");
  }
  const handleSignUp = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmail(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const profileInfo = {
          displayName: `${name}`,
        };
        user &&
          profileUpdate(profileInfo)
            .then(() => {
              saveUser(name, email);
            })
            .catch((err) => console.log(err));
      })

      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };

  // Sign in with Google!
  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        saveUser(user?.name, user?.email);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };

  // Save User on Database
  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("https://doctors-portal-server-2023-ivory.vercel.app/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setSignUpEmail(email);
        }
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent" type="submit">
                Sign up
              </button>
              <p className="text-red-500">{errorMessage && errorMessage}</p>
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
