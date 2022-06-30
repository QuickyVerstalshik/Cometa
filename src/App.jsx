import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './index.css';
import './global.scss';
import Layout from "./pages/Layout";

function App() {
   useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <Layout />
  );
}

export default App;
