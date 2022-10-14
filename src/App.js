import "./App.css";
import { Home, AboutUs, ContactUs, Error, LoginPage } from "./Pages";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./Components";

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
      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;
