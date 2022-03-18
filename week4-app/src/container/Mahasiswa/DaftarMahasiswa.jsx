<div className='row g-3'>
{
  this.state.ListMahasiswa.map(mahasiswa => {
    return <Mahasiswa
      key={mahasiswa.nim}
      nim={mahasiswa.nim}
      nama={mahasiswa.nama}
      alamat={mahasiswa.alamat}
      hp={mahasiswa.hp}
      angkatan={mahasiswa.angkatan}
      status={mahasiswa.status}
      deleteMahasiswa={this.handleHapusMahasiswa} />
  })
}
</div>