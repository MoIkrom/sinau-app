/* eslint-disable no-unused-vars */
import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../../css/Table.css";

import axios from "axios";

function Tables(props) {
  const getProductAll = () => {
    const token = localStorage.getItem("token");
    axios
      .get(`http://159.223.57.121:8090/users/find-by-username`, { headers: { authorizations: token } })
      .then((res) => {
        console.log(res);
        // setProfile(res.data.result.result[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Table striped bordered hover>
        <tbody>
          <tr className="font">
            <td>{props.no}</td>
            <td>{props.nama_Barang}</td>
            <td>{props.stock}</td>
            <td>{props.harga}</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <div className="d-flex flex-row gap-2 font">
                <Button>Hapus</Button> <Button>Update</Button>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Tables;
