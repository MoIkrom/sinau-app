import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbars from "../../components/navbar/Navbar";
import profile from "../../assets/profile.png";
import "../../css/Dashboard.css";
import Tables from "../../components/table/Tables";

function Dashboard() {
  return (
    <>
      <Navbars />
      <div className="container d-flex flex-row gap-5">
        <div className="d-flex flex-column gap-5">
          <Card style={{ width: "18rem" }}>
            <Card.Header
              className="mx-0 d-flex justify-content-center"
              style={{ width: "18rem" }}
            >
              <Card.Img
                className="img-profile mt-3 "
                variant="top"
                src={profile}
              />
            </Card.Header>
            <Card.Body className="d-flex justify-content-center bgColor">
              <Card.Text>Albar </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Header
              className="mx-0 d-flex justify-content-center bgColor"
              style={{ width: "18rem" }}
            >
              <Card.Text className="d-flex justify-content-center ">
                Menu{" "}
              </Card.Text>
            </Card.Header>
            <Card.Body>
              <Card.Text>Barang </Card.Text>
              <Card.Text>Supplier </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Header
              className="mx-0 d-flex justify-content-center bgColor"
              style={{ width: "18rem" }}
            >
              <Card.Text className="d-flex justify-content-center ">
                Online
              </Card.Text>
            </Card.Header>
            <Card.Body className="d-flex flex-column justify-content-center name">
              <Card.Text>Hari Online </Card.Text>
              <Card.Text>Wantu Online </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="widths">
            <Card.Header className="mx-0 d-flex justify-content-start bgColor widths">
              <Card.Text>Dashboard </Card.Text>
            </Card.Header>
            <Card.Body className="d-flex align-items-center justify-content-between">
              <Card.Text>Barang </Card.Text>
              <Button>Tambah Barang</Button>
            </Card.Body>
            <div className="container">
              <Tables />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
