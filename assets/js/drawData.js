// VARS
// DRAW PRODUCTS DATA
// ADD TO CART
// ADD TO FAV
// SOLVE READD TO FAV
/* ===== SET VARS =======*/
let allproducts = document.querySelector('#products'),
    MenuContent = document.querySelector('.menu__contetnt'),
    badge = document.querySelector('.badge'),
    beansContent = document.querySelector('.beans__content'),
    instantContent = document.querySelector('.instant__content'),
    userchek = localStorage.getItem('username'),
    alladded = localStorage.getItem('ProductInCart') ? JSON.parse(localStorage.getItem('ProductInCart')) : [];

/*=============================== DRAW PRODUCTS DATA =============================*/

/* ========= DRAW MACHINES =========== */
function machinesmenu() {
    let card = Machines.map((M) => {
        return `
        <div class="main__card all ${M.class}">
        <div class="main__icon">
            <span onclick="addedmachine(${M.id})"><i class="uil uil-shopping-cart-alt"></i></span>
        </div>
        <div class="main__image macine__image">
            <img src="${M.photo}" alt="${M.alt}" draggable="false">
            <div class="main__desc">
            <span class="center-text">
                <a onclick="product(${M.id})" class="main__title font-h2 pointer">${M.title}
                </a>
                <p class="main__price font-h2">${M.price}$<span class="font-h3 discount">${M.secprice}</span></p>
                <span> 
                <svg onclick="favmachine(${M.id})" style="fill: ${M.liked==true?"red":""}" version="1.1" id="Capa_1" class="heart" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300.861 300.861" style="enable-background:new 0 0 300.861 300.861;" xml:space="preserve">
                <g>
                    <path d="M237.04,196.302h-7.547c-0.158,0-0.336-0.069-0.453-0.144v-7.856c0-5.607-4.193-10-9.547-10h-1.28
                        c-5.515,0-10.173,4.579-10.173,10l-0.003,8h-7.997c-5.421,0-10,4.658-10,10.173v1.28c0,5.354,4.393,9.547,10,9.547h7.856
                        c0.074,0.117,0.144,0.295,0.144,0.453v7.547c0,5.421,4.658,10,10.173,10h1.28c5.354,0,9.547-4.393,9.547-10v-7.456
                        c0.078-0.187,0.357-0.466,0.544-0.544h7.456c5.607,0,10-4.193,10-9.547v-1.28C247.04,200.961,242.461,196.302,237.04,196.302z"/>
                    <path d="M259.104,135.311c7.753-12.033,16.094-28.702,14.846-52.057c-1.014-18.942-9.034-36.729-22.584-50.086
                        c-13.727-13.531-31.641-20.983-50.441-20.983c-28.001,0-48.233,22.072-59.102,33.931c-1.528,1.667-3.301,3.601-4.618,4.898
                        c-1.061-1.123-2.405-2.654-3.577-3.989c-9.93-11.309-30.59-34.84-60.47-34.84c-18.8,0-36.713,7.452-50.44,20.983
                        C9.165,46.525,1.144,64.313,0.13,83.256c-1.01,18.899,3.82,35.341,15.662,53.309c9.393,14.255,33.99,42.081,59.814,67.668
                        c31.556,31.266,52.266,47.118,61.554,47.118c2.176,0,5.263-0.578,10.743-3.725c14.187,24.512,40.681,41.05,70.982,41.05
                        c45.201,0,81.975-36.773,81.975-81.975C300.861,176.109,284.005,149.395,259.104,135.311z M218.886,258.675
                        c-28.659,0-51.975-23.315-51.975-51.975c0-28.659,23.315-51.975,51.975-51.975s51.975,23.316,51.975,51.975
                        C270.861,235.36,247.545,258.675,218.886,258.675z"/>
                </g>      
                </svg>
                </span>
                </span>
                </div>
        </div>
    </div>
`
    }).join('')
    MenuContent.innerHTML = card;
}
machinesmenu();

