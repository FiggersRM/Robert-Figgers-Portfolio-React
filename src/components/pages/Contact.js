import React, { useState } from "react";
import { useForm } from "@formspree/react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [state, handleSubmit] = useForm("xqkveppl");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  if (state.succeeded) {
    return <p>Thanks for contacting me!</p>;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email || !name || !message) {
      setErrorMessage("All fields required");
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setErrorMessage("Invalid Email Address");
      return;
    }
    const templateparams = {
      from_email: email,
      from_name: name,
      message: message,
    };
    emailjs
      .send(
        "service_uoswwlr",
        "template_by001s9",
        templateparams,
        "NpMALbO-nLYQDyBW9"
      )
      .then(
        (response) => {
          console.log("Success");
          alert(
            "Thank you for contacting me! Please allow 24 hours for an email response."
          );
          setEmail("");
          setName("");
          setMessage("");
          setErrorMessage("");
        },
        (err) => {
          console.log(err);
        }
      );
  };

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputValue)) {
        setErrorMessage("Invalid Email Address");
        return;
      } else {
        setErrorMessage("");
      }
    } else if (inputType === "message") {
      setMessage(inputValue);
    } else {
      setName(inputValue);
    }
  };

  return (
    <div className="ContactForm">
      {" "}
      <form onSubmit={handleSubmit}>
        <div className="inputdiv">
          <label htmlFor="name">
            {name.length ? (
              <span style={{ color: "red" }}></span>
            ) : (
              <span style={{ color: "red" }}>*</span>
            )}
            Your Name:{" "}
          </label>
          <input
            className="emailinput"
            type="name"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="inputdiv">
          <label htmlFor="email">
            {email.length ? (
              <span style={{ color: "red" }}></span>
            ) : (
              <span style={{ color: "red" }}>*</span>
            )}
            Your Email Address:{" "}
          </label>
          <input
            className="emailinput"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>
        {message.length ? (
          <span style={{ color: "red" }}></span>
        ) : (
          <span style={{ color: "red" }}>*</span>
        )}
        <textarea
          id="message"
          name="message"
          value={message}
          className="contactmessage"
          placeholder="message"
          onChange={handleInputChange}
        />
        <button type="submit" className="submitBtn" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text" style={{ color: "red" }}>
            {errorMessage}
          </p>
        </div>
      )}
    </div>
  );
}

export default Contact;
