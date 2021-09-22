import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState({ text: "", color: "" });
  const [captcha, setCaptcha] = useState("");
  document.title = "Nirjal's Portfolio | Contact";

  useEffect(() => {
    loadCaptchaEnginge(3);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    if (validateCaptcha(captcha) == true) {
      emailjs
        .sendForm(
          "service_tv4cqt8",
          "template_o5c0txg",
          e.target,
          "user_J0F3xmqTMFQ9dA1jaRsGg"
        )
        .then(
          (result) => {
            e.target.reset();
            setAnswer({ text: "Your Mail is sent", color: "green" });
            loadCaptchaEnginge(3);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setAnswer({ text: "Captcha Code Error", color: "red" });
      loadCaptchaEnginge(3);
    }
  };

  return (
    <div className="Contact__Conatiner">
      <form onSubmit={onSubmit}>
        <h2>Contact Form</h2>
        <div>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
        </div>
        <div className="form-control">
          {answer && <p style={{ color: answer.color }}>{answer.text}</p>}
        </div>
        <div className="form-control">
          <CgProfile />
          <input
            type="text"
            className="form__nameInput"
            placeholder="Enter your Name"
            name="from_name"
            value={name}
            onChange={(e) => setName(e.value)}
          />
        </div>
        <div className="form-control">
          <AiFillPhone />
          <input
            type="text"
            className="form__phoneInput"
            placeholder="Enter your Phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.value)}
          />
        </div>
        <div className="form-control">
          <AiOutlineMail />
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            className="form__emailInput"
            value={email}
            onChange={(e) => setEmail(e.value)}
          />
        </div>
        <div className="form-control-textarea">
          <textarea
            name="message"
            cols="43"
            rows="10"
            placeholder="Enter your message"
            className="form__message"
            value={message}
            onChange={(e) => setMessage(e.value)}
          ></textarea>
        </div>

        <div className="recaptcha">
          <h3>Captcha code</h3>
          <LoadCanvasTemplate></LoadCanvasTemplate>
          <div className="form-control">
            <input
              type="text"
              autoComplete="off"
              placeholder="Enter captcha code"
              name="text"
              className="form__captchaInput"
              value={captcha}
              onChange={(e) => setCaptcha(e.value)}
            />
          </div>
        </div>

        <div className="form-control">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
