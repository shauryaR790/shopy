const items = [
    {
        id: 0,
        name: "Singnal DL",
        price: 129.00,
        imgSrc: "https://static.wixstatic.com/media/c837a6_410451b497004b4d89b6e472c41de5a2~mv2.jpg/v1/fill/w_419,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_410451b497004b4d89b6e472c41de5a2~mv2.jpg",
    },
    {
        id: 1,
        name: "Artisan DL",
        price: 129.00,
        imgSrc: "https://static.wixstatic.com/media/c837a6_c2634177f82d42e79e309a8b140e02b3~mv2.jpg/v1/fill/w_419,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_c2634177f82d42e79e309a8b140e02b3~mv2.jpg",
    },
    {
        id: 2,
        name: "Original Dl",
        price: 149.00,
        imgSrc: "https://static.wixstatic.com/media/c837a6_a9b28eeb2641483ab21505b3b575a752~mv2.jpg/v1/fill/w_419,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_a9b28eeb2641483ab21505b3b575a752~mv2.jpg",
    },
    {
        id: 3,
        name: "Core DL",
        price: 199.00,
        imgSrc: "https://static.wixstatic.com/media/c837a6_af92b90a30ff455a9a240ec6401de066~mv2.jpg/v1/fill/w_419,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_af92b90a30ff455a9a240ec6401de066~mv2.jpg",
    },
    {
        id: 4,
        name: "Bio Originals",
        price: 199.00,
        imgSrc: "https://static.wixstatic.com/media/c837a6_96481ea655134a6789d7fdc909b280d2~mv2.jpg/v1/fill/w_419,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_96481ea655134a6789d7fdc909b280d2~mv2.jpg",
    },
    {
        id: 5,
        name: "Bio Runners",
        price: 99.00,
        imgSrc: "https://static.wixstatic.com/media/c837a6_f4b16c06d8b5449c954a72eb34be2b4b~mv2.jpg/v1/fill/w_419,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_f4b16c06d8b5449c954a72eb34be2b4b~mv2.jpg"
    },
    {
        id: 6,
        name: "Bio Perform",
        price: 99.00,
        imgSrc: "https://static.wixstatic.com/media/c837a6_da34515a9ca049c9b729fa92e5f3e25f~mv2.jpg/v1/fill/w_419,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_da34515a9ca049c9b729fa92e5f3e25f~mv2.jpg",
    },
    {
        id: 7,
        name: "Bio Basic",
        price: 199.00,
        imgSrc: "https://static.wixstatic.com/media/c837a6_4d7109d68bc34fa79c82ee0fe8851b4c~mv2.jpg/v1/fill/w_419,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_4d7109d68bc34fa79c82ee0fe8851b4c~mv2.jpg",
    },
    {
        id: 8,
        name: "Active Jr",
        price: 64.00,
        imgSrc: "https://static.wixstatic.com/media/c837a6_9e4500e0fa504a0b9cda0a2390b5e9a8~mv2.jpg/v1/fill/w_419,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_9e4500e0fa504a0b9cda0a2390b5e9a8~mv2.jpg", 
    },
    {
        id: 9,
        name: "Origin Jr",
        price: 64.00,
        imgSrc: "https://static.wixstatic.com/media/c837a6_936329eced864c0abedbf89844390c72~mv2.jpg/v1/fill/w_419,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_936329eced864c0abedbf89844390c72~mv2.jpg", 
    },
    {
        id: 10,
        name: "Classic Jr",
        price: 64.00,
        imgSrc: "https://static.wixstatic.com/media/c837a6_88ee5da8f42c4aa29599f05cee8854d3~mv2.jpg/v1/fill/w_419,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_88ee5da8f42c4aa29599f05cee8854d3~mv2.jpg", 
    },
    {
        id: 11,
        name: "Natural Jr",
        price: 64.00,
        imgSrc: "https://static.wixstatic.com/media/c837a6_f77f07d4300b41979a686818470f24ca~mv2.jpg/v1/fill/w_419,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_f77f07d4300b41979a686818470f24ca~mv2.jpg", 
    },
];

let displayEl = document.querySelector('.middleProducts');

function renderProductshere() {
    console.log("Rendering Active QX products...");
    displayEl.innerHTML = '';
    items.forEach((product) => {
        displayEl.innerHTML += `
             <div class="itemifo">
                 <img src = ${product.imgSrc} class="shoeimg1">
                 <h4>${product.name} </h4>
                 <p>$${product.price} </p>
                 <button class='cartadd' onclick = 'addedtocart(${product.id})'>Add To Cart</button>
             </div>
        `;
    });
}

renderProductshere();

function addedtocart(id) {
    // 1. Get the latest cart data from Local Storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const productToAdd = items.find((item) => item.id === id);

    if (productToAdd) {
        // Check if the item is already in the cart
        const existingItem = cart.find(item => item.id === productToAdd.id);

        if (existingItem) {
            // If it exists, increase the quantity
            existingItem.quantity++;
        } else {
            // If it doesn't exist, add it to the cart with a quantity of 1
            cart.push({
                ...productToAdd,
                quantity: 1,
            });
        }

        // 2. Save the updated 'cart' back to Local Storage
        localStorage.setItem('cart', JSON.stringify(cart));

        console.log('Item added to cart:', productToAdd);
        console.log('Current cart:', cart);
    }
}