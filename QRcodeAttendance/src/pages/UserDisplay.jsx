import { useEffect, useState } from "react";
import axios from "axios";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function UserDisplay() {
  const [user, setUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const email = Cookies.get("email");
  const navigate = useNavigate();

  useEffect(() => {
    if (email) {
      axios
        .get("http://localhost:3001/getSingleUser", { params: { email } })
        .then((response) => {
          console.log("Fetched users:", response.data);
          setUser(response.data);
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
          setUser(null);
        });
    }
  }, [email]);

  const handleQRCode = (user) => {
    setSelectedUser(user);
  };
  const handleSubmit = () => {
    navigate("/contact");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-slate-900 p-4">
      <div className="bg-slate-900 shadow-lg rounded-xl border p-8 max-w-3xl w-full">
        <h2 className="text-3xl font-extrabold text-center text-yellow-400 mb-6">
          User Details
        </h2>
        {user ? (
          <div className="flex flex-col items-center">
            <div className="bg-slate-900 rounded-lg shadow-md p-6 w-full max-w-sm mb-4">
              <h2 className=" text-xl font-bold text-yellow-400">
                {user.name}
              </h2>
              <p className="text-yellow-400">Email: {user.email}</p>
              <p className="text-yellow-400">Contact: {user.contact}</p>
              <button
                onClick={() => handleQRCode(user)}
                className="m-4 bg-yellow-400 text-black py-2 px-4 rounded hover:bg-blue-700"
              >
                Generate QR Code
              </button>
              <button
                onClick={() => handleSubmit(user)}
                className="m-4 bg-yellow-400 text-black py-2 px-4 rounded hover:bg-blue-700"
              >
                Chat Support
              </button>
            </div>
            {/* {selectedUser  && (
              <div className="mt-4">
                <QRCode value={JSON.stringify(selectedUser )} />
              </div>
            )} */}
            {selectedUser && (
              <div className="mt-8 flex flex-col items-center">
                <h3 className="text-lg font-semibold text-yellow-400 mb-4">
                  QR Code for {selectedUser.name}
                </h3>
                <QRCode
                  size={200}
                  value={`${selectedUser.contact}-${selectedUser.name}-${selectedUser.email}`}
                  className="shadow-lg"
                />
              </div>
            )}
          </div>
        ) : (
          <p className="text-red-500">User not found</p>
        )}
      </div>
    </div>
  );
}
export default UserDisplay;
