import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
const Contact = () => {
  return (
    <section id="contact" className="contact_section small_pt">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 offset-lg-2">
            <div className="title_default_light title_border text-center">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Contact Us
              </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center small_space">
          <div className="col-lg-4 col-md-6 offset-lg-2">
            <div
              className="bg_light_dark contact_box_s2 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.1s"
            >
              <div className="contact_title">
                <h5
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  get in touch
                </h5>
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                </p>
              </div>

              <ul className="list_none contact_info mt-margin">
                <li
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <div className="contact_detail">
                    <span>Address</span>
                    <p>22 international business park, 3rd floor, dubai</p>
                  </div>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <div className="contact_detail">
                    <span>Phone</span>
                    <p>5644643653134</p>
                  </div>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <div className="contact_detail">
                    <span>Email</span>
                    <p>contact us @outlook.com</p>
                  </div>
                </li>
              </ul>

              <div className="contct_follow pt-2 pt-md-4">
                <span
                  className="text-uppercase animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Follow Us
                </span>
                <ul className="list_none social_icon">
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    <a href="#" className="icon_color">
                      <FaFacebookF className="icon_color" />
                    </a>
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    <a href="#" className="icon_color">
                      <FaInstagram className="icon_color" />
                    </a>
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    <a href="#" className="icon_color">
                      <FaTwitter className="icon_color" />
                    </a>
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    <a href="#" className="icon_color">
                      <FaLinkedin className="icon_color" />
                    </a>
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    <a href="#" className="icon_color">
                      <FaYoutube className="icon_color" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-6">
            <div
              className="pt-4 pt-md-0 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.2s"
            >
              <form action="#" method="post" className="field_form" name="enq">
                <div
                  className="form-group col-md-12 animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <input
                    type="text"
                    id="name"
                    required
                    name="name"
                    placeholder="Your Name"
                    className="form-control"
                  />
                </div>
                <div
                  className="form-group col-md-12 animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <input
                    type="email"
                    id="email"
                    required
                    name="email"
                    placeholder="Your Email"
                    className="form-control"
                  />
                </div>
                <div
                  className="form-group col-md-12 animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <input
                    type="text"
                    id="subject"
                    required
                    name="subject"
                    placeholder="Subject"
                    className="form-control"
                  />
                </div>
                <div
                  className="form_group col-md-12 animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <textarea
                    type="text"
                    id="description"
                    required
                    name="description"
                    placeholder="Message"
                    className="form-control"
                    role="2"
                  />
                </div>
                <div
                  className=" col-md-12 text-center animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <button
                    type="submit"
                    title="Submit your message"
                    className="btn btn-default btn-radius btn-block"
                    id="submitbutton"
                    name="submit"
                    // value={Submit}
                  >
                    Submit <BsArrowRight />
                  </button>
                </div>
                <div className="col-md-12">
                  <div id="alert-msg" className="alert-msg text-center"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
