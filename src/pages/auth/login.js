import React from "react";
import Card from "react-bootstrap/Card";
import logo from "../../assets/logo.png";
import "../../css/Login.css";

import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  const navigate = useNavigate();
  const toRegister = () => navigate("/register");
  return (
    <>
      <div className="div-cont">
        <img src={logo} alt="" />
        <Card className="title">
          <Card.Header className="d-flex justify-content-center ">
            Login
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Enter Username" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" />
              </Form.Group>
              <div className="btn">
                <Button className="enter" variant="primary" type="submit">
                  Masuk
                </Button>
                <Form.Text className="text" onClick={toRegister}>Belum Punya Akun</Form.Text>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Login;