/* ========= DRAW COFFE BEANS =========== */
function coffebeans() {
    let card = beans.map((b) => {
        return `
        <div class="main__card all ${b.class}">
        <div class="main__icon">
            <span onclick="addedbeans(${b.id})"><i class="uil uil-shopping-cart-alt"></i></span>
        </div>
        <div class="main__image">
            <img src="${b.photo}" alt="${b.alt}" draggable="false">
            <div class="main__rate d-flex">
                <i class="uil uil-star ${b.star1}"></i>
                <i class="uil uil-star ${b.star2}"></i>
                <i class="uil uil-star ${b.star3}"></i>
                <i class="uil uil-star ${b.star4}"></i>
                <i class="uil uil-star ${b.star5}"></i>
            </div>
            <div class="main__desc">
            <span class="center-text">
                <a onclick="product(${b.id})" class="main__title font-h2 pointer">${b.title}</a>
                    <p class="font-h3">${b.from}</p>
                    <p class="font-h3">${b.g}</p>
                <p class="main__price font-h2">${b.price}$<span class="font-h3 discount">${b.discount}$</span></p>
                <span> 
                <svg onclick="favbeans(${b.id})" style="fill: ${b.liked==true?"red":""}" version="1.1" id="Capa_1" class="heart" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300.861 300.861" style="enable-background:new 0 0 300.861 300.861;" xml:space="preserve">
                <g>
                    <path d="M237.04,196.302h-7.547c-0.158,0-0.336-0.069-0.453-0.144v-7.856c0-5.607-4.193-10-9.547-10h-1.28
                        c-5.515,0-10.173,4.579-10.173,10l-0.003,8h-7.997c-5.421,0-10,4.658-10,10.173v1.28c0,5.354,4.393,9.547,10,9.547h7.856
                        c0.074,0.117,0.144,0.295,0.144,0.453v7.547c0,5.421,4.658,10,10.173,10h1.28c5.354,0,9.547-4.393,9.547-10v-7.456
                        c0.078-0.187,0.357-0.466,0.544-0.544h7.456c5.607,0,10-4.193,10-9.547v-1.28C247.04,200.961,242.461,196.302,237.04,196.302z"/>
                    <path d="M259.104,135.311c7.753-12.033,16.094-28.702,14.846-52.057c-1.014-18.942-9.034-36.729-22.584-50.086
                        c-13.727-13.531-31.641-20.983-50.441-20.983c-28.001,0-48.233,22.072-59.102,33.931c-1.528,1.667-3.301,3.601-4.618,4.898
                        c-1.061-1.123-2.405-2.654-3.577-3.989c-9.93-11.309-30.59-34.84-60.47-34.84c-18.8,0-36.713,7.452-50.44,20.983
                        C9.165,46.525,1.144,64.313,0.13,83.256c-1.01,18.899,3.82,35.341,15.662,53.309c9.393,14.255,33.99,42.081,59.814,67.668
                        c31.556,31.266,52.266,47.118,61.554,47.118c2.176,0,5.263-0.578,10.743-3.725c14.187,24.512,40.681,41.05,70.982,41.05
                        c45.201,0,81.975-36.773,81.975-81.975C300.861,176.109,284.005,149.395,259.104,135.311z M218.886,258.675
                        c-28.659,0-51.975-23.315-51.975-51.975c0-28.659,23.315-51.975,51.975-51.975s51.975,23.316,51.975,51.975
                        C270.861,235.36,247.545,258.675,218.886,258.675z"/>
                </g>      
                </svg>
                </span>
                </span>
                </div>
        </div>
    </div>
    `
    }).join("");
    beansContent.innerHTML = card;
}
coffebeans()

