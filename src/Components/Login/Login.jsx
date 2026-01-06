import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "./Login.module.css";
import { motion } from "motion/react";

const Login = () => {
  const navigate = useNavigate();

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  // When form is correct
  const onSubmit = (data) => {
    console.log("FORM DATA:", data);

    // navigate to success page
    navigate("/verification-complete");
  };

  return (
    <div
     
      className={styles.loginWrapper}
    >
      <motion.form
       initial={{ scale: 0, opacity: 0, y: 0 }}
       whileInView={{ scale: 1, opacity: 1, y: 60 }}
       viewport={{ once: true, amount: 0.5 }} // triggers once, when 50% visible
       transition={{ duration: 0.8, ease: "easeOut" }}
       
       className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={styles.title}>Login</h2>

        {/* EMAIL */}
        <div className={styles.inputGroup}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>

        {/* PASSWORD */}
        <div className={styles.inputGroup}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
        </div>

        {/* BUTTON DISABLED UNTIL VALID */}
        <button type="submit" className={styles.loginBtn} disabled={!isValid}>
          Login
        </button>

        <p className={styles.signupText}>
          Don’t have an account? <Link to="/Signup">Sign up</Link>
        </p>
      </motion.form>
    </div>
  );
};

export default Login;
