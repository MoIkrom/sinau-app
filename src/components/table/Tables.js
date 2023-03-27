/* eslint-disable no-unused-vars */
import React from "react";
import Table from "react-bootstrap/Table";
import "../../css/Table.css";
import edit from "../../assets/edit.png";
import del from "../../assets/trash.png";

function Tables(props) {
  return (
    <>
      <Table striped bordered hover>
        <tbody className="d">
          <tr className="font">
            <td className="col-1 pt-3 ft">{props.no}</td>
            <td className="col-5 col-md-4 pt-3 ft">{props.nama_Barang}</td>
            <td className="col-2 pt-3 ft">{props.stock}</td>
            <td className="col-6 col-md-3 pt-3 ft">{props.harga}</td>
            <td className="nm_spl-t pt-3 nonez">{props.nama_spl}</td>
            <td className="alm_spl-t pt-3 nonez">{props.alamat_spl}</td>
            <td className="tlp_spl-t pt-3 nonez">{props.telp_spl}</td>
            <td className="col-12 ft">
              <div className="d-flex flex-column flex-md-column flex-lg-row flex-xl-row gap-2 font ">
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
                  <p className=" hide">Hapus</p>
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
                  <p className="hide">Update</p>
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
