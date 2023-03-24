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
import { login } from "../../API/API";

function Login() {
  const navigate = useNavigate();
  const toRegister = () => navigate("/register");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = (e) => {
    e.preventDefault();
    login({
      email,
      password,
    })
      .then((response) => {
        const currentdate = new Date();
        const datetime = currentdate.getDate() + "-" + currentdate.getMonth() + "-" + currentdate.getFullYear();
        const clock = new Date(new Date()).toString().split(" ")[4];
        const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        const day = daysOfWeek[currentdate.getDay()];
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("loginDate", datetime);
        localStorage.setItem("loginTime", clock);
        localStorage.setItem("loginDay", day);
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
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Your Email" onChange={handleEmail} />
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
