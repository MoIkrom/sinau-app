/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbars from "../../components/navbar/Navbar";
import profile from "../../assets/profile.png";
import "../../css/Dashboard.css";
import Tables from "../../components/table/Tables";
import axios from "axios";

function Dashboard() {
  const getProfileUser = () => {
    const token = localStorage.getItem("token");
    axios
      .get(`http://159.223.57.121:8090/users/find-by-username`, { Authorizations: token })
      .then((res) => {
        console.log(res);
        // setProfile(res.data.result.result[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const currentdate = new Date();
  const datetime = currentdate.getDate() + "-" + currentdate.getMonth() + "-" + currentdate.getFullYear();
  const clock = new Date(new Date()).toString().split(" ")[4];

  const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const day = daysOfWeek[currentdate.getDay()];

  useEffect(() => {
    getProfileUser();
  }, []);
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  return (
    <>
      <Navbars />
      <div className="container d-flex flex-row gap-5">
        <div className="d-flex flex-column gap-5">
          <Card style={{ width: "18rem" }}>
            <Card.Header className="mx-0 d-flex justify-content-center" style={{ width: "18rem" }}>
              <Card.Img className="img-profile mt-3 " variant="top" src={profile} />
            </Card.Header>
            <Card.Body className="d-flex justify-content-center bgColor">
              <Card.Text>{username} </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Header className="mx-0 d-flex justify-content-center bgColor" style={{ width: "18rem" }}>
              <Card.Text className="d-flex justify-content-center ">Menu </Card.Text>
            </Card.Header>
            <Card.Body className="border">
              <Card.Text>Barang </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Text>Supplier </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Header className="mx-0 d-flex align-items-center justify-content-center gap-1 bgColor" style={{ width: "18rem" }}>
              <Card.Text className="d-flex justify-content-center mb-0">Online</Card.Text>
              <canvas className="canvas"></canvas>
            </Card.Header>
            <Card.Body className="d-flex pb-0 flex-row justify-content-start  ">
              <Card.Text className="width-ol">Hari Online</Card.Text>
              <Card.Text>
                {": " + day + " ,"} {datetime}
              </Card.Text>
            </Card.Body>
            <Card.Body className="d-flex py-0 flex-row justify-content-start  ">
              <Card.Text className="width-ol">Waktu Online </Card.Text>
              <Card.Text> {": " + clock}</Card.Text>
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
