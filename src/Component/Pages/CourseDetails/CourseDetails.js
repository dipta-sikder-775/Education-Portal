import React, { useEffect, useState } from 'react';
import welcomeBanner from '../../../Media/img/Welcome-banner/Welcome.jpg';
import Navbar from '../../Shared/Navbar/Navbar';
import Weekly from '../Weekly/Weekly';
import './CourseDetails.scss';

const CourseDetails = () => {

    const [studentCourses, setStudentCourses] = useState([]);

    const loadData = () => {
        fetch('https://education-portal-1.herokuapp.com/courseInformation/allCourses')
            .then((response) => response.json())
            .then(data => setStudentCourses(data.result));
    }

    useEffect(() => {
        loadData();
    }, [])

    console.log(studentCourses);

    return (
        <div>
            <Navbar />
            <div className="courseDetailsHeader">
                <h3>Computer Networks</h3>
                <p><a href="#dashboard">Dashboard</a> / <a href="#myCourses">My Courses</a> / <a href="#aboutThisCourse">About this course</a></p>
            </div>
            <div className="full-page">
                <h5>Welcome to Computer Networks</h5>
                <div className="outlineFix ml-4">

                    {
                        studentCourses.map((course) => (
                            <>
                                <h4>Basic Information</h4>
                                <div className="basicInformation">
                                    <p>Course Code: <b>{course.courseCode}</b></p>
                                    <p>Program: <b>{course.program}</b></p>
                                    <p>Faculty: <b>{course.faculty}</b></p>
                                    {/* <p>Semester: {}</p> */}
                                    <p>Course Category: <b> {course.courseCategory}</b></p>
                                </div>

                                <h4>Course Information</h4>
                                <div className="courseInstructor">
                                    <p>Teacher Name: <b>{course.teacherName}</b></p>
                                    <p>Office Room: <b> {course.officeRoom}</b></p>
                                    <p>Cell Number: <b> {course.cellNumber}</b></p>
                                    <p>Email: <b>{course.email}</b></p>
                                </div>

                                <h4>Course Outline</h4>
                                <div className="courseInstructor">
                                    <p>This is course outline</p>
                                </div>

                                <h4>Textbook</h4>
                                <div className="courseInstructor">
                                    <p>This is text book</p>
                                </div>

                                <h4>Guideline</h4>
                                <div className="courseInstructor">
                                    <p>This is text book</p>
                                </div>

                                <h4>Announcement</h4>
                                <div className="courseInstructor">
                                    <p>This is text book</p>
                                </div>
                            </>
                        ))
                    }

                </div>

                <div>
                    <img src={welcomeBanner} alt="" />
                    <h5>Believe in your infinite potential. Your only limitations are those you set upon yourself. Believe in yourself, your abilities and your own potential. Never let self-doubt hold you captive. You are worthy of all that you dream of and hope for.</h5>
                    <a href="#abc">Student Survey of the course</a>


                    <Weekly />
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
