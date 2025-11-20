import React, {use, useState } from 'react';
import { Link,useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import { toast } from 'react-toastify';
import { FaEye } from "react-icons/fa";

import { IoEyeOff } from "react-icons/io5";


const Register = () => {
   const [show, setShow] = useState(false);
    const { 
        setUser,
        createUser,
        updateProfileFunc,
        
       
       
        } = use(AuthContext);
    const [nameError, setNameError] = useState("");
     const navigate = useNavigate();

     
    const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    if (name.length < 5) {
      setNameError("Name should be more then 5 character");
      return;
    } else {
      setNameError("");
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    
      const regExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;



    console.log(regExp.test(password));

    if (!regExp.test(password)) {
      toast.error(
        "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter and one number"
      );
      return;
    }

    console.log({ name, photo, email, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        
        
        
        updateProfileFunc({ displayName:name, photoURL:photo})
          .then(() => {
            setUser({ ...user, displayName:name, photoURL:photo});
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage, errorCode);
        // ..
      });
  }; 

   
   
// https://img.icons8.com/?size=60&id=9q3GMpxNIMjC&format=png 

    return (
        <div className="flex justify-center min-h-screen items-center">
          <title>Register </title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name  */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />

            {nameError && <p className="text-xs text-error">{nameError}</p>}

            {/* Photo URl  */}
            <label className="label">Photo URl </label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URl"
              required
            />

            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* password  */}
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

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
       


            <p className="font-semibold text-center pt-5">
              Already Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
    );
};

export default Register;