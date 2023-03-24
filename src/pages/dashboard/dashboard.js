/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbars from "../../components/navbar/Navbar";
import Table from "react-bootstrap/Table";
import Footer from "../../components/footer/Footer";
import profile from "../../assets/profile.png";
import "../../css/Dashboard.css";
import Tables from "../../components/table/Tables";
import { getProfile, getProduct } from "../../API/API";

function Dashboard() {
  const [username, setusername] = useState("");
  const [product, setProduct] = useState([]);

  const getAllProduct = () => {
    getProduct()
      .then((res) => {
        console.log(res.data.data);
        setProduct(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const costing = (price) => {
    return parseFloat(price)
      .toFixed()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  };

  const getProfileUser = () => {
    getProfile()
      .then((res) => {
        setusername(res.data.data[0].username);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const day = localStorage.getItem("loginDay");
  const date = localStorage.getItem("loginDate");
  const time = localStorage.getItem("loginTime");

  useEffect(() => {
    getProfileUser();
    getAllProduct();
  }, []);
  return (
    <>
      <Navbars />
      <div className="container d-flex flex-row gap-5 pt-5 mb-5">
        <div className="d-flex flex-column gap-5">
          <Card style={{ width: "18rem" }}>
            <Card.Header className="mx-0 d-flex justify-content-center" style={{ width: "18rem" }}>
              <Card.Img className="img-profile mt-3 " variant="top" src={profile} />
            </Card.Header>
            <Card.Body className="d-flex justify-content-center bgColor">
              <Card.Text className="font">{username} </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Header className="mx-0 d-flex justify-content-center bgColor" style={{ width: "18rem" }}>
              <Card.Text className="d-flex justify-content-center font ">Menu </Card.Text>
            </Card.Header>
            <Card.Body className="border">
              <Card.Text className="font">Barang </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Text className="font">Supplier </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Header className="mx-0 d-flex align-items-center justify-content-center gap-1 bgColor" style={{ width: "18rem" }}>
              <Card.Text className="d-flex justify-content-center mb-0 font">Online</Card.Text>
              <canvas className="canvas"></canvas>
            </Card.Header>
            <Card.Body className="d-flex pb-0 flex-row justify-content-start  ">
              <Card.Text className="width-ol font">Hari Online</Card.Text>
              <Card.Text className="font">
                {": " + day + " ,"} {date}
              </Card.Text>
            </Card.Body>
            <Card.Body className="d-flex py-0 flex-row justify-content-start  ">
              <Card.Text className="width-ol font">Waktu Online </Card.Text>
              <Card.Text className="font"> {": " + time + " WIB"}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="widths">
            <Card.Header className="mx-0 d-flex justify-content-start bgColor widths">
              <Card.Text className="font">Dashboard </Card.Text>
            </Card.Header>
            <Card.Body className="d-flex align-items-center justify-content-between">
              <Card.Text className="font">Barang </Card.Text>
              <Button className="font">Tambah Barang</Button>
            </Card.Body>
            <div className="container">
              <Table striped bordered hover>
                <thead>
                  <tr className="font">
                    <th>No</th>
                    <th>Nama Barang</th>
                    <th>Stock </th>
                    <th>Harga</th>
                    <th>Nama Supplier</th>
                    <th>Alamat Supplier</th>
                    <th>No Telp Supplier</th>
                    <th className="d-flex align-items-center justify-content-center">Aksi</th>
                  </tr>
                </thead>
              </Table>
              {product.length > 0
                ? product.map((products, idx) => {
                    return <Tables key={products.id} no={idx + 1} nama_Barang={products.nama_Barang} harga={`${"Rp"} ${costing(products.harga)}`} stock={products.stock} />;
                  })
                : "Product Not Found"}
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
