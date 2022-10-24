import "./App.css";
import { Home, AboutUs, ContactUs, Error, LoginPage } from "./Pages";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./Components";
import { ToastContainer } from "react-toastify";
import {
  SharedLayout,
  AddEmployee,
  AllEmployees,
  Profile,
  Stats,
} from "./Pages/Dashboard";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />
      {/* APP ROUTES */}
      <Routes>
        {/* Admin routes */}
        <Route path="admin" element={<SharedLayout />}>
          <Route index element={<Stats />} />
          <Route path="all-employees" element={<AllEmployees />} />
          <Route path="add-employees" element={<AddEmployee />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Admin routes */}
        <Route path="home" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <ToastContainer />
      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;
