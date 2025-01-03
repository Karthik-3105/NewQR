/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Chatsupport() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/contact", {
        name,
        email,
        contact,
        password,
        message,
      })
      .then((result) => {
        alert("Message Sent Successfully");
        navigate("/getSingleUser");
      })
      .catch((error) => console.log(error));
  };

  return (
    <section
      className="contact py-10 px-5 rounded-lg bg-gradient-to-r from-slate-700 to-black p-4"
      id="contact"
    >
      <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">
        Contact <span className="text-white">Me</span>
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto border-x-white bg-slate-900 p-6 shadow-lg rounded-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="input-field">
            <input
              type="text"
              placeholder="Enter name"
              autoComplete="on"
              name="name"
              className="mt-1 w-full px-4 py-2 border bg-transparent rounded-lg focus:ring-2  text-yellow-400 focus:ring-gray-600 focus:outline-none"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-field">
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="on"
              name="email"
              required
              className="mt-1 w-full px-4 py-2 border bg-transparent rounded-lg focus:ring-2  text-yellow-400 focus:ring-gray-600 focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="input-field">
            <input
              type="tel"
              placeholder="Enter number"
              autoComplete="on"
              name="contact"
              className="mt-1 w-full px-4 py-2 border bg-transparent rounded-lg focus:ring-2  text-yellow-400 focus:ring-gray-600 focus:outline-none"
              required
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Enter password"
              autoComplete="on"
              name="password"
              className="mt-1 w-full px-4 py-2 border bg-transparent rounded-lg focus:ring-2  text-yellow-400 focus:ring-gray-600 focus:outline-none"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="textarea-field mt-6">
          <textarea
            cols="30"
            rows="10"
            name="message"
            placeholder="Your Message"
            required
            className="w-full border bg-transparent  text-yellow-500 border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
        </div>

        <div className="btn-box text-center mt-6">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default Chatsupport;
