import { useForm } from "react-hook-form";
import styles from "../../styles/UserProfile.module.scss";

const UserProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Profile updated successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h1>User Profile</h1>
      <input
        {...register("firstName", { required: true })}
        placeholder="First Name"
      />
      {errors.firstName && (
        <span className={styles.error}>First name is required</span>
      )}
      <input
        {...register("lastName", { required: true })}
        placeholder="Last Name"
      />
      {errors.lastName && (
        <span className={styles.error}>Last name is required</span>
      )}
      <input
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        placeholder="Email"
      />
      {errors.email && (
        <span className={styles.error}>Invalid email address</span>
      )}
      <input
        type="date"
        {...register("dateOfBirth")}
        placeholder="Date of Birth"
      />
      <button type="submit">Update Profile</button>
    </form>
  );
};
