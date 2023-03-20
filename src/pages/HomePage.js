import React from "react";
import Navbars from "../components/navbar/Navbar";

function HomePage() {
  return (
    <>
      <Navbars />
      <h1>Selamat Datang di Market Place Sinau Academy</h1>
      <p>Login untuk masuk ke akun Anda</p>
      <form>
        <label>Email Address :</label> <br />
        <input
          type="text"
          name="email"
          required="true"
          placeholder="Enter your email address"
        />
      </form>
    </>
  );
}

export default HomePage;
