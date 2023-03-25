/* eslint-disable no-unused-vars */
import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../../css/Table.css";
import { useNavigate, useParams } from "react-router-dom";
import edit from "../../assets/edit.png";
import del from "../../assets/trash.png";

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
            <td className="notz">{props.no}</td>
            <td className="namts">{props.nama_spl}</td>
            <td className="alamts">{props.alamat}</td>
            <td className="tlpts">{props.no_Tlp}</td>
            <td className="akzzz">
              <div className="d-flex flex-row gap-3 align-items-center font justify-content-center ">
                <div className="d-flex align-items-center  flex-column gap-2 font aksz">
                  <img
                    src={del}
                    alt="#"
                    onClick={() => {
                      props.remove(props.id);
                      props.modal(props.modals);
                    }}
                    className="del cursor"
                  />
                  Hapus
                </div>
                <div className="d-flex flex-column align-items-center gap-2 cursor">
                  <img
                    src={edit}
                    alt="#"
                    onClick={() => {
                      props.navigates(props.modals);
                    }}
                    className="del"
                  />
                  Update
                </div>{" "}
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Tablesupplier;
