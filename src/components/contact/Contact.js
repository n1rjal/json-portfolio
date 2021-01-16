import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  document.title = "Nirjal's Portfolio | Contact";

  return (
    <div className="Contact__Conatiner">
      <form>
        <h2>Contact Form</h2>
        <div>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
        </div>
        <div className="form-control">
          <CgProfile />
          <input
            type="text"
            className="form__nameInput"
            placeholder="Enter your Name"
            name="name"
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
            name="phone"
            className="form__phoneInput"
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
        <div className="form-control">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
