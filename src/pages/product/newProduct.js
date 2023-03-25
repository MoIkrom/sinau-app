/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../css/NewProduct.css";
import Navbars from "../../components/navbar/Navbar";
import { useNavigate, Navigate } from "react-router-dom";
import { createProduct, allSupplier } from "../../API/API";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TabTitle } from "../../utils/title";

function NewProduct() {
  TabTitle("New Product - Sinau App");
  const navigate = useNavigate();

  const [nama_Barang, setNama_Barang] = useState("");
  const [harga, setHarga] = useState("");
  const [stock, setStock] = useState("");
  const [supplier_id, setSupplier_id] = useState("");
  const [supplier, setSupplier] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNamaBArang = (e) => {
    setNama_Barang(e.target.value);
  };
  const handleHarga = (e) => {
    setHarga(e.target.value);
  };
  const handleStock = (e) => {
    setStock(e.target.value);
  };

  const handleApi = (e) => {
    e.preventDefault();
    setLoading(true);
    createProduct({
      nama_Barang,
      harga,
      stock,
      supplier_id,
    })
      .then(() => {
        toast.success("Success Create Product", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
        setTimeout(() => navigate("/dashboard"), 3000);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Error, Please select Supplier ", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
        console.log(err);
        setLoading(false);
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
            <Card.Text>Tambah Barang </Card.Text>
          </Card.Header>
          <Card.Header className="mx-0 d-flex justify-content-start  ">
            <Form>
              <Form.Group className="mb-3 d-flex flex-row justify-content-between gap-5 w-200" controlId="formBasicEmail">
                <Form.Label className="text-title d-flex align-items-center justify-content-start">Nama Barang </Form.Label>
                <Form.Control type="text" placeholder="Masukkan Nama Barang" onChange={handleNamaBArang} />
              </Form.Group>
              <Form.Group className="mb-3 d-flex flex-row justify-content-between gap-5 w-200" controlId="formBasicEmail">
                <Form.Label className="text-title d-flex align-items-center justify-content-start">Harga Barang </Form.Label>
                <Form.Control type="text" placeholder="Masukkan Harga Barang" onChange={handleHarga} />
              </Form.Group>
              <Form.Group className="mb-3 d-flex flex-row justify-content-between gap-5 w-200" controlId="formBasicEmail">
                <Form.Label className="text-title d-flex align-items-center justify-content-start">Stock Barang </Form.Label>
                <Form.Control type="text" placeholder="Masukkan Jumlah Stock Barang" onChange={handleStock} />
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
                  <option>Silahkan Pilih Supplier</option>;
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
            <div className="d-flex justify-content-center align-items-center minsheight">Creating New Product . . .</div>
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
