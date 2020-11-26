function setHarga(set) {
    nilai = document.getElementById("nilai").value 
    if ( set == "Ringgit"){
        var hasil = nilai * 874
    } else if(set == "Yen") {
        var hasil = nilai * 120
    } else if(set == "DollarUS") {
        var hasil = nilai * 9.915
    } else if(set == "DollarSingapore") {
        var hasil = nilai * 13.472
    } else if(set == "Euro") {
        var hasil = nilai * 15.888
    } else if(set == "RiyalAS") {
        var hasil = nilai * 3.592
    }

    document.getElementById("hasil").value = hasil 
}