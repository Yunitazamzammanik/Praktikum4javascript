function login() {
    var username = "yunitamanik"
    var password = "05062002nita"

    var username_1 = document.getElementById('username').value;
    var password_1 = document.getElementById('password').value;

    if(username_1 == username && password_1 == password){
        alert("success")
        window.location.href="berhasil.html"
        document.getElementById('success').innerHTML = 'Login berhasil'
    }
    else{
        document.getElementById('success').innerHTML = 'Login Invalid'
    }

}