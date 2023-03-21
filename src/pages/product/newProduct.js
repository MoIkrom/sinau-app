import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function newProduct() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center ">
        <Card className="widths">
          <Card.Header className="mx-0 d-flex justify-content-start bgColor widths">
            <Card.Text>Dashboard </Card.Text>
          </Card.Header>
          <Card.Body className="d-flex align-items-center justify-content-between">
            <Card.Text>Barang </Card.Text>
            <Button>Tambah Barang</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default newProduct;
