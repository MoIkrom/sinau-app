/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../css/NewProduct.css";
import Navbars from "../../components/navbar/Navbar";
import { useNavigate, Navigate } from "react-router-dom";
import { editProduct, getProductById, allSupplier } from "../../API/API";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TabTitle } from "../../utils/title";

function NewProduct() {
  TabTitle("Update Product - Sinau App");
  const navigate = useNavigate();
  const [supplier, setSupplier] = useState("");
  const [supplier_id, setSupplier_id] = useState("");
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const url = window.location.pathname;
  const id = url.substring(url.lastIndexOf("/") + 1);

  const handleApi = (e) => {
    e.preventDefault();
    setLoading(true);
    editProduct(form, id)
      .then(() => {
        toast.success("Success Edit Product", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });
        setTimeout(() => navigate("/dashboard"), 2000);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Cannot Edit Product", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
        console.log(err);
        setLoading(false);
      });
  };
  const getProductDetail = () => {
    getProductById(id)
      .then((res) => {
        setForm(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getAllSupplier = () => {
    allSupplier()
      .then((res) => {
        setSupplier(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProductDetail();
    getAllSupplier();
  }, []);

  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/" replace={true} state={{ msg: "You have to Login first", isRedirected: true }} />;
  return (
    <>
      <Navbars />
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Card className="widths">
          <Card.Header className="mx-0 d-flex justify-content-start bgColor widths">
            <Card.Text>Update Barang </Card.Text>
          </Card.Header>
          <Card.Header className="mx-0 d-flex justify-content-start  ">
            <Form>
              <Form.Group className="mb-3 d-flex flex-row justify-content-between gap-5 w-200" controlId="formBasicEmail">
                <Form.Label className="text-title d-flex align-items-center justify-content-start">Nama Barang </Form.Label>
                <Form.Control type="text" name="nama_Barang" placeholder={form.nama_Barang} onChange={handleChangeForm} />
              </Form.Group>
              <Form.Group className="mb-3 d-flex flex-row justify-content-between gap-5 w-200" controlId="formBasicEmail">
                <Form.Label className="text-title d-flex align-items-center justify-content-start">Harga Barang </Form.Label>
                <Form.Control type="text" name="harga" placeholder={form.harga} onChange={handleChangeForm} />
              </Form.Group>
              <Form.Group className="mb-3 d-flex flex-row justify-content-between gap-5 w-200" controlId="formBasicEmail">
                <Form.Label className="text-title d-flex align-items-center justify-content-start">Stock Barang </Form.Label>
                <Form.Control type="text" name="stock" placeholder={form.stock} onChange={handleChangeForm} />
              </Form.Group>
              <Form.Group className="mb-3 d-flex flex-row justify-content-between gap-5 w-200" controlId="formBasicEmail">
                <Form.Label className="text-title d-flex align-items-center justify-content-start">Supplier Barang </Form.Label>
                <Form.Select
                  aria-label="Silahkan Pilih Supplier"
                  as="select"
                  value={supplier_id}
                  onChange={(e) => {
                    setSupplier_id(e.target.value);
                  }}
                >
                  <option> Silahkan Pilih Supplier</option>;
                  {supplier.length > 0
                    ? supplier.map((sup, idx) => {
                        return <option value={sup.id}>{sup.nama_Supplier}</option>;
                      })
                    : "Tidak Ada Supplier"}
                </Form.Select>
              </Form.Group>
            </Form>
          </Card.Header>
          {loading ? (
            <div className="d-flex justify-content-center align-items-center minsheight">Edit Data Supplier . . .</div>
          ) : (
            <div>
              <Card.Body className="d-flex align-items-center justify-content-between">
                <Button onClick={() => navigate(-1)}>Kembali</Button>
                <Button onClick={handleApi}>Submit</Button>
              </Card.Body>
            </div>
          )}
        </Card>
      </div>
      <ToastContainer />
    </>
  );
}

export default NewProduct;
