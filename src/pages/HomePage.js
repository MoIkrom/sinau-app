import React from "react";
import Navbars from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Button from "react-bootstrap/Button";
import "../css/HomePage.css";
import { TabTitle } from "../utils/title";
import { useNavigate, Navigate } from "react-router-dom";
import logo from "../assets/logo.png";

function HomePage() {
  TabTitle("HomePage - Sinau App");
  const navigate = useNavigate();
  const toLogin = () => navigate("/login");
  const token = localStorage.getItem("token");
  if (token) return <Navigate to="/dashboard" replace={true} state={{ isRedirected: true }} />;
  return (
    <>
      <Navbars />
      <div className="container ">
        <div className="d-flex flex-column align-items-center justify-content-center height ">
          <div className="d-flex flex-column justify-content-center align-items-center pozi">
            <img className="sizes" src={logo} alt="" />
            <h1 className="mb-3 jdl">Selamat Datang di Market Place Sinau Academy</h1>
          </div>
          <div className="container justify-content-center align-items-center">
            <h3>
              Aplikasi ini dibuat menggunakan Bahasa Pemrograman Javascript , dimana dari sisi Front-End menggunakan Framework React Js , dan Bootstrap . Sedangkan dari sisi Back-End menggunakan Node.Js dan Express.Js . Database yang
              digunakan adalah Supabase
            </h3>
          </div>
          <p className="mt-5 mb-3 fonts">Silahkan Klik Lanjutkan untuk masuk ke Aplikasi </p>
          <Button className="my-2 w-25 align-items-center fonts-2" variant="outline-success" onClick={toLogin}>
            Lanjutkan
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
