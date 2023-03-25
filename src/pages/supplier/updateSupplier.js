/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../css/NewProduct.css";
import Navbars from "../../components/navbar/Navbar";
import { useNavigate, Navigate } from "react-router-dom";
import { editSupplier, getSupplierById } from "../../API/API";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TabTitle } from "../../utils/title";

function UpdateSupplier({ route }) {
  TabTitle("Update Supplier - Sinau App");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({});

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const url = window.location.pathname;
  const id = url.substring(url.lastIndexOf("/") + 1);

  const handleApi = (e) => {
    e.preventDefault();
    setLoading(true);
    editSupplier(form, id)
      .then(() => {
        toast.success("Success Edit Supplier", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });
        setTimeout(() => navigate("/dashboard"), 2000);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Cannot Edit Supplier", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
        console.log(err);
        setLoading(false);
      });
  };

  const getDataSupplier = () => {
    getSupplierById(id)
      .then((res) => {
        setForm(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataSupplier();
  }, []);

  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/" replace={true} state={{ msg: "You have to Login first", isRedirected: true }} />;
  return (
    <>
      <Navbars />
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Card className="widths">
          <Card.Header className="mx-0  d-flex justify-content-start bgColor widths">
            <Card.Text className="font-20 ps-4 ">Update Supplier </Card.Text>
          </Card.Header>
          <Card.Header className="mx-0 d-flex justify-content-start  ">
            <Form className="mt-3">
              <Form.Group className="mb-3 d-flex flex-row justify-content-between gap-5 w-200" controlId="formBasicEmail">
                <Form.Label className="text-title ps-4 d-flex align-items-center justify-content-start font-16">Nama Supplier </Form.Label>
                <Form.Control type="text" placeholder={form.nama_Supplier} name="nama_Supplier" onChange={handleChangeForm} />
              </Form.Group>
              <Form.Group className="mb-3 d-flex flex-row justify-content-between gap-5 w-200" controlId="formBasicEmail">
                <Form.Label className="text-title ps-4 d-flex align-items-center justify-content-start font-16">Alamat Supplier </Form.Label>
                <Form.Control type="text" name="alamat" placeholder={form.alamat} onChange={handleChangeForm} />
              </Form.Group>
              <Form.Group className="mb-3 d-flex flex-row justify-content-between gap-5 w-200" controlId="formBasicEmail">
                <Form.Label className="text-title ps-4 d-flex align-items-center justify-content-start font-16">Nomor Telepon </Form.Label>
                <Form.Control type="text" name="noTelp" placeholder={form.noTelp} className="font-16" onChange={handleChangeForm} />
              </Form.Group>
            </Form>
          </Card.Header>
          {loading ? (
            <div className="d-flex justify-content-center align-items-center minsheight">Edit Data Supplier . . .</div>
          ) : (
            <div>
              <Card.Body className="d-flex  align-items-center justify-content-between">
                <Button className="bg-secondary btn-back" onClick={() => navigate(-1)}>
                  Kembali
                </Button>
                <Button className=" btn-back" onClick={handleApi}>
                  Submit
                </Button>
              </Card.Body>
            </div>
          )}
        </Card>
      </div>
      <ToastContainer />
    </>
  );
}

export default UpdateSupplier;
