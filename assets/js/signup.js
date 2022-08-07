/*============= set vars===============*/
let form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
    let name = document.querySelector('#floatingInputUsername'),
        email = document.querySelector('#floatingInputEmail'),
        password = document.querySelector('#floatingPassword'),
        confirm_password = document.querySelector('#floatingPasswordConfirm');
    if (password.value != confirm_password.value) {
        e.preventDefault();
        confirm_password.setCustomValidity("Passwords Dont Match");
    };
    if (name.value != '' && email.value != '' && password.value != '' && confirm_password.value != '' && password.value === confirm_password.value) {
        localStorage.setItem('username', name.value)
        localStorage.setItem('email', email.value)
        localStorage.setItem('password', password.value)
    }
})

function ShowPassword() {
    let password = document.querySelector('#floatingPassword'),
        confirm_password = document.querySelector('#floatingPasswordConfirm');
    if (password.type === "password" && confirm_password.type === "password") {
        password.type = "text";
        confirm_password.type = "text";
    } else {
        password.type = "password";
        confirm_password.type = "password";
    }
}











// if (name.value === '') { name.setCustomValidity("cant be empty") } else { name.setCustomValidity('') }
// if (email.value === '') { email.setCustomValidity("cant be empty") } else { email.setCustomValidity('') }
// if (password.value === '') { password.setCustomValidity("cant be empty") } else { password.setCustomValidity('') }