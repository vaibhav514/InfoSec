import React from "react";
import BreadCrumps from '../components/BreadCrumps'
function About() {
  return (
    <div>
      <BreadCrumps  page="About us"  title="About Company"  />
      <section id="about" className="home-services pt-lg-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="box-wrap">
                <div className="box-wrap-grid">
                  <div className="icon">
                    <span className="fa fa-graduation-cap"></span>
                  </div>
                  <div className="info">
                    <p>Our</p>
                    <h4>
                      <a href="#url">Mission</a>
                    </h4>
                  </div>
                </div>
                <p className="mt-4">
                Empowering proactive cybersecurity through interactive learning
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-md-0 mt-4">
              <div className="box-wrap">
                <div className="box-wrap-grid">
                  <div className="icon">
                    <span className="fa fa-book"></span>
                  </div>
                  <div className="info">
                    <p>Our</p>
                    <h4>
                      <a href="#url">Vision</a>
                    </h4>
                  </div>
                </div>
                <p className="mt-4">
                InfoSecBytes aims to offer a comprehensive cybersecurity learning platform.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-lg-0 mt-4">
              <div className="box-wrap">
                <div className="box-wrap-grid">
                  <div className="icon">
                    <span className="fa fa-trophy"></span>
                  </div>
                  <div className="info">
                    <p>Our</p>
                    <h4>
                      <a href="#url">Goal</a>
                    </h4>
                  </div>
                </div>
                <p className="mt-4">
                Offering a secure platform for users to gain practical cybersecurity skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-aboutblock1 py-5" id="about">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="row">
            <div className="col-lg-6 align-self">
              <span className="title-small mb-2">About Us</span>
              <h3 className="title-big mx-0">
                Welcome to the InfoSecByte - Cyber Insights & Tools.
              </h3>
              <p className="mt-lg-4 mt-3">
              Our project, InfoSecBytes, aims to build a website that provides users with a comprehensive 
              learning experience in cybersecurity, allowing them to grasp key concepts and tools, 
              engage in practical exercises, and assess their understanding through curated questions and quizzes. 
              </p>
              <p className="mt-3 mb-lg-5">
              The platform will provide a safe environment for users to experiment with basic cybersecurity tools, 
              fostering a deeper understanding and promoting a proactive approach towards online security. 
              </p>
            </div>
            <div className="col-lg-6 left-wthree-img mt-lg-0 mt-sm-5 mt-4">
              <img
                src="assets/images/about.jpg"
                alt=""
                className="img-fluid radius-image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w3l-servicesblock w3l-servicesblock1 py-5" id="progress">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="row">
            <div className="col-lg-6 align-self pr-lg-4">
              <div className="progress-info info1">
                <h6 className="progress-tittle">
                Node.js<span className="">80%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-info info2">
                <h6 className="progress-tittle">
                React.js<span className="">95%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-info info3">
                <h6 className="progress-tittle">
                  JSON<span className="">90%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-info info4">
                <h6 className="progress-tittle">
                FastAPI <span className="">75%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-info info2 mb-0">
                <h6 className="progress-tittle">
                 JQuery<span className="">95%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-5 pl-lg-4">
              <span className="title-small mb-2">Progress bars</span>
              <h3 className="title-big">
                {" "}
                What we have used
              </h3>
              <p className="mt-md-4 mt-3">
              The software architecture of our project is structured around the User Interface,
               Applications, Data Analysis, and Integration of all layers, leveraging a combination
                of languages, libraries, and frameworks to achieve this functionality and efficiency.
                <br/>
                <br/>
                Overall, the software architecture of our project is designed to be modular, scalable, 
                and efficient, leveraging a combination of languages, libraries, and frameworks to 
                deliver a robust and feature-rich cybersecurity educational platform.
              </p>
              <a href="/" className="btn btn-primary btn-style mt-md-5 mt-4">
                Get started now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-block py-5" id="">
        <div className="container py-lg-5 py-md-3">
          <div className="row">
            <div className="col-lg-6 about-right-faq align-self">
              <span className="title-small mb-2">Start now</span>
              <h3 className="title-big mx-0">
                {" "}
                Enhance your skills
              </h3>
              <p className="mt-lg-4 mt-3 mb-lg-5 mb-4">
              Our team has made substantial strides in developing cybersecurity tools 
              to enhance digital protection, providing an effective way to safeguard sensitive data.
              <br />
              In addition to our current accomplishments, we are also actively working 
              on developing a fast and responsive website. We are aiming to integrate 
              our suite of cybersecurity tools seamlessly with our learning content 
              providing users with a comprehensive and user-friendly product.
              </p>
            </div>
            <div className="col-lg-3 col-6 left-wthree-img mt-lg-0 mt-sm-5 mt-4">
              <img
                src="assets/images/about1.jpg"
                alt=""
                className="img-fluid radius-image"
              />
            </div>
            <div className="col-lg-3 col-6  left-wthree-img mt-lg-0 mt-sm-5 mt-4">
              <img
                src="assets/images/about2.jpg"
                alt=""
                className="img-fluid radius-image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* stats */}
      {/* <section className="w3l-stats py-5" id="stats">
        <div className="gallery-inner container py-lg-5 py-md-4">
          <span className="title-small text-center mb-1">Our Achievements</span>
          <h3 className="title-big text-center mb-5">Our progress never Ends</h3>
          <div className="row stats-con">
            <div className="col-md-3 col-6 stats_info counter_grid">
              <p className="counter">500 </p>
              <span className="plus">+</span>
              <br />
              <h3>Students Enrolled</h3>
            </div>
            <div className="col-md-3 col-6 stats_info counter_grid1">
              <p className="counter">56</p>
              <span className="plus">+</span>
              <br />
              <h3>Courses Uploaded</h3>
            </div>
            <div className="col-md-3 col-6 stats_info counter_grid mt-md-0 mt-4">
              <p className="counter">130</p>
              <span className="plus">k</span>
              <br />
              <h3>Certified students</h3>
            </div>
            <div className="col-md-3 col-6 stats_info counter_grid2 mt-md-0 mt-4">
              <p className="counter">243 </p>
              <span className="plus">+</span>
              <br />
              <h3>Global Teachers </h3>
            </div>
          </div>
        </div>
      </section> */}
      {/* //stats */}

    </div>
  );
}

export default About;
