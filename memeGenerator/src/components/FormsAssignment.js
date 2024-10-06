import React from "react";

const FormsAssignment = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password1: "",
    password2: "",
    isNewsLetter: false,
  });

  //   console.log(formData);
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        // [event.target.name]: event.target.value,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //     if (formData.password1 === formData.password2) {
    //       console.log("Successfully signed up");
    //     } else {
    //       console.log("Password do not match");
    //     }
    //     if (formData) console.log("Thanks for signing up for the newsletter");
    //   };
    const passwordSet = formData.password1 === formData.password2;
    passwordSet && formData.password1 !== ""
      ? console.log("Successfully signed up")
      : console.log("Password do not match");
    if (formData) console.log("Thanks for signing up for the newsletter");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Your e-mail here"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password1"
        placeholder="Your password here"
        value={formData.password1}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password2"
        placeholder="Confirm tyour password here"
        value={formData.password2}
        onChange={handleChange}
      />
      <input
        type="checkbox"
        name="isNewsLetter"
        id="isNewsLetter"
        checked={formData.isNewsLetter}
        onChange={handleChange}
      />
      <label htmlFor="isNewsLetter">I want to join the News Letter</label>
      <br />
      <button>Submit</button>
    </form>
  );
};

export default FormsAssignment;
