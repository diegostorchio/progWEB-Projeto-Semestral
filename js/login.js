function login() {
    let email = document.getElementById("floatingInput").value
    let password = document.getElementById("floatingPassword").value
    if (email == "" || password == "") {
        alert("Email ou Senha inválidos!");
    } else {
        window.location.replace("../index.html");
    }
}