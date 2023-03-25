/* eslint-disable no-unused-vars */
import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../../css/Table.css";
import edit from "../../assets/edit.png";
import del from "../../assets/trash.png";

function Tables(props) {
  return (
    <>
      <Table striped bordered hover>
        <tbody>
          <tr className="font">
            <td className="no-t">{props.no}</td>
            <td className="name_br-t">{props.nama_Barang}</td>
            <td className="stck-t">{props.stock}</td>
            <td className="hrg-t">{props.harga}</td>
            <td className="nm_spl-t">{props.nama_spl}</td>
            <td className="alm_spl-t">{props.alamat_spl}</td>
            <td className="tlp_spl-t">{props.telp_spl}</td>
            <td>
              <div className="d-flex flex-row gap-2 font ">
                <div className="d-flex flex-column align-items-center gap-2 ">
                  <img
                    src={del}
                    alt="#"
                    onClick={() => {
                      props.remove(props.id);
                      props.modal(props.id);
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
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Tables;
