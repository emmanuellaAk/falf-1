import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import { useLayoutEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
