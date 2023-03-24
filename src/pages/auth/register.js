import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import logo from "../../assets/logo.png";
import "../../css/Login.css";
import Navbars from "../../components/navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();
  const toLogin = () => navigate("/login");

  const [userName, setUserName] = useState("");
  const [profileName, setProfileName] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleProfileName = (e) => {
    setProfileName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = (e) => {
    e.preventDefault();
    axios
      .post(`http://159.223.57.121:8090/auth/register`, {
        password,
        profileName,
        userName,
      })
      .then((response) => {
        console.log(response);
        toast.success("Register success", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
        // setTimeout(() => navigate("/login"), 3000);
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
                <Form.Label>Profile Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Profile Name" onChange={handleProfileName} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" onChange={handlePassword} />
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

export default Login;
