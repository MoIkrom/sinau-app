/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import logo from "../../assets/logo.png";
import "../../css/Login.css";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate, Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login } from "../../API/API";
import { TabTitle } from "../../utils/title";
import eyeslash from "../../assets/eyeslash2.png";
import eye from "../../assets/eye2.png";

function Login() {
  TabTitle("Login - Sinau App");
  const navigate = useNavigate();
  const toRegister = () => navigate("/register");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [PwdShown, setPwdShown] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = (e) => {
    e.preventDefault();
    setLoading(true);
    login({
      email,
      password,
    })
      .then((response) => {
        const currentdate = new Date();
        const datetime = currentdate.getDate() + "-" + currentdate.getMonth() + "-" + currentdate.getFullYear();
        const clock = new Date(new Date()).toString().split(" ")[4];
        const daysOfWeek = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
        const day = daysOfWeek[currentdate.getDay()];
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("loginDate", datetime);
        localStorage.setItem("loginTime", clock);
        localStorage.setItem("loginDay", day);

        setLoading(false);
      })
      .catch((err) => {
        toast.error("Wrong Email / Password", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });
        console.log(err);
        setLoading(false);
      });
  };
  const token = localStorage.getItem("token");
  if (token) return <Navigate to="/dashboard" replace={true} state={{ isRedirected: true }} />;
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
                <Form.Control type={PwdShown === false ? "password" : "text"} placeholder="Enter Password" onChange={handlePassword} />
                <div className="d-flex justify-content-end gap-2 align-items-center mt-2 me-2">
                  <p className="m-0 fontsz"> Show Password</p>
                  <img className="sizes-eyez" onClick={() => setPwdShown(!PwdShown)} src={PwdShown === false ? eyeslash : eye} atl="/" />
                </div>
              </Form.Group>
              {(email && password) === "" ? (
                <div className="btn">
                  <Button disabled className="disable">
                    Masuk
                  </Button>
                  <Form.Text className="text" onClick={toRegister}>
                    Belum Punya Akun
                  </Form.Text>
                </div>
              ) : (
                <div className="btn">
                  <Button className="enter" type="submit">
                    {loading === true ? "Loading . . . " : "Masuk"}
                  </Button>
                  <Form.Text className="text" onClick={toRegister}>
                    Belum Punya Akun
                  </Form.Text>
                </div>
              )}
            </Form>
          </Card.Body>
        </Card>
        <ToastContainer />
      </div>
    </>
  );
}

export default Login;
