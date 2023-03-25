/* eslint-disable no-unused-vars */
import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../../css/Table.css";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

function Tablesupplier(props) {
  const navigate = useNavigate();
  let params = useParams();
  // const toUpdate = navigate("/update-product");
  return (
    <>
      <Table striped bordered hover>
        <tbody>
          {params?.id}
          <tr className="font">
            <td>{props.no}</td>
            <td>{props.nama_spl}</td>
            <td>{props.alamat}</td>
            <td>{props.no_Tlp}</td>
            <td>
              <div className="d-flex flex-row gap-2 font">
                <Button
                  onClick={() => {
                    props.remove(props.id);
                    props.modal(props.modals);
                  }}
                >
                  Hapus
                </Button>
                <Button
                  onClick={() => {
                    props.navigates(props.id);
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

export default Tablesupplier;
