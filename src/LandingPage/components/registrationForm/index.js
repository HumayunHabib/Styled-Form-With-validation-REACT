import React, { useState } from "react";
import { formImage } from "../../../assets";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateField = (input, errorSetter, errorMessage, regex = null) => {
    if (!input) {
      errorSetter(errorMessage);
      return false;
    }

    if (regex && !regex.test(input)) {
      errorSetter(`Invalid ${errorMessage.toLowerCase()} format.`);
      return false;
    }

    errorSetter("");
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isNameValid = validateField(
      name,
      setNameError,
      "Please enter your name.",
      /^[a-zA-Z\s]+$/
    );
    const isCompanyValid = validateField(
      company,
      setCompanyError,
      "Please enter your company name."
    );
    const isEmailValid = validateField(
      email,
      setEmailError,
      "Please enter a valid email address.",
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    );

    if (isNameValid && isCompanyValid && isEmailValid) {
      // Perform submission logic here
    }
  };

  return (
    <section className="form-section" id="registration">
      <div className="form-left">
        <img src={formImage} alt="FormImage" />
      </div>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Registration</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
            tristique senectus dui pharetra sit.
          </p>

          <label htmlFor="name" className="required">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <span className="error">{nameError}</span>

          <label htmlFor="company">Company:</label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Enter your company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
          <span className="error">{companyError}</span>

          <label htmlFor="email" className="required">
            Email address:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span className="error">{emailError}</span>

          <div style={{ width: "100%", textAlign: "left" }}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
