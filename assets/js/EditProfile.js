let ProfileForm = document.querySelector('.profile__form'),
    FakeImg = document.querySelector('.fake__img'), //none
    RealImg = document.querySelector('.real__img'), //block
    NewUserPhoto = document.querySelector('#edit__user__photo'), //value
    NewFirstName = document.querySelector('#firstname'), //value
    NewSurName = document.querySelector('#surname'), //value
    NewPhoneNumber = document.querySelector('#phoneNumber'), //value
    NewAddressLine1 = document.querySelector('#addressline1'), //value
    NewAddressLine2 = document.querySelector('#addressline2'), //value
    NewPostCode = document.querySelector('#postcode'), //value
    NewArea = document.querySelector('#Area'), //value
    NewEmail = document.querySelector('#Email'), //value
    NewCountry = document.querySelector('#country'), //value
    NewRegion = document.querySelector('#region'), //value
    NewPhotoPreview = document.querySelector('#new__user__photo__preivew');

NewUserPhoto.addEventListener('change', function() {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        FakeImg.style.display = 'none'
        RealImg.style.display = 'block'
        localStorage.setItem('recent-image', reader.result)
        NewPhotoPreview.setAttribute('src', reader.result);

    });
    reader.readAsDataURL(this.files[0])
});


ProfileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (NewRegion.value != '' || NewCountry.value != '' || NewEmail.value != '' || NewArea.value != '' || NewPostCode.value != '' || NewAddressLine2.value != '' || NewFirstName.value != '' || NewSurName.value != '' || NewPhoneNumber.value != '' || NewAddressLine1.value != '') {
        localStorage.setItem('username', NewFirstName.value);
        localStorage.setItem('surname', NewSurName.value)
        localStorage.setItem('NewPhoneNumber', NewPhoneNumber.value)
        localStorage.setItem('NewAddressLine1', NewAddressLine1.value)
        localStorage.setItem('NewAddressLine2', NewAddressLine2.value)
        localStorage.setItem('NewPostCode', NewPostCode.value)
        localStorage.setItem('NewArea', NewArea.value)
        localStorage.setItem('email', NewEmail.value)
        localStorage.setItem('country', NewCountry.value)
        localStorage.setItem('NewRegion', NewRegion.value)

    }
});