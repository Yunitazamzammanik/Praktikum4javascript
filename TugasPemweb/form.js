function validasi(){
    let nama = document.getElementById('nama').value;
    let email = document.getElementById('email').value;
    let waktu = document.getElementById('waktu').value;
    let destinasi = document.getElementById('destinasi').value;
    let tiket = document.getElementById('tiket').value;

    if (nama == "" || nama.leght >30) {
      alert("nama tidak boleh kosong");
    }else if (email == "") {
      alert("email tidak boleh kosong");
    }else if (waktu == "") {
      alert("waktu tidak boleh kosong");
    }else if (destinasi == "") {
      alert("tujuan tidak boleh kosong");
    }else if (tiket == "") {
      alert("tiket tidak boleh kosong");
    }
    else{
      document.getElementById('namapenumpang').innerHTML = 'Nama Penumpang :'+ nama + '<br>'
      document.getElementById('emailpenumpang').innerHTML = 'Email Penumpang :' +email+'<br>'
      document.getElementById('waktukeberangkatan').innerHTML = 'Waktu Keberangkatan :' +waktu+'<br>'
      document.getElementById('tujuanpenumpang').innerHTML = 'Tujuan  :' +destinasi+'<br>'
      document.getElementById('jumlahtiket').innerHTML = 'Jumlah Tiket :' +tiket+ '<br>'
    }
    
  }