/* ========= DRAW VIA INSTANT =========== */
function viainstant() {
    let card = instant.map((v) => {
        return `
        <div class="main__card all instant__card">
        <div class="main__icon">
            <span onclick="addedinstant(${v.id})"><i class="uil uil-shopping-cart-alt"></i></span>
        </div>
        <div class="main__image">
            <img src="${v.photo}" alt="${v.alt}" draggable="false">
            <div class="main__desc">
            <span class="center-text">
            <h2 onclick="product(${v.id})" class="main__title font-h2 pointer">${v.title}</h2>
                    <p class="font-h3">VIA®</p>
                <p class="main__price font-h2">${v.price}$<span class="font-h3 discount">${v.discount}$</span></p>
                </span>
                <span> 
                    <svg onclick="favinstant(${v.id})" style="fill: ${v.liked==true?"red":""}" version="1.1" id="Capa_1" class="heart" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300.861 300.861" style="enable-background:new 0 0 300.861 300.861;" xml:space="preserve">
                    <g>
                        <path d="M237.04,196.302h-7.547c-0.158,0-0.336-0.069-0.453-0.144v-7.856c0-5.607-4.193-10-9.547-10h-1.28
                            c-5.515,0-10.173,4.579-10.173,10l-0.003,8h-7.997c-5.421,0-10,4.658-10,10.173v1.28c0,5.354,4.393,9.547,10,9.547h7.856
                            c0.074,0.117,0.144,0.295,0.144,0.453v7.547c0,5.421,4.658,10,10.173,10h1.28c5.354,0,9.547-4.393,9.547-10v-7.456
                            c0.078-0.187,0.357-0.466,0.544-0.544h7.456c5.607,0,10-4.193,10-9.547v-1.28C247.04,200.961,242.461,196.302,237.04,196.302z"/>
                        <path d="M259.104,135.311c7.753-12.033,16.094-28.702,14.846-52.057c-1.014-18.942-9.034-36.729-22.584-50.086
                            c-13.727-13.531-31.641-20.983-50.441-20.983c-28.001,0-48.233,22.072-59.102,33.931c-1.528,1.667-3.301,3.601-4.618,4.898
                            c-1.061-1.123-2.405-2.654-3.577-3.989c-9.93-11.309-30.59-34.84-60.47-34.84c-18.8,0-36.713,7.452-50.44,20.983
                            C9.165,46.525,1.144,64.313,0.13,83.256c-1.01,18.899,3.82,35.341,15.662,53.309c9.393,14.255,33.99,42.081,59.814,67.668
                            c31.556,31.266,52.266,47.118,61.554,47.118c2.176,0,5.263-0.578,10.743-3.725c14.187,24.512,40.681,41.05,70.982,41.05
                            c45.201,0,81.975-36.773,81.975-81.975C300.861,176.109,284.005,149.395,259.104,135.311z M218.886,258.675
                            c-28.659,0-51.975-23.315-51.975-51.975c0-28.659,23.315-51.975,51.975-51.975s51.975,23.316,51.975,51.975
                            C270.861,235.36,247.545,258.675,218.886,258.675z"/>
                    </g>      
                    </svg>
                    </span>
                   
            </div>
        </div>
    </div>
        `
    }).join('');
    instantContent.innerHTML = card;
}
viainstant();

