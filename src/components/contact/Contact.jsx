import { useEffect, useRef } from "react";

import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

import "./contact.css";

const Contact = () => {
  const formSub = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_mgoy5mq",
      "template_idw8ozv",
      formSub.current,
      "3PnIG0P6ABSd4jTUr"
    );

    e.target.reset();
  };

  const form = useForm({
    date: new Date(),
  });
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  //Error / Sucess Messages

  const submit = (data) => {};

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const formatOptionLabel = ({ value, label, option }) => (
    <div style={{ display: "flex" }}>
      <div>{label}</div>
    </div>
  );

  return (
    <section className="contact__section" id="contact" data-aos="fade-up">
      <div className="container">
        {/* contact */}
        <div className="contact__container ">
          {/* first col */}
          <div className="first-col">
            <div className="">
              <h2 className="sub-title text_title">
                Contact Us <br /> We’re Here to Help
              </h2>
              <p className="font__main contact-desc">
                Get in touch with us to schedule an appointment, ask questions,
                or learn more about our services."
              </p>
            </div>
            <div className="contact__items">
              <div className="contact__item">
                <h3>Nigeria</h3>
                <span className="underline"></span>
                <p className="">
                  19, Rumuapu / Eneka Road,
                  {/* <br /> <strong> Port Harcourt, Rivers state</strong> */}
                </p>
                <p className="">
                  Rukpokwu by Market Junction
                  <br /> <strong> Port Harcourt, Rivers state.</strong>
                </p>
              </div>
              {/*  */}
              <div className="contact__item">
                <h3>Opening Hours</h3>
                <span className="underline"></span>
                <div className="">
                  <p>Mon to Sun: 00:00 am — 23:59 pm</p>
                  <p>Mon to Sun: 00:00 am — 23:59 pm</p>
                </div>
              </div>
              {/*  */}
              <div className="contact__item">
                <h3>Information</h3>
                <span className="underline"></span>
                <div>
                  <a className="text-body" href="tel: +2348103783162">
                    <i className="fa fa-phone-alt text-primary me-2"></i>
                    +2348103783162
                  </a>
                  <br />
                  <a
                    className="text-body"
                    href="mailto:info@ausmedhospital.com"
                  >
                    <i className="fa fa-envelope-open text-primary me-2"></i>
                    info@ausmedhospital.com
                  </a>
                </div>
              </div>
              {/*  */}
              <div className="contact__item">
                <h3>Follow Us On</h3>
                <span className="underline"></span>
                <div className="social_container-contact">
                  <i className="fab fa-facebook-f contact_socials"></i>
                  <i className="fab fa-twitter contact_socials"></i>
                  <i className="fab fa-linkedin-in contact_socials"></i>
                  <i className="fab fa-instagram contact_socials"></i>
                </div>
              </div>
            </div>
          </div>
          {/* second col ---*/}
          <form
            className="second-col"
            ref={formSub}
            onSubmit={sendEmail}
            noValidate
          >
            <h2 className="text_title">Book an Appointment</h2>

            <div className="form-control">
              <div className="row">
                <input
                  className="form-input"
                  placeholder="Full Name *"
                  id="name"
                  type="text"
                  name="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Please kindly enter your name",
                    },
                  })}
                ></input>
                <input
                  className="form-input"
                  id="email"
                  placeholder="Email Address *"
                  type="email"
                  name="email"
                  {...register("email", {
                    pattern: {
                      value:
                        /^[a-zA-Z0-9.!#$%'*+/=?^_`{|}~-]+@[a-zA-Z0-9-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "Invalid email format",
                    },
                    required: {
                      value: true,
                      message: "Enter Email",
                    },
                  })}
                ></input>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p className="err-contact">{errors.email?.message}</p>
                <p className="err-contact">{errors.name?.message}</p>
              </div>
            </div>
            <div className="form-control">
              <div className="row">
                <input
                  className="form-input"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone *"
                  {...register("phone", {
                    valueAsDate: true,
                  })}
                />
                <select
                  className="form-select py-3 border-primary bg-transparent"
                  aria-label="Default select example"
                  name="gender"
                >
                  <option selected>Your Gender</option>
                  <option value="Male">Male</option>
                  <option value="FeMale">FeMale</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>

            <div className="form-control">
              <div className="row">
                <input
                  className="form-input"
                  type="date"
                  id="date"
                  name="date"
                  placeholder=""
                  {...register("date", {
                    valueAsDate: true,
                  })}
                />
                <select
                  className="form-select py-3 border-primary bg-transparent"
                  aria-label="Default select example"
                  name="department"
                >
                  <option selected>Department</option>
                  <option value="Physiotherapy">Physiotherapy</option>
                  <option value="Physical Health">Physical Health</option>
                  <option value="Treatments">Treatments</option>
                </select>
              </div>
            </div>

            <div className="form-control">
              <textarea
                placeholder="Your Message"
                className="input-message"
                type="message"
                id="message"
                name="message"
                {...register("message", {
                  required: {
                    value: true,
                    message: "Tell us about it",
                  },
                })}
              ></textarea>
              <p className="err-contact">{errors.message?.message}</p>
            </div>
            <div className="form-btn">
              <button type="submit">Make An Appointment</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
