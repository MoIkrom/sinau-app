import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import logo from "../../assets/logo.png";
import "../../css/Login.css";
import Navbars from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { register } from "../../API/API";

function Register() {
  const navigate = useNavigate();
  const toLogin = () => navigate("/login");

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  // const [loading, setLoading] = useState(false);

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setconfirmPassword(e.target.value);
  };

  const handleApi = (e) => {
    e.preventDefault();
    register({
      username,
      email,
      password,
      confirmPassword,
    })
      .then((response) => {
        console.log(response);
        toast.success("Register success", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });
        setTimeout(() => navigate("/login"), 1500);
        // setLoading(false);
      })
      .catch((err) => {
        toast.error("Invalid UserName / Profile Name", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });
        console.log(err);
        // setLoading(false);
      });
  };

  return (
    <>
      <Navbars />
      <div className="div-cont mt-5">
        <img src={logo} alt="" />
        <Card className="title">
          <Card.Header className="d-flex justify-content-center ">Register</Card.Header>
          <Card.Body>
            <Form onSubmit={handleApi}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" onChange={handleUserName} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Your Email" onChange={handleEmail} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" onChange={handlePassword} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Confirm Password" onChange={handleConfirmPassword} />
              </Form.Group>
              <div className="btn">
                <Button className="enter" variant="primary" type="submit">
                  Daftar
                </Button>
                <Form.Text className="text" onClick={toLogin}>
                  Sudah Punya Akun
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

export default Register;
