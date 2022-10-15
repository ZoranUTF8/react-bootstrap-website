import "./App.css";
import { Home, AboutUs, ContactUs, Error, LoginPage } from "./Pages";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./Components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />
      {/* APP ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
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
