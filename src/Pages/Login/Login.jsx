import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen my-24">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body ">
            <h1 className="text-2xl font-bold text-center">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black font-medium">Email</span>
              </label>
              <input
                type="text"
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
              <button className="btn btn-accent">Login</button>
            </div>
            <label className="label text-sm">
              New to Doctors Portal?
              <Link
                to=""
                className="label-text-alt link link-hover text-secondary font-medium text-sm "
              >
                Create new account
              </Link>
            </label>
            <label className="label">
              <hr />
              or <hr />
            </label>
            <button className="btn btn-outline btn-accent">
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
