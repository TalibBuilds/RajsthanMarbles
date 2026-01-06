import React from "react";
import styles from "./Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("FORM DATA:", data);

    // Navigate to Congratulations Page
    navigate("/account-created");
  };

  return (
    <div className={styles.container}>
      <form className={styles.card} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.heading}>Create Account</h2>

        {/* NAME */}
        <div className={styles.inputGroup}>
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", {
              required: "Name is required!",
              minLength: { value: 3, message: "Name must be at least 3 letters" },
            })}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>

        {/* EMAIL */}
        <div className={styles.inputGroup}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        </div>

        {/* PASSWORD */}
        <div className={styles.inputGroup}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Create password"
            {...register("password", {
              required: "Password is required!",
              minLength: { value: 6, message: "Minimum 6 characters required" },
            })}
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
        </div>

        {/* CONFIRM PASSWORD */}
        <div className={styles.inputGroup}>
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Re-enter password"
            {...register("confirmPassword", {
              required: "Please confirm password!",
              validate: (value) =>
                value === watch("password") || "Passwords do not match!",
            })}
          />
          {errors.confirmPassword && (
            <p className={styles.error}>{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button className={styles.signupBtn} type="submit">
          Sign Up
        </button> 

        <p className={styles.loginText}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;