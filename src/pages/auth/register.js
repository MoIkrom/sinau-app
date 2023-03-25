/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import logo from "../../assets/logo.png";
import "../../css/Login.css";
import Navbars from "../../components/navbar/Navbar";
import { useNavigate, Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TabTitle } from "../../utils/title";
import { register } from "../../API/API";
import eyeslash from "../../assets/eyeslash2.png";
import eye from "../../assets/eye2.png";

function Register() {
  TabTitle("Register - Sinau App");
  const navigate = useNavigate();
  const toLogin = () => navigate("/login");

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [PwdShown, setPwdShown] = useState(false);
  const [PwdShown2, setPwdShown2] = useState(false);

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
    setLoading(true);
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
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Invalid UserName / Profile Name", {
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
      <Navbars />
      <div className="div-cont mt-5">
        <img src={logo} alt="" />
        <Card className="titlez">
          <Card.Header className="d-flex justify-content-center ">Register</Card.Header>
          <Card.Body>
            <Form onSubmit={handleApi}>
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" onChange={handleUserName} />
              </Form.Group>
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Your Email" onChange={handleEmail} />
              </Form.Group>

              <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type={PwdShown === false ? "password" : "text"} placeholder="Enter Password" onChange={handlePassword} />{" "}
                <div className="d-flex justify-content-end gap-2 align-items-center me-2 mt-2 ">
                  <p className="m-0 fontsz"> Show Password</p>
                  <img className="sizes-eyez" onClick={() => setPwdShown(!PwdShown)} src={PwdShown === false ? eyeslash : eye} atl="/" />
                </div>
              </Form.Group>
              <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type={PwdShown2 === false ? "password" : "text"} placeholder="Enter Confirm Password" onChange={handleConfirmPassword} />{" "}
                <div className="d-flex justify-content-end gap-2 align-items-center mt-2 me-2 ">
                  <p className="m-0 fontsz"> Show Confirm Password</p>
                  <img className="sizes-eyez" onClick={() => setPwdShown2(!PwdShown2)} src={PwdShown2 === false ? eyeslash : eye} atl="" />
                </div>
              </Form.Group>
              {(username && email && password && confirmPassword) === "" ? (
                <div className="btn">
                  <Button disabled className="disable">
                    {loading === true ? "Loading . . . " : "Daftar"}
                  </Button>
                  <Form.Text className="text" onClick={toLogin}>
                    Sudah Punya Akun
                  </Form.Text>
                </div>
              ) : (
                <div className="btn">
                  <Button className="enter" variant="primary" type="submit">
                    {loading === true ? "Loading . . . " : "Daftar"}
                  </Button>
                  <Form.Text className="text" onClick={toLogin}>
                    Sudah Punya Akun
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

export default Register;
