/* eslint-disable react-hooks/exhaustive-deps */
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
          <Card style={{ width: "18rem", height: "9.7rem" }}>
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
                      <thead>
                        <tr className="title-table">
                          <th className="no">No</th>
                          <th className="name_br">Nama Barang</th>
                          <th className="stck">Stock </th>
                          <th className="hrg">Harga</th>
                          <th className="nm_spl">Nama Supplier</th>
                          <th className="alm_spl">Alamat Supplier</th>
                          <th className="tlp_spl">No Telp Supplier</th>
                          <th className="d-flex align-items-center justify-content-center aksi">Aksi</th>
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
        )}
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
