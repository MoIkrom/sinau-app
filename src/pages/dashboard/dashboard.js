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
import Tablesupplier from "../../components/table/TableSupplier";
import { getProfile, getProduct, getSupplier, deleteProduct } from "../../API/API";
import { useNavigate, Navigate } from "react-router-dom";
import { TabTitle } from "../../utils/title";

import Modal from "react-bootstrap/Modal";

function Dashboard() {
  TabTitle("Dashboard - Sinau App");
  const navigate = useNavigate();
  const toNewProduct = () => navigate("/new-product");
  const toNewSupplier = () => navigate("/new-supplier");
  const [username, setusername] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState([]);
  const [nama_supplier, setNamaSupplier] = useState("");
  const [supplier, setSupplier] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [supplier, setSupplier] = useState([]);

  const [click, setClick] = useState(false);

  const deleteProducts = (id) => {
    deleteProduct(id)
      .then((res) => {
        window.location.reload();
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAllProduct = () => {
    setLoading(true);
    getProduct()
      .then((res) => {
        setProduct(res.data.data);
        console.log(res.data.data);
        setLoading(false);
        // setNamaSupplier(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getAllSupplier = () => {
    setLoading(true);
    getSupplier()
      .then((res) => {
        setSupplier(res.data.data);
        setLoading(false);
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
    setLoading(true);
    getProfile()
      .then((res) => {
        setusername(res.data.data[0].username);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const day = localStorage.getItem("loginDay");
  const date = localStorage.getItem("loginDate");
  const time = localStorage.getItem("loginTime");

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    getProfileUser();
    getAllProduct();
    getAllSupplier();
  }, []);
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/" replace={true} state={{ msg: "You have to Login first", isRedirected: true }} />;
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
            <div
              onClick={() => {
                setClick(false);
                console.log(click);
              }}
              className="cursor"
            >
              <Card.Body className={click === false ? "p-0 click-bg" : "cursor"}>
                <Card.Text className="font">Barang </Card.Text>
              </Card.Body>
            </div>
            <div
              className="cursor"
              onClick={() => {
                setClick(true);
                console.log(click);
              }}
            >
              <Card.Body className={click === true ? "p-0 click-bg" : "cursor"}>
                <Card.Text className="font">Supplier </Card.Text>
              </Card.Body>
            </div>
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

        {loading ? (
          ""
        ) : (
          <div>
            <Card className="widths ">
              <Card.Header className="mx-0 d-flex justify-content-start bgColor widths ">
                <Card.Text className="font f-18">Dashboard </Card.Text>
              </Card.Header>
              <Card.Body className="d-flex align-items-center justify-content-between ">
                <Card.Text className="font f-22">{click === true ? "Supplier" : "Barang"} </Card.Text>
                <Button className="font" onClick={click === true ? toNewSupplier : toNewProduct}>
                  {click === true ? " Tambah Supplier" : " Tambah Barang"}
                </Button>
              </Card.Body>
              {click === true ? (
                <div className="container">
                  <Table striped bordered hover>
                    <thead>
                      <tr className="font">
                        <th>No</th>
                        <th>Nama Supplier</th>
                        <th>Alamat </th>
                        <th>No Telepon</th>
                        <th className="d-flex align-items-center justify-content-center">Aksi</th>
                      </tr>
                    </thead>
                  </Table>
                  {supplier.length > 0
                    ? supplier.map((suppliers, idx) => {
                        return (
                          <Tablesupplier
                            key={suppliers.id}
                            no={idx + 1}
                            nama_spl={suppliers.nama_Supplier}
                            alamat={suppliers.alamat}
                            no_Tlp={suppliers.noTelp}
                            id={suppliers.id}
                            modal={handleShowModal}
                            remove={setShowModal}
                            navigates={() => navigate(`/update-supplier/${suppliers.id}`)}
                          />
                        );
                      })
                    : ""}
                </div>
              ) : (
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
                        return (
                          <Tables
                            key={products.id}
                            no={idx + 1}
                            nama_Barang={products.nama_Barang}
                            harga={`${"Rp"} ${costing(products.harga)}`}
                            stock={products.stock}
                            nama_spl={products[idx]}
                            remove={deleteProducts}
                            id={products.id}
                            modal={handleShowModal}
                            navigates={() => navigate(`/update-product/${products.id}`)}
                          />
                        );
                      })
                    : ""}
                </div>
              )}
            </Card>
          </div>
        )}
      </div>{" "}
      <Modal show={showModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Konfirmasi Penghapusan</Modal.Title>
        </Modal.Header>
        <Modal.Body>Apakah Kamu Yakin akan Menghapus {click === true ? "Supplier" : "Barang"} ini ?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            className="fw-bold text-bg-success text-white align-items-center width-bt"
            // onClick={() => {
            //   deleteProducts();
            //   setTimeout(() => {
            //     navigate("/");
            //   }, 1000);
            //   window.scrollTo({
            //     top: 0,
            //     left: 0,
            //     behavior: "smooth",
            //   });
            // }}
          >
            Iya
          </Button>
          <Button variant="danger" className="fw-bold text-bg-danger text-white" onClick={handleCloseModal}>
            Tidak
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </>
  );
}

export default Dashboard;
