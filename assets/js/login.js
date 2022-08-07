let form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
    let yourname = document.querySelector('#floatingInputUsername'),
        email = document.querySelector('#floatingInputEmail'),
        password = document.querySelector('#floatingPassword'),
        username = localStorage.getItem('username'),
        useremail = localStorage.getItem('email'),
        userpassword = localStorage.getItem('password');

    if (yourname.value != username) {
        e.preventDefault();
        yourname.setCustomValidity("cant find user");
    }
    if (email.value != useremail) {
        e.preventDefault();
        email.setCustomValidity("cant find this email");
    }
    if (password.value != userpassword) {
        e.preventDefault()
        password.setCustomValidity("wrong password");
    }
})
function ShowPassword() {
    let password = document.querySelector('#floatingPassword');

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}
