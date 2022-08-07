let productDetails = JSON.parse(localStorage.getItem("productid")),
    cont = document.querySelector('.product');
//  from packets type color

cont.innerHTML = `
            <div class="product__img d-flex-wrap">
            <img src="../${productDetails.photo}" alt="${productDetails.alt}">
            <h2 class="product__title">${productDetails.title}</h2>
            </div>
            <div class="product__desc d-flex-wrap">
            <div class="product__info font-h3">
                <h2>Product Description</h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias omnis libero minus, quis, explicabo cumque voluptas vitae quisquam exercitationem perferendis tempora, accusamus corrupti. Veritatis consectetur laborum voluptate ipsam delectus et!
            </div>
            <div class="product__advantages">
                <h2>Product Info</h2>
                <li>${productDetails.class}</li>
                <li>${productDetails.price}$</li>
                <li>${productDetails.packets?productDetails.packets:''}${productDetails.color?productDetails.color:''}${productDetails.g?productDetails.g:''}</li>
                <li>${productDetails.from?productDetails.from:''}${productDetails.type?productDetails.type:''}</li>
            </div>
            </div>
    `