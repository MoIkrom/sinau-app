import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function Tables() {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Barang</th>
            <th>Stock </th>
            <th>Harga</th>
            <th>Nama Supplier</th>
            <th>Alamat Supplier</th>
            <th>No Telp Supplier</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <div className="d-flex flex-row gap-2">
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
