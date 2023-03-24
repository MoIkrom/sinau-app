import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../css/NewProduct.css";
import Navbars from "../../components/navbar/Navbar";

function newProduct() {
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
                <Form.Control type="text" placeholder="Masukkan Nama Barang" />
              </Form.Group>
              <Form.Group className="mb-3 d-flex flex-row justify-content-between gap-5 w-200" controlId="formBasicEmail">
                <Form.Label className="text-title d-flex align-items-center justify-content-start">Harga Barang </Form.Label>
                <Form.Control type="text" placeholder="Masukkan Harga Barang" />
              </Form.Group>
              <Form.Group className="mb-3 d-flex flex-row justify-content-between gap-5 w-200" controlId="formBasicEmail">
                <Form.Label className="text-title d-flex align-items-center justify-content-start">Stock Barang </Form.Label>
                <Form.Control type="text" placeholder="Masukkan Jumlah Stock Barang" />
              </Form.Group>
              <Form.Group className="mb-3 d-flex flex-row justify-content-between gap-5 w-200" controlId="formBasicEmail">
                <Form.Label className="text-title d-flex align-items-center justify-content-start">Supplier Barang </Form.Label>
                <Form.Control />
              </Form.Group>
            </Form>
          </Card.Header>
          <Card.Body className="d-flex align-items-center justify-content-between">
            <Button>Kembali</Button>
            <Button>Submit</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default newProduct;
