import React, { useState } from "react";
import axios from "axios";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [requstResponse, setRequestRespose] = useState({
    message: "",
    alertClassName: "",
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    values = {
      ...values,
      usernameOrEmail: values.email,
    };
    axios
      .post("http://localhost:8080/api/auth/login", values)
      .then(
        (response) => {
          setRequestRespose({
            message: "User logged in successfully",
            alertClassName: "alert alert-success",
          });
          localStorage.setItem("token", response.data);
          navigate("/");
        },
        (error) => {
          console.log(error);
          setRequestRespose({
            message: "Invalid email or password",
            alertClassName: "alert alert-danger",
          });
        }
      )
      .catch((error) => console.log(error));
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Please enter email")
      .email("Please enter a valid email"),
    password: Yup.string()
      .required("Please enter password")
      .min(6, "Password must be at least 6 characters"),
  });

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className={styles.wrapper} style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <div
              className={requstResponse.alertClassName}
              role="alert"
              style={{ fontSize: "1.2rem", textAlign: "center" }} // Increased font size for the red box
            >
              {requstResponse.message}
            </div>
            <h2 style={{ fontWeight: "bold", fontSize: "2rem", textAlign: "center" }}>Login</h2>
            <hr style={{ marginBottom: "20px" }} /> {/* Added spacing below the line */}
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              validateOnMount
            >
              {(formik) => {
                return (
                  <Form onSubmit={formik.handleSubmit}>
                    <div className="form-group" style={{ marginBottom: "20px" }}>
                      <label htmlFor="" style={{ fontSize: "1.2rem" }}>Email</label>
                      <Field
                        type="text"
                        name="email"
                        className={
                          formik.errors.email && formik.touched.email
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        style={{ fontSize: "1.2rem", padding: "10px" }} // Increased font size and padding for input
                      />
                      <ErrorMessage name="email">
                        {(errorMessage) => (
                          <small className="text-danger" style={{ fontSize: "1rem" }}>{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>

                    <div className="form-group">
                      <label htmlFor="" style={{ fontSize: "1.2rem" }}>Password</label>
                      <Field
                        type="password"
                        name="password"
                        className={
                          formik.errors.password && formik.touched.password
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        style={{ fontSize: "1.2rem", padding: "10px" }} // Increased font size and padding for input
                      />
                      <ErrorMessage name="password">
                        {(errorMessage) => (
                          <small className="text-danger" style={{ fontSize: "1rem" }}>{errorMessage}</small>
                        )}
                      </ErrorMessage>
                    </div>
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                      <input
                        type="submit"
                        value="Login"
                        disabled={!formik.isValid}
                        className="btn btn-primary"
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
                  </Form>
                );
              }}
            </Formik>
            <br />
            <p className="text-center" style={{ fontSize: "1.2rem", marginTop: "20px" }}>
              New User? <a href="/register" style={{ textDecoration: "underline", color: "blue" }}>Click Here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;