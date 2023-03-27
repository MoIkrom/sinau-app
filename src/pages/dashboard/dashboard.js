/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbars from "../../components/navbar/Navbar_Dashboard";
import Table from "react-bootstrap/Table";
import Footer from "../../components/footer/Footer";
import profile from "../../assets/profile.png";
import "../../css/Dashboard.css";
import Tables from "../../components/table/Tables";
import Tablesupplier from "../../components/table/TableSupplier";
import { getProfile, getProduct, getSupplier, deleteProduct, deleteSupplier } from "../../API/API";
import { useNavigate, Navigate, useParams } from "react-router-dom";
import { TabTitle } from "../../utils/title";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-bootstrap/Modal";
import Pagination from "react-bootstrap/Pagination";
import axios from "axios";

function Dashboard() {
  TabTitle("Dashboard - Sinau App");
  const params = useParams();
  const navigate = useNavigate();
  const toNewProduct = () => navigate("/new-product");
  const toNewSupplier = () => navigate("/new-supplier");
  const [username, setusername] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState([]);
  const [supplierz, setSupplierz] = useState([]);
  const [loading, setLoading] = useState(false);
  const [idProduct, setIdProduct] = useState("");
  const [dropmodal, setDropmodal] = useState(false);
  const [idSupplier, setIdSupplier] = useState("");
  const [totalpagesB, setTotalPagesB] = useState("");
  const [pagesB, setPagesB] = useState(1);
  const [totalDatasB, setTotalDatasB] = useState("");
  const [pageSp, setPageSp] = useState(1);
  const [totalpageSp, setTotalPageSp] = useState("");
  const [totalDatasSp, setTotalDatasSp] = useState("");

  const [click, setClick] = useState(false);

  const deleteSuppliers = () => {
    setLoading(true);
    const idDelete = idSupplier;
    deleteSupplier(idDelete)
      .then((res) => {
        toast.success("Success Delete Supplier ", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 700,
        });
        setLoading(false);
        setDropmodal(true);
        setTimeout(() => window.location.reload(), 1000);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Cannot Delete Supplier ", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });
        setLoading(false);
      });
  };
  const deleteProducts = () => {
    setLoading(true);
    const idDelete = idProduct;
    deleteProduct(idDelete)
      .then((res) => {
        toast.success("Delete Product Success", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 700,
        });
        setLoading(false);
        setDropmodal(true);
        setTimeout(() => window.location.reload(), 1000);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Cannot Delete Product ", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1000,
        });
        setLoading(false);
      });
  };

  const getAllProduct = () => {
    setLoading(true);
    axios
      .get(`https://backend-api-2023.vercel.app/api/v1/product?page=${pagesB}&limit=5`)
      .then((res) => {
        setProduct(res.data.data);
        // console.log(res.data.data);
        setTotalPagesB(res.data.pagination.totalPage);
        setPagesB(res.data.pagination.page);
        setTotalDatasB(res.data.pagination.totalData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getAllSupplier = () => {
    setLoading(true);
    axios
      .get(`https://backend-api-2023.vercel.app/api/v1/supplier?page=${pageSp}&limit=5`)
      .then((res) => {
        setSupplierz(res.data.data);
        setTotalPageSp(res.data.pagination.totalPage);
        setPageSp(res.data.pagination.page);
        setTotalDatasSp(res.data.pagination.totalData);
        console.log(res.data.pagination);
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
  }, [pageSp, pagesB]);
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/" replace={true} state={{ msg: "You have to Login first", isRedirected: true }} />;
  return (
    <>
      <Navbars />
      <div className=" container row d-flex flex-row flex-lg-row justify-content-center resp align-items-center gap-5 gap-lg-0 gap-md-5 pt-5 my-md-auto m-0 mb-5">
        <div className="left d-md-flex flex-md-row justify-content-center align-items-center col-12 col-lg-4 d-flex flex-md-row flex-column flex-lg-column gap-5 ">
          <div className="d-md-flex flex-md-column gap-md-5 justify-content-center align-items-center ">
            <Card className="col-md-6" style={{ width: "18rem" }}>
              <Card.Header className="mx-0 d-flex justify-content-center" style={{ width: "18rem" }}>
                <Card.Img className="img-profile mt-3 " variant="top" src={profile} />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center bgColor">
                <Card.Text className="font">{username} </Card.Text>
              </Card.Body>
            </Card>

            <Card className="col-md-12" style={{ width: "18rem" }}>
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
          </div>
          <div className="justify-content-start">
            {" "}
            <Card className="col-md-6" style={{ width: "18rem", height: "9.7rem" }}>
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
        </div>

        <div className=" d-flex col-12 col-md-12 col-lg-8 ps-md-4 ">
          <Card className="col-12 ">
            <Card.Header className="col-12 mx-0 d-flex justify-content-start bgColor ">
              <Card.Text className="font f-18">Dashboard </Card.Text>
            </Card.Header>
            <div className="heith">
              <Card.Body className="d-flex align-items-center justify-content-between ">
                <Card.Text className="font f-22">{click === true ? "Supplier" : "Barang"} </Card.Text>
                <Button className="font" onClick={click === true ? toNewSupplier : toNewProduct}>
                  {click === true ? " Tambah Supplier" : " Tambah Barang"}
                </Button>
              </Card.Body>

              {click === true ? (
                // start Table Supplier
                <div className="container">
                  <Table striped bordered hover>
                    <thead>
                      <tr className="font">
                        <th className="nos">No</th>
                        <th className="nams">Nama Supplier</th>
                        <th className="alms">Alamat </th>
                        <th className="notlps">No Telepon</th>
                        <th className="d-flex align-items-center justify-content-center aks">Aksi</th>
                      </tr>
                    </thead>
                  </Table>
                  {supplierz.length > 0 ? (
                    supplierz.map((suppliers, idx) => {
                      return (
                        <Tablesupplier
                          key={suppliers.id}
                          no={idx + 1 + pageSp * 5 - 5}
                          nama_spl={suppliers.nama_Supplier}
                          alamat={suppliers.alamat}
                          no_Tlp={suppliers.noTelp}
                          id={suppliers.id}
                          modal={handleShowModal}
                          remove={() => {
                            setIdSupplier(suppliers.id);
                          }}
                          navigates={() => navigate(`/update-supplier/${suppliers.id}`)}
                        />
                      );
                    })
                  ) : (
                    <div className="d-flex justify-content-center align-items-center">
                      <p className="empty">{loading === true ? "" : "Belum Ada Supplier yang di Input"}</p>
                    </div>
                  )}
                </div>
              ) : (
                // End Table Supplier

                // Start Table Barang

                <div className="container">
                  <Table striped bordered hover>
                    <thead className="col-6 justify-content-between align-items-center">
                      <tr c>
                        <th className="col-1 col-lg-1 ft">No</th>
                        <th className="col-5 col-md-3 col-lg-2 ft">Nama Barang</th>
                        <th className="col-2 col-md-1 col-lg-1 ft">Stock </th>
                        <th className="col-6 col-md-3 col-lg-2 ft">Harga</th>
                        <th className="col-12 ft col-md-2 nonez">Nama Supplier</th>
                        <th className="col-12 ft col-md-2 nonez">Alamat Supplier</th>
                        <th className="col-12 ft col-md-2 nonez">No Telp Supplier</th>
                        <th className="col-12 ft d-flex align-items-center justify-content-center">Aksi</th>
                      </tr>
                    </thead>
                  </Table>
                  {product.length > 0 ? (
                    product.map((products, idx) => {
                      return (
                        <Tables
                          key={products.id}
                          no={idx + 1 + pagesB * 5 - 5}
                          nama_Barang={products.nama_Barang}
                          harga={`${"Rp"} ${costing(products.harga)}`}
                          stock={products.stock}
                          nama_spl={products.supplier.nama_Supplier}
                          alamat_spl={products.supplier.alamat}
                          telp_spl={products.supplier.noTelp}
                          remove={() => {
                            setIdProduct(products.id);
                          }}
                          id={products.id}
                          modal={handleShowModal}
                          navigates={() => {
                            navigate(`/update-product/${products.id}`);
                          }}
                        />
                      );
                    })
                  ) : (
                    <div className="d-flex justify-content-center align-items-center">
                      <p className="empty">Belum Ada Barang yang di Input</p>
                    </div>
                  )}
                </div>

                // End Table Barang
              )}
              {product.length < 1 ? (
                ""
              ) : click === true ? (
                <>
                  <Pagination className="d-flex justify-content-center align-items-center gap-3 ">
                    <Pagination.Prev
                      onClick={() => {
                        setPageSp(pageSp - 1);
                      }}
                      disabled={pageSp === 1 ? true : false}
                    />
                    <div className="d-flex justify-content-center align-items-center ">
                      Page {pageSp} of {totalpageSp}
                    </div>
                    <Pagination.Next
                      onClick={() => {
                        setPageSp(pageSp + 1);
                      }}
                      disabled={pageSp >= totalpageSp ? true : false}
                    />
                  </Pagination>
                </>
              ) : (
                <>
                  <Pagination className="d-flex justify-content-center align-items-center gap-3 ">
                    <Pagination.Prev
                      onClick={() => {
                        setPagesB(pagesB - 1);
                      }}
                      disabled={pagesB === 1 ? true : false}
                    />
                    <div className="d-flex justify-content-center align-items-center ">
                      Page {pagesB} of {totalpagesB}
                    </div>
                    <Pagination.Next
                      onClick={() => {
                        setPagesB(pagesB + 1);
                        console.log(pagesB);
                      }}
                      disabled={pagesB >= totalpagesB ? true : false}
                    />
                  </Pagination>
                </>
              )}
            </div>
          </Card>
        </div>
      </div>
      <Modal show={dropmodal === true ? showModal === false : showModal === true} onHide={handleCloseModal} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Konfirmasi Penghapusan</Modal.Title>
        </Modal.Header>
        <Modal.Body>Apakah Kamu Yakin akan Menghapus {click === true ? "Supplier" : "Barang"} ini ?</Modal.Body>
        <Modal.Footer>
          {loading === true ? (
            <p className="me-3 p-0 ">Proses Delete Data . . .</p>
          ) : (
            <>
              <Button
                variant="success"
                className="fw-bold text-bg-success text-white align-items-center width-bt"
                onClick={
                  click === true
                    ? () => {
                        deleteSuppliers();
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }
                    : () => {
                        deleteProducts();
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }
                }
              >
                Iya
              </Button>
              <Button variant="danger" className="fw-bold text-bg-danger text-white" onClick={handleCloseModal}>
                Tidak
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
      <Footer />
    </>
  );
}

export default Dashboard;
