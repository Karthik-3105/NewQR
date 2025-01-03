// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import UserDisplay from "./pages/UserDisplay";
import Chatsupport from "./pages/ChatSupport";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/getSingleUser" element={<UserDisplay />} />
        <Route path="/contact" element={<Chatsupport />} />
      </Routes>
    </BrowserRouter>
    // <div className='bg-slate-900 text-yellow-400 underline font-bold italic hover:not-italic text-center mt-14 m-8'>
    //   Hello guys lets work on Qr code attendance
    // </div>
  );
}

export default App;
