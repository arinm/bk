// src/app/pages/profile/page.tsx
"use client"; // Mark as a Client Component

import { useForm } from "react-hook-form";
import styles from "../styles/UserProfile.module.scss";

const UserProfile = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: unknown) => {
    console.log(data);
    alert("Profile updated successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input
        {...register("firstName", { required: true })}
        placeholder="First Name"
      />
      <input
        {...register("lastName", { required: true })}
        placeholder="Last Name"
      />
      <input
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        placeholder="Email"
      />
      <input
        type="date"
        {...register("dateOfBirth")}
        placeholder="Date of Birth"
      />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default UserProfile;
