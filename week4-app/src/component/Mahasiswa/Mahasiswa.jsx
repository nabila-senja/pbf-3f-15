import React from "react";
import List from "./List";

const Mahasiswa = (props) => {
    return(
        <div>
            <li className="list-group-item">
                <List title="NIM" value={props.data.nim} />
                <List title="Nama" value={props.data.nama} />
                <List title="Alamat" value={props.data.alamat} />
                <List title="No. HP" value={props.data.hp} />
                <List title="Angkatan" value={props.data.angkatan} />
                <List title="Status" value={props.data.status} />
                <button className="btn btn-sm btn-warning" onClick={() => props.hapus(props.data.nim)}>Hapus</button>
            </li>
        </div>
    )
}

export default Mahasiswa;