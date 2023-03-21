import React from "react";
import Navbars from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const toLogin = () => navigate("/login");

  return (
    <>
      <Navbars />
      <h1>Selamat Datang di Market Place Sinau Academy</h1>
      <p>Silahkan Login untuk masuk ke akun Anda</p>
      <Button variant="outline-success" onClick={toLogin}>
        Success
      </Button>

      <p>Belum punya akun ? Register disini </p>
      <Footer />
    </>
  );
}

export default HomePage;
