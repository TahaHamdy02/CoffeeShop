let name = document.querySelector('#card__user__name'),
    FakeUser = document.querySelector('#fakeuser__photo'),
    RealUser = document.querySelector('#realuser__photo'),
    email = document.querySelector('#card__user__email'),
    phoneNumber = document.querySelector('#card__user__phonenumber'),
    region = document.querySelector('#card__user__region'),
    Userphoto = localStorage.getItem('recent-image'),
    UserName = localStorage.getItem("username"),
    UserPhoneNumber = localStorage.getItem("NewPhoneNumber"),
    UserEmail = localStorage.getItem("email"),
    UserRegion = localStorage.getItem("NewRegion");

function userdata() {
    if (Userphoto) {
        FakeUser.style.display = 'none'
        RealUser.style.display = 'block'
        RealUser.setAttribute('src', Userphoto);
    } else {
        FakeUser.style.display = 'block'
        RealUser.style.display = 'none'
    }
    name.innerHTML = UserName
    email.innerHTML = UserEmail
    phoneNumber.innerHTML = UserPhoneNumber
    region.innerHTML = UserRegion
}
userdata();
