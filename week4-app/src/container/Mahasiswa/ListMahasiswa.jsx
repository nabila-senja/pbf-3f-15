import React, { Component } from "react";
// import './Mahasiswa.css';
import Mahasiswa from "../../component/Mahasiswa/Mahasiswa";

class ListMahasiswa extends Component {
  state = {
    listMahasiswa: [],
    insertMahasiswa: {
      id: "",
      nim: "",
      nama: "",
      alamat: "",
      hp: "",
      angkatan: "",
      status: "",
      date: ""
    },
  };


  ambilDataDariServerAPI = () => {
    fetch('http://localhost:3004/mahasiswa')
      .then(response => response.json())
      .then(jsonHasilAmbilDariAPI => {
        this.setState({
          listMahasiswa: jsonHasilAmbilDariAPI
        })
      })
  }


  componentDidMount() {
    this.ambilDataDariServerAPI()
  }

  handleHapusMahasiswa = (data) => {
    fetch(`http://localhost:3004/mahasiswa/${data}`, { method: "DELETE" })
      .then(
        (res) => this.ambilDataDariServerAPI()
      );
  }

  handleTambahMahasiswa = (event) => {
    let formInsertMahasiswa = { ...this.state.insertMahasiswa };
    let timestamp = new Date().getTime();
    formInsertMahasiswa['id'] = formInsertMahasiswa.nim
    formInsertMahasiswa[event.target.name] = event.target.value;
    this.setState({
      insertMahasiswa: formInsertMahasiswa
    })
  }

  handleTombolSimpan = () => {
    fetch('http://localhost:3004/mahasiswa', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.insertMahasiswa)
    })
      .then((Response) => {
        this.ambilDataDariServerAPI()
      })
  }

  render() {
    return (
      <>
        <div className='row g-3'>
          <h3>Form Input Mahasiswa</h3>
          <div className="card-body">
            <div className='col-md-6'>
              <label htmlFor='nim' className='form-label'>NIM</label>
              <input type='number' className='form-control' id='nim' name='nim' onChange={this.handleTambahMahasiswa} />
            </div>
            <div className='col-md-6'>
              <label htmlFor='nama' className='form-label'>Nama</label>
              <input type='text' className='form-control' id='nama' name='nama' onChange={this.handleTambahMahasiswa} />
            </div>
            <div className='col-md-12'>
              <label htmlFor='alamat' className='form-label'>Alamat</label>
              <textarea className='form-control' id='alamat' name='alamat' onChange={this.handleTambahMahasiswa}></textarea>
            </div>
            <div className='col-md-4'>
              <label htmlFor='hp' className='form-label'>No. Handphone</label>
              <input type='text' className='form-control' id='hp' name='hp' onChange={this.handleTambahMahasiswa} />
            </div>
            <div className='col-md-4'>
              <label htmlFor='angkatan' className='form-label'>Angkatan</label>
              <input type='number' className='form-control' id='angkatan' name='angkatan' onChange={this.handleTambahMahasiswa} />
            </div>
            <div className='col-md-4'>
              <label htmlFor='status' className='form-label'>Status</label>
              <select id='status' name='status' className='form-select' onChange={this.handleTambahMahasiswa} defaultValue='{DEFAULT}'>
                <option value="DEFAULT">Choose...</option>
                <option value='aktif'>Aktif</option>
                <option value='cuti'>Cuti</option>
                <option value='lulus'>Lulus</option>
              </select>
            </div>
            <div className='col-md-4'>
              <label htmlFor='date' className='form-label'>Time</label>
              <input type='date' className='form-control' id='date' name='date' onChange={this.handleTambahMahasiswa} />
            </div>
            <div>
              <br />
              <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
            </div>

          </div>
        </div>
        <hr />
        <center>
          <h5>Data Mahasiswa</h5>
        </center>
        <div className='row g-3'>
          {
            this.state.listMahasiswa.map(mahasiswa => {
              return <Mahasiswa
                key={mahasiswa.id}
                nim={mahasiswa.nim}
                nama={mahasiswa.nama}
                alamat={mahasiswa.alamat}
                hp={mahasiswa.hp}
                angkatan={mahasiswa.angkatan}
                status={mahasiswa.status}
                date={mahasiswa.date}
                hapus={this.handleHapusMahasiswa} />
            })
          }
        </div>
      </>
    )
  }
}
export default ListMahasiswa;