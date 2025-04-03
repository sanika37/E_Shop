import React, { useState } from "react";
import styles from "./styles.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegisterPage = () => {
  const [requstResponse, setRequestRespose] = useState({
    message: "",
    alertClassName: "",
  });

  const initialValues = {
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  };

  const onSubmit = (values) => {
    values = {
      ...values,
      username: values.email,
      name: values.firstName,
      role: "USER",
    };
    axios
      .post("http://localhost:8080/api/auth/register", values)
      .then(
        (response) => {
          setRequestRespose({
            message: "User registered successfully",
            alertClassName: "alert alert-success",
          });
        },
        (error) => {
          console.log(error);
          setRequestRespose({
            message: error.response.data.message,
            alertClassName: "alert alert-danger",
          });
        }
      )
      .catch((error) => console.log(error));
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    mobile: Yup.string().required("Mobile is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="container d-flex justify-content-center" style={{ minHeight: "100vh", alignItems: "center" }}>
      <div className="col-md-6">
        <div className={styles.wrapper} style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
          <div
            className={requstResponse.alertClassName}
            role="alert"
            style={{ fontSize: "1.2rem", textAlign: "center" }} // Increased font size for the red box
          >
            {requstResponse.message}
          </div>
          <h2 style={{ fontWeight: "bold", fontSize: "2rem", textAlign: "center" }}>Register</h2>
          <hr style={{ marginBottom: "20px" }} /> {/* Added spacing below the line */}
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group" style={{ marginBottom: "20px" }}>
              <label style={{ fontSize: "1.2rem" }}>First Name</label>
              <input
                type="text"
                className={
                  formik.errors.firstName && formik.touched.firstName
                    ? "form-control is-invalid"
                    : "form-control"
                }
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ fontSize: "1.2rem", padding: "10px" }} // Increased font size and padding
              />
              {formik.errors.firstName && formik.touched.firstName ? (
                <small className="text-danger" style={{ fontSize: "1rem" }}>
                  {formik.errors.firstName}
                </small>
              ) : null}
            </div>

            <div className="form-group" style={{ marginBottom: "20px" }}>
              <label style={{ fontSize: "1.2rem" }}>Email</label>
              <input
                type="text"
                className={
                  formik.errors.email && formik.touched.email
                    ? "form-control is-invalid"
                    : "form-control"
                }
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ fontSize: "1.2rem", padding: "10px" }} // Increased font size and padding
              />
              {formik.errors.email && formik.touched.email ? (
                <small className="text-danger" style={{ fontSize: "1rem" }}>
                  {formik.errors.email}
                </small>
              ) : null}
            </div>

            <div className="form-group" style={{ marginBottom: "20px" }}>
              <label style={{ fontSize: "1.2rem" }}>Mobile</label>
              <input
                type="text"
                className={
                  formik.errors.mobile && formik.touched.mobile
                    ? "form-control is-invalid"
                    : "form-control"
                }
                name="mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ fontSize: "1.2rem", padding: "10px" }} // Increased font size and padding
              />
              {formik.errors.mobile && formik.touched.mobile ? (
                <small className="text-danger" style={{ fontSize: "1rem" }}>
                  {formik.errors.mobile}
                </small>
              ) : null}
            </div>

            <div className="form-group" style={{ marginBottom: "20px" }}>
              <label style={{ fontSize: "1.2rem" }}>Password</label>
              <input
                type="password"
                className={
                  formik.errors.password && formik.touched.password
                    ? "form-control is-invalid"
                    : "form-control"
                }
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ fontSize: "1.2rem", padding: "10px" }} // Increased font size and padding
              />
              {formik.errors.password && formik.touched.password ? (
                <small className="text-danger" style={{ fontSize: "1rem" }}>
                  {formik.errors.password}
                </small>
              ) : null}
            </div>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <input
                type="submit"
                value="Register"
                className="btn btn-primary"
                disabled={!formik.isValid}
                style={{
                  fontSize: "1.2rem",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "0.3s ease", // Smooth transition for hover effect
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#0056b3"; // Change background color on hover
                  e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)"; // Add shadow
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = ""; // Reset background color
                  e.target.style.boxShadow = "none"; // Remove shadow
                }}
              />
            </div>
          </form>
          <br />
          <p className="text-center" style={{ fontSize: "1.2rem", marginTop: "20px" }}>
            Already Registered? <a href="/login" style={{ textDecoration: "underline", color: "blue" }}>Click Here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;