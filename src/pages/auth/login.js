import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import logo from "../../assets/logo.png";
import "../../css/Login.css";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const toRegister = () => navigate("/register");

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = (e) => {
    e.preventDefault();
    axios
      .post(`https://sinau-app-backend-api-2023.vercel.app/api/v1/auth/login`, {
        password,
        username,
      })
      .then((response) => {
        // console.log(response.data.data);
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("username", response.data.data.username);
        toast.success("Login success", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
        setTimeout(() => navigate("/dashboard"), 3000);
        // setLoading(false);
      })
      .catch((err) => {
        toast.error("Invalid UserName / Profile Name", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
        console.log(err);
        // setLoading(false);
      });
  };
  return (
    <>
      <Navbar />
      <div className="div-cont-login mt-5">
        <img src={logo} alt="" />
        <Card className="title">
          <Card.Header className="d-flex justify-content-center ">Login</Card.Header>
          <Card.Body>
            <Form onSubmit={handleApi}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" onChange={handleUserName} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" onChange={handlePassword} />
              </Form.Group>
              <div className="btn">
                <Button className="enter" type="submit">
                  Masuk
                </Button>
                <Form.Text className="text" onClick={toRegister}>
                  Belum Punya Akun
                </Form.Text>
              </div>
            </Form>
          </Card.Body>
        </Card>
        <ToastContainer />
      </div>
    </>
  );
}

export default Login;
