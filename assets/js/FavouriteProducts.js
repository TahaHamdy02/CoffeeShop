let FavouritProducts = localStorage.getItem('favouriteProduct'),
    favouriteContent = document.querySelector('.favourite__products'),
    emptycart = document.querySelector('.empty__card'),
    lengthall = document.querySelector('#all');


if (FavouritProducts) {
    lengthall.innerHTML = JSON.parse(localStorage.getItem('favouriteProduct')).length
    let items = JSON.parse(FavouritProducts)
    drawfav(items);
};

function drawfav(al = []) {
    let num = JSON.parse(localStorage.getItem("favouriteProduct"));
    if (num.length === 0) {
        emptycart.style.display = 'block';
    } else { emptycart.style.display = 'none'; }
    let favproducts = JSON.parse(localStorage.getItem('favouriteProduct')) || al
    let favCard = favproducts.map((f) => {
        return `
        <div class="fav__card">
        <div class="main__icon">
        <span onclick="removefav(${f.id})"><i class="uil uil-multiply"></i></span>
        <span onclick="productfav(${f.id})"><i class="uil uil-angle-double-right"></i></span>
        </div>
        <div class="fav__img"><img src="../${f.photo}" alt="${f.alt}" draggable="false"></div>
        <div class="fav__desc"><h2 class="font-h2">${f.title}</h2></div>
        </div>
        `
    }).join('');
    favouriteContent.innerHTML = favCard;
}
// drawfav();

function removefav(id) {
    if (JSON.parse(localStorage.getItem('favouriteProduct')).length !== 0)
        emptycart.style.display = "none"

    let fProduct = localStorage.getItem('favouriteProduct');
    if (fProduct) {
        let all = JSON.parse(fProduct);
        let Favfiltereditems = all.filter((item) => item.id !== id);
        localStorage.setItem('favouriteProduct', JSON.stringify(Favfiltereditems));
        drawfav(Favfiltereditems);
        lengthall.innerHTML = JSON.parse(localStorage.getItem('favouriteProduct')).length
    }
}

function productfav(id) {
    let favproducts = JSON.parse(localStorage.getItem('favouriteProduct'))
    let fav = favproducts.find((item) => item.id === id);
    localStorage.setItem('productid', JSON.stringify(fav))
    window.location = "ProductPage.html"
}