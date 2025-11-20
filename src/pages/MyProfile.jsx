import React, { useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import Swal from "sweetalert2";

const MyProfile = () => {
  const user = auth.currentUser;

  // Controlled input state
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!name.trim() || !photoURL.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Info",
        text: "Please fill in both fields before updating!",
      });
      return;
    }

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Profile Updated!",
          text: "Your profile has been successfully updated.",
          timer: 2000,
          showConfirmButton: false,
        });

        // Clear form fields
        setName("");
        setPhotoURL("");

        // Optional: refresh UI after delay
        setTimeout(() => {
          window.location.reload();
        }, 2200);
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Update Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <title>My Profile</title>
      <h2 className="text-2xl font-bold text-center mb-4">My Profile</h2>

      <div className="text-center mb-4">
        <img
          src={
            user?.photoURL ||
            "https://cdn-icons-png.flaticon.com/128/15049/15049251.png"
          }
          alt="User"
          className="w-24 h-24 rounded-full mx-auto mb-2 border-2 border-gray-300"
        />
        <p className="text-lg font-semibold">
          {user?.displayName || "No Name Set"}
        </p>
        <p className="text-gray-500">{user?.email}</p>
      </div>

      <form onSubmit={handleUpdate} className="space-y-3">
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          name="photoURL"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          placeholder="Enter your photo URL"
          className="input input-bordered w-full"
        />

        <button
          type="submit"
          className="btn w-full bg-green-500 hover:bg-green-600 text-white"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
