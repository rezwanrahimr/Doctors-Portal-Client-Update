import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import useJWT from "../../hooks/useJWT";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  // Call Context
  const { signInwithEmail, signInWithGoogle, resetPassword } =
    useContext(AuthContext);
  const [loginEmail, setEmailLogin] = useState("");
  const [token] = useJWT(loginEmail);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInwithEmail(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setEmailLogin(user?.email);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
  };

  // Google Login
  const handleGoogleLogin = () => {
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

  // Reset Email Password!
  const handleResetPassword = () => {
    if (!email) {
      Swal.fire("Please...", "Enter Your Email !", "question");
    }
    if (email) {
      resetPassword(email)
        .then(() => {
          Swal.fire("Please...", "Check Your Email !", "success");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };
  // Save User on Database
  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setEmailLogin(email);
        }
      });
  };
  return (
    <div className="hero min-h-screen my-24">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-4">
          <form className="px-8" onSubmit={handleLogin}>
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-medium">Email</span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
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
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link
                  onClick={handleResetPassword}
                  className="label-text-alt link link-hover text-black font-medium"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent" type="submit">
                Login
              </button>
              <p className="text-red-500">{errorMessage && errorMessage}</p>
            </div>

            <label className="label text-sm">
              New to Doctors Portal?
              <Link
                to="/signUp"
                className="label-text-alt link link-hover text-secondary font-medium text-sm "
              >
                Create new account
              </Link>
            </label>
          </form>
          <label className="label">
            <hr />
            or <hr />
          </label>
          <div className="form-control mx-8">
            <button
              className="btn btn-outline btn-accent"
              onClick={handleGoogleLogin}
            >
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
