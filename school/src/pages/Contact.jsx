import React from "react";
import BreadCrumps from "../components/BreadCrumps";

function Contact() {
  return (
    <div>
      <BreadCrumps page="Contact us" title="Contact us" />

      {/* contact block */}
      {/* contact1 */}
      <section className="w3l-contact-1 pb-5" id="contact">
        <div className="contacts-9 py-lg-5 py-md-4">
          <div className="container">
            <div className="d-grid contact-view">
              <div className="cont-details">
                <h4 className="title-small">Get in touch</h4>
                <h3 className="title-big mb-4">Feel free to contact us</h3>
                <p className="mb-sm-5 mb-4">
                  Start working with Us, We guarantee that you’ll be able to
                  have any issue resolved within 24 hours.
                </p>

                <div className="cont-top">
                  {/* <div className="cont-left text-center">
                    <span className="fa fa-map-marker text-primary"></span>
                  </div> */}
                  {/* <div className="cont-right">
                    <h6>Our head office address</h6>
                    <p className="pr-lg-5">
                      Address here, 208 Trainer Avenue street, Illinois, UK -
                      62617.
                    </p>
                  </div> */}
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fa fa-phone text-primary"></span>
                  </div>
                  <div className="cont-right">
                    <h6>Call for help </h6>
                    <p>
                      <a href="tel:+(91) 9xxxx xxx49 ">+(91) 9xxxx xxx49 </a>
                    </p>
                  </div>
                </div>
                <div className="cont-top margin-up">
                  <div className="cont-left text-center">
                    <span className="fa fa-envelope-o text-primary"></span>
                  </div>
                  <div className="cont-right">
                    <h6>Contact with our support</h6>
                    <p>
                      <a href="mailto:InfoSecByte@gmail.com" className="mail">
                        InfoSecByte@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="map-content-9">
                <h5 className="mb-sm-4 mb-3">Write to us</h5>
                <form
                  action="https://gmail.com"
                  method="post"
                >
                  <div className="twice-two">
                    <input
                      type="text"
                      className="form-control"
                      name="w3lName"
                      id="w3lName"
                      placeholder="Name"
                      required=""
                    />
                    <input
                      type="email"
                      className="form-control"
                      name="w3lSender"
                      id="w3lSender"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div className="twice">
                    <input
                      type="text"
                      className="form-control"
                      name="w3lSubject"
                      id="w3lSubject"
                      placeholder="Subject"
                      required=""
                    />
                  </div>
                  <textarea
                    name="w3lMessage"
                    className="form-control"
                    id="w3lMessage"
                    placeholder="Message"
                    required=""
                  ></textarea>
                  <div className="text-right">
                    <button
                      type="submit"
                      className="btn btn-primary btn-style mt-4"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /contact1 */}
      <div className="map-iframe">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5358699645053!2d76.84871217527065!3d23.077471479135347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397ce9ceaaaaaaab%3A0xa224b6b82b421f83!2sVIT%20Bhopal%20University!5e0!3m2!1sen!2sin!4v1714629958666!5m2!1sen!2sin"
          width="100%"
          height="400"
          frameborder="0"
          style={{ border: "0px" }}
          allowfullscreen=""
        ></iframe>
      </div>
      {/* //contact block */}
    </div>
  );
}

export default Contact;
