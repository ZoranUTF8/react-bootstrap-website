import "./App.css";
import { Home, AboutUs, ContactUs } from "./Pages";
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
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;
