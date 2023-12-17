import { useState } from "react";
import axios from "axios";
import "./contact.css"; // Import your CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbw4uDi5jXog6721cnMbgTSpm7D-JGB2hpKX5dIElqZQLVUWZN9_68fGPfMGvS26Nh73rQ/exec",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      // Handle error
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>Name:</span>
        <input type="text" name="Name" onChange={handleChange} />
      </label>
      <label>
        <span>Email:</span>
        <input type="email" name="Email" onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
