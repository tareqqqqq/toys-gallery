import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";

import { IoEyeOff } from "react-icons/io5";


const Login = () => {
   const [show, setShow] = useState(false);
     const [error, setError] = useState("");
  const { signInUser,sendPassReset,setLoading,signInWithGoogle ,setUser
         } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  
   const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Signin successful")
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        setError(errorCode);
      });
  };

const emailRef = useRef(null);

  const handleForgetPassword = () => {
    console.log();
    const email = emailRef.current.value;
    sendPassReset(email)
      .then(() => {
        setLoading(false);
        toast.success("Check your email to reset password");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const handleGoogleSignin = () => {
    console.log("google signin");
    signInWithGoogle()
      .then((res) => {
        console.log(res);
        setLoading(false);
        setUser(res.user);
        navigate('/');
        toast.success("Signin successful");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.message);
      });
  };
    return (
         <div className="flex justify-center min-h-screen items-center">
          <title>Login </title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
               ref={emailRef}
              className="input"
              placeholder="Email"
              required
            />
            {/* passowrd  */}
            <div className="relative">
                        <label className="label">Password</label>
                        <input
                          name="password"
                           type={show ? "text" : "password"}
                          className="input"
                          placeholder="Password"
                          required
                        />
                         <span
                              onClick={() => setShow(!show)}
                              className="absolute right-[30px] top-[32px] cursor-pointer z-50"
                            >
                              {show ? <FaEye /> : <IoEyeOff />}
                            </span>
                            </div>
             <button
                className="hover:underline cursor-pointer"
                onClick={handleForgetPassword}
                type="button"
              >
                Forget password?
              </button>

            {error && <p className="text-red-400 text-xs">{error}</p>}

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
             <div>
             {/* Divider */}
              <div className="flex items-center justify-center gap-2 my-2">
                <div className="h-px w-16 bg-white/30"></div>
                <span className="text-sm text-white/70">or</span>
                <div className="h-px w-16 bg-white/30"></div>
              </div>

              {/* Google Signin */}
              <button
                type="button"
                onClick={handleGoogleSignin}
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>
        </div>
            <p className="font-semibold text-center pt-5">
              Dont’t Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
    );
};

export default Login;