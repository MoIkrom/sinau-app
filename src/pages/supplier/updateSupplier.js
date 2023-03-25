import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../css/NewProduct.css";
import Navbars from "../../components/navbar/Navbar";
import { useNavigate, Navigate } from "react-router-dom";
import { editSupplier } from "../../API/API";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TabTitle } from "../../utils/title";

function UpdateSupplier({ route }) {
  TabTitle("Update Supplier - Sinau App");
  const navigate = useNavigate();
  const [nama_Supplier, setNama_Supplier] = useState("");
  const [alamat, setAlamat] = useState("");
  const [noTelp, setnoTelp] = useState("");

  const handleNamaSupplier = (e) => {
    setNama_Supplier(e.target.value);
  };
  const handleAlamat = (e) => {
    setAlamat(e.target.value);
  };
  const handleNoTelp = (e) => {
    setnoTelp(e.target.value);
  };
  const url = window.location.pathname;
  const id = url.substring(url.lastIndexOf("/") + 1);

  const handleApi = (e) => {
    e.preventDefault();
    editSupplier(
      {
        nama_Supplier,
        alamat,
        noTelp,
      },
      id
    )
      .then(() => {
        toast.success("Success Edit Supplier", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });
        setTimeout(() => navigate("/dashboard"), 2000);
        // setLoading(false);
      })
      .catch((err) => {
        toast.error("Cannot Create Supplier", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
        console.log(err);
        // setLoading(false);
      });
  };
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/" replace={true} state={{ msg: "You have to Login first", isRedirected: true }} />;
  return (
    <>
      <Navbars />
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Card className="widths">
          <Card.Header className="mx-0 d-flex justify-content-start bgColor widths">
            <Card.Text>Update Supplier </Card.Text>
          </Card.Header>
          <Card.Header className="mx-0 d-flex justify-content-start  ">
            <Form>
              <Form.Group className="mb-3 d-flex flex-row justify-content-between gap-5 w-200" controlId="formBasicEmail">
                <Form.Label className="text-title d-flex align-items-center justify-content-start">Nama Supplier </Form.Label>
                <Form.Control type="text" placeholder="Masukkan Nama Supplier" onChange={handleNamaSupplier} />
              </Form.Group>
              <Form.Group className="mb-3 d-flex flex-row justify-content-between gap-5 w-200" controlId="formBasicEmail">
                <Form.Label className="text-title d-flex align-items-center justify-content-start">Alamat Supplier </Form.Label>
                <Form.Control type="text" placeholder="Masukkan Alamat Supplier " onChange={handleAlamat} />
              </Form.Group>
              <Form.Group className="mb-3 d-flex flex-row justify-content-between gap-5 w-200" controlId="formBasicEmail">
                <Form.Label className="text-title d-flex align-items-center justify-content-start">Nomor Telepon </Form.Label>
                <Form.Control type="text" placeholder="Masukkan Nomor Telepon" onChange={handleNoTelp} />
              </Form.Group>
              <Form.Group className="mb-3 d-flex flex-row justify-content-between gap-5 w-200" controlId="formBasicEmail">
                <Form.Label className="text-title d-flex align-items-center justify-content-start">Supplier Barang </Form.Label>
                <Form.Control />
              </Form.Group>
            </Form>
          </Card.Header>
          <Card.Body className="d-flex align-items-center justify-content-between">
            <Button onClick={() => navigate(-1)}>Kembali</Button>
            <Button onClick={handleApi}>Submit</Button>
          </Card.Body>
        </Card>
      </div>
      <ToastContainer />
    </>
  );
}

export default UpdateSupplier;