/*======== CART PRODUCTS LENGTH ============*/
if (alladded) {
    if (alladded.length === 0) {
        badge.style.display = "none";
    } else {
        badge.style.display = "block";
        badge.innerHTML = JSON.parse(localStorage.getItem('ProductInCart')).length;
    }
}
/*=============================== ADD TO CART =============================*/
// some return (true or false)
if (userchek) {
    /*======= ADD MACHINES TO CART ============*/
    function addedmachine(id) {
        let choosenmachine = Machines.find((item) => item.id === id);
        let item = alladded.some((i) => i.id === choosenmachine.id)
        if (item) {
            alladded = alladded.map(i => {
                if (i.id === choosenmachine.id) {
                    i.totalprice += i.price
                    i.qty += 1
                }
                return i
            })
        } else {
            alladded.push(choosenmachine)
        };
        localStorage.setItem('ProductInCart', JSON.stringify(alladded));
        badge.style.display = "block"
        badge.innerHTML = JSON.parse(localStorage.getItem('ProductInCart')).length
    };

    /*======= ADD BEANS TO CART ============*/
    function addedbeans(id) {
        let choosenbeans = beans.find((item) => item.id === id);
        let item = alladded.some((i) => i.id === choosenbeans.id)
        if (item) {
            alladded = alladded.map(i => {
                if (i.id === choosenbeans.id) {
                    i.qty += 1
                    i.totalprice += i.price
                }
                return i
            })
        } else {
            alladded.push(choosenbeans)
        };
        localStorage.setItem('ProductInCart', JSON.stringify(alladded));
        badge.style.display = "block"
        badge.innerHTML = JSON.parse(localStorage.getItem('ProductInCart')).length
    }

    /*======= ADD VIA INSTANT TO CART ============*/
    function addedinstant(id) {
        let cooseninstant = instant.find((item) => item.id === id);
        let item = alladded.some((i) => i.id === cooseninstant.id);
        if (item) {
            alladded = alladded.map(i => {
                if (i.id === cooseninstant.id) {
                    i.qty += 1;
                    i.totalprice += i.price
                }
                return i
            })
        } else {
            alladded.push(cooseninstant)
        }
        localStorage.setItem('ProductInCart', JSON.stringify(alladded));
        badge.style.display = "block"
        badge.innerHTML = JSON.parse(localStorage.getItem('ProductInCart')).length
    }
} else {
    window.location = "assets/login.html"
}

/*=============================== ADD TO FAVOURITE  =============================*/
let favouriteProduct = localStorage.getItem('favouriteProduct') ? JSON.parse(localStorage.getItem('favouriteProduct')) : [];
if (userchek) {
    /*======= ADD MACHINES TO FAV ============*/
    function favmachine(id) {
        let choosenmachine = Machines.find((item) => item.id === id);
        choosenmachine.liked = true
        favouriteProduct = [...favouriteProduct, choosenmachine]
        let unique2 = uniqeproduct(favouriteProduct, "id")
        localStorage.setItem('favouriteProduct', JSON.stringify(unique2));
        Machines.map((item) => {
            if (item.id === choosenmachine.id) {
                item.liked = true
            }
        })
        localStorage.setItem('fav', JSON.stringify(Machines))
        machinesmenu(Machines)
    }

    /*======= ADD BEANS TO FAV ============*/
    function favbeans(id) {
        let choosenbeans = beans.find((item) => item.id === id);
        choosenbeans.liked = true
        favouriteProduct = [...favouriteProduct, choosenbeans]
        let unique2 = uniqeproduct(favouriteProduct, "id")
        localStorage.setItem('favouriteProduct', JSON.stringify(unique2));
        beans.map((item) => {
            if (item.id === choosenbeans.id) {
                item.liked = true
            }
        })
        localStorage.setItem('fav', JSON.stringify(beans))
        coffebeans(beans)
    }

    /*======= ADD VIA INSTANT TO FAV ============*/
    function favinstant(id) {
        let chooseninstant = instant.find((item) => item.id === id);
        chooseninstant.liked = true
        favouriteProduct = [...favouriteProduct, chooseninstant]
        let unique2 = uniqeproduct(favouriteProduct, "id")
        localStorage.setItem('favouriteProduct', JSON.stringify(unique2));
        instant.map((item) => {
            if (item.id === chooseninstant.id) {
                item.liked = true
            }
        })
        localStorage.setItem('fav', JSON.stringify(instant))
        viainstant(instant)
    }
} else {
    window.location = "assets/login.html"
};

/*======= SOLVE READD TO FAV ============*/
function uniqeproduct(arr, filtertype) {
    let unique = arr
        .map((item) => item[filtertype])
        .map((item, i, final) => final.indexOf(item) === i && i)
        .filter((item) => arr[item])
        .map((item) => arr[item])
    return unique;
}


function product(id) {
    let choosenmachine = Machines.find((item) => item.id === id);
    let choosenbeans = beans.find((item) => item.id === id);
    let chooseninstant = instant.find((item) => item.id === id);
    localStorage.setItem('productid', JSON.stringify(choosenmachine || chooseninstant || choosenbeans))
    window.location = "assets/ProductPage.html"
}