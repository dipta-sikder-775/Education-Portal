import React from "react";
import "./MotivationSection.css";
import motivationSectionVideoPartImg from "../../../../Media/img/Home-Img/student-motivation-img/v_bg.jpg";
import { FaChevronRight } from "react-icons/fa";
const MotivationSection = () => {
  return (
    <div className="motivation_section_container">
      <div className="container">
        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="col-sm-7">
            <div className="motivation_section_description">
              {" "}
              <h3>Obtain Your Dream Job At Educo</h3>
              <p>
                Nam cursus imperdiet elit. Fusce sollicitudin eget nulla in
                condimentum. Nullam dignissim id magna non tempus. Vivamus
                molestie nulla nec pharetra dignissim. Suspendisse auctor nisi
                et neque vehicula pulvinar. Quisque quis tempus magna. Quisque
                sed luctus nunc sapien.
              </p>
              <button className="btn btn-primary"> See More</button>
            </div>
          </div>
          <div className="col-sm-5 ">
            {/* <div className="motivation_section_videoPart"></div> */}
            <img
              src={motivationSectionVideoPartImg}
              alt=""
              style={{ width: "100%", filter: "grayscale(100%)" }}
            />
            <div className="video_click_icon"> {/* <FaChevronRight /> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotivationSection;
