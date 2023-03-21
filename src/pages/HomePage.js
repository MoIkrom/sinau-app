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
      <div className="container">
        <div className="d-flex flex-column align-items-center justify-content-center   ">
          <h1 className="my-5">Selamat Datang di Market Place Sinau Academy</h1>
          <p className="mt-5 mb-3" >Silahkan Klik Lanjutkan untuk masuk ke Aplikasi </p>
          <Button className="my-2 w-25 align-items-center" variant="outline-success" onClick={toLogin}>
            Lanjutkan
          </Button> 
        </div>{" "}
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
