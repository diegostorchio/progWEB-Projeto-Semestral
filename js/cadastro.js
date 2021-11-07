function signup() {
    let name = document.getElementById("name").value
    let lastName = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let address = document.getElementById("address").value
    let city = document.getElementById("city").value
    let state = document.getElementById("state").value
    let zipCode = document.getElementById("zipCode").value

    if (name == "" || lastName == "" || email == "" || password == "" ||
        address == "" || city == "" || state == "" || zipCode == "") {
        alert("Todos os campos devem ser preenchidos!");
    } else {
        window.location.replace("login.html");
    }
}