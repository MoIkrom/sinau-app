/* eslint-disable no-unused-vars */
import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../../css/Table.css";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function Tables(props) {
  return (
    <>
      <Table striped bordered hover>
        <tbody>
          <tr className="font">
            <td>{props.no}</td>
            <td>{props.nama_Barang}</td>
            <td>{props.stock}</td>
            <td>{props.harga}</td>
            <td>{props.nama_spl}</td>
            <td>{props.alamat_spl}</td>
            <td>{props.telp_spl}</td>
            <td>
              <div className="d-flex flex-row gap-2 font">
                <Button
                  onClick={() => {
                    props.remove(props.id);
                    props.modal(props.modals);
                  }}
                >
                  Hapus
                </Button>{" "}
                <Button
                  onClick={() => {
                    props.navigates(props.modals);
                  }}
                >
                  Update
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Tables;
