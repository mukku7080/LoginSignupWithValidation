import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SignupForm.css"; 
import Login from "./Login";

const SignupForm = () => {
  const [istrue,setTrue] = useState(true)
  const [logmail,setLogmail]=useState("")
  const submitchages=()=>{
    setLogmail(values.email);
    setTrue(false);
  }
  const validationSchema = yup.object({
    name: yup
      .string()
      .min(3, "Name must be at least 3 characters")
      .max(20, "Name cannot exceed 20 characters")
      .required("*Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("*Email is required"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/,
        "Password must have 8+ characters, 1 uppercase, 1 number, and 1 special character"
      )
      .required("*Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("*Confirm Password is required"),
  });

  const { values, handleChange, handleBlur, errors, touched, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema,
      onSubmit: (values,action) => {
        console.log("Signup Form Data:", values);
        action.resetForm();
        submitchages();
      },
    });
    if(istrue){
      return (

        <div  style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', width:'100%'}}>
        <div style={{ width: '600px', height: '500px', margin: '0 auto', border: '1px solid #ccc', padding: '20px' }}>
          <h2 className="text-center ">Signup Form</h2>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-3">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter your name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="error-msg">
                {touched.name && errors.name && (
                  <span className="text-danger">{errors.name}</span>
                )}
              </div>
            </div>
    
            {/* Email */}
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="error-msg">
                {touched.email && errors.email && (
                  <span className="text-danger">{errors.email}</span>
                )}
              </div>
            </div>
    
            {/* Password */}
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="error-msg">
                {touched.password && errors.password && (
                  <span className="text-danger">{errors.password}</span>
                )}
              </div>
            </div>
    
            {/* Confirm Password */}
            <div className="mb-">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="error-msg">
                {touched.confirmPassword && errors.confirmPassword && (
                  <span className="text-danger">{errors.confirmPassword}</span>
                )}
              </div>
            </div>
    
            {/* Submit Button */}
            <div className="text-center">
              <button  type="submit" className="btn btn-success">
              Register
              </button>
            </div>
          </form> 
        </div>
    
        </div>
        
      );
    }
    else{
      return(
        <Login email={logmail}></Login>
      )
    }


 
};

export default SignupForm;
