import React from "react";
import List from "./List";

const Mahasiswa = (props) => {
    return(
        <div>
            <li className="list-group-item">
                <List title="NIM" value={props.nim} />
                <List title="Nama" value={props.nama} />
                <List title="Alamat" value={props.alamat} />
                <List title="No. HP" value={props.hp} />
                <List title="Angkatan" value={props.angkatan} />
                <List title="Status" value={props.status} />
                <List title="Date" value={props.date} />
                
                <button className="btn btn-sm btn-warning" onClick={() => props.hapus(props.nim)}>Hapus</button>
            </li>
        </div>
    )
}

export default Mahasiswa;