import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./StudentRegisterForm.scss";
import axios from "axios";
import { UseSelcCourseContext } from "../../../../App";
import Swal from "sweetalert2";
const StudentRegisterForm = () => {
  const [studentSelactedCourse, setStudentSelactedCourse] =
    useContext(UseSelcCourseContext);
  const [studentCourse, setStudentSelcCourse] = useState({});
  console.log(studentCourse);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    setStudentSelcCourse({ studentSelactedCourse, ...data });
    const datas = { studentSelactedCourse, data };
    console.log("datas", datas);
    axios
      .post("http://localhost:1000/students", datas)

      .then((data) => {
        console.log("new", data);
        Swal.fire("Good job!", "Your register was successfully", "success");
      })
      .catch((error) => {
        console.error(error);
      });
    e.target.reset();
  };
  return (
    <section className="student_form_container">
      <div className="container">
        <h3
          style={{ textAlign: "center", paddingBottom: "3%", fontSize: "40px" }}
        >
          Student Course Request !!!
        </h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <span>Your Name</span>
          <input
            type="text"
            name="name"
            {...register("studentName", { required: true })}
            className="form-control w-100"
          />
          {errors.studentName && (
            <span className="input_err">This field is required</span>
          )}
          <br />
          <div className="row">
            <div className="col-sm-6">
              {" "}
              <span>Father Name</span>{" "}
              <input
                type="name"
                {...register("fatherName", { required: true })}
                className="form-control w-100"
              />
              {errors.fatherName && (
                <span className="input_err">This field is required</span>
              )}{" "}
              <br />
            </div>
            <div className="col-sm-6">
              {" "}
              <span>Mother Name</span>{" "}
              <input
                type="name"
                {...register("motherName", { required: true })}
                className="form-control w-100"
              />
              {errors.motherName && (
                <span className="input_err">This field is required</span>
              )}{" "}
              <br />
            </div>
            <div className="col-sm-6">
              {" "}
              <span>Phone Number</span>
              <input
                defaultValue="+88"
                type="tel"
                {...register("studentPhoneNumber", { required: true })}
                className="form-control w-100"
              />
              {errors.studentPhoneNumber && (
                <span className="input_err">This field is required</span>
              )}{" "}
              <br />
            </div>
            <div className="col-sm-6">
              <span>Gender</span>
              <select
                className="form-control w-100"
                {...register("gender", { required: true })}
              >
                <option disabled={true} value="Not set">
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="coustom">Coustom</option>
              </select>
              <br />
            </div>
          </div>
          <span>Address</span>
          <textarea
            {...register("description", { required: true })}
            className="form-control w-100"
            placeholder="Description"
          />
          {errors.description && (
            <span className="input_err">This field is required</span>
          )}{" "}
          <br />
          <input type="submit" className="resister_btn  " />
        </form>
        {/*  */}
      </div>
    </section>
  );
};

export default StudentRegisterForm;