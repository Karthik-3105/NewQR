/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [showQRCode, setShowQRCode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        name,
        email,
        contact,
        password,
        showQRCode,
      })
      .then((result) => {
        console.log(result.data);
        setShowQRCode(true);
        navigate("/getSingleUser");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="min-h-screen flex items-center justify-center rounded-lg bg-gradient-to-r from-slate-700 to-black p-4">
      <div className="bg-slate-900 shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-extrabold text-center text-yellow-400 mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="m-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-yellow-400"
            >
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              autoComplete="off"
              name="email"
              className="mt-1 w-full px-4 py-2 border bg-transparent text-yellow-400 rounded-lg focus:ring-2  focus:ring-gray-600 focus:outline-none"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="m-3">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-yellow-400"
            >
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              autoComplete="off"
              name="password"
              className="mt-1 w-full px-4 py-2 border bg-transparent text-yellow-400 rounded-lg focus:ring-2 focus:ring-gray-600 focus:outline-none"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <br />
        &nbsp;
        {showQRCode && (
          <div className="mt-6 flex flex-col items-center">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              QR Code
            </h2>
            <QRCode size={200} value={contact} />
          </div>
        )}
        {/* <QRCode
          className="qrcode"
          size={200}
          value={contact}
          onChange={(e) => setShowQRCode(e.target.value)}
        />{" "}
        used to check if qrcode is working or not */}
      </div>
    </div>
  );
}

export default Login;
