let ProductInCart = localStorage.getItem('ProductInCart'),
    emptycart = document.querySelector('.empty__card'),
    allproducts = document.querySelector('.allproducts'),
    lengthall = document.querySelector('#all');

if (ProductInCart) {
    lengthall.innerHTML = JSON.parse(localStorage.getItem('ProductInCart')).length
    let items = JSON.parse(ProductInCart)
    allproductsincart(items);
};

function allproductsincart(al = []) {
    let num = JSON.parse(localStorage.getItem("ProductInCart"));
    if (num.length === 0)
        emptycart.style.display = 'block';
    let products = JSON.parse(localStorage.getItem('ProductInCart')) || al
    let cartcontent = products.map((item) => {
        return `
        <div class="main__card all ${item.class}">
        <div class="main__icon">
            <span onclick="removeformcart(${item.id})"><i class="uil uil-multiply"></i></span>
            <span class="qty">${item.qty}</span>
        </div>
        <div class="main__image">
            <img src="../${item.photo}" alt="${item.alt}">
            </div>
            <div class="main__desc">
                <h2 class="main__title font-h2">${item.title}
                </h2>
                <p class="main__price font-h2">${item.totalprice}$</p>
            </div>
        </div>
    </div>
    `
    }).join('');
    allproducts.innerHTML = cartcontent
}

function removeformcart(id) {
    if (JSON.parse(localStorage.getItem('ProductInCart')).length !== 0)
        emptycart.style.display = "none"
    let productsInCart = localStorage.getItem('ProductInCart');
    if (productsInCart) {
        let all = JSON.parse(productsInCart);
        let filtereditems = all.filter((item) => item.id !== id);
        localStorage.setItem('ProductInCart', JSON.stringify(filtereditems));
        allproductsincart(filtereditems);
        lengthall.innerHTML = JSON.parse(localStorage.getItem('ProductInCart')).length
    }
}