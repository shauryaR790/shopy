const product = [
    {
        id: 0,
        name: "Active Jr",
        price: 64.00,
        imgSrc: "https://static.wixstatic.com/media/c837a6_9e4500e0fa504a0b9cda0a2390b5e9a8~mv2.jpg/v1/fill/w_419,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_9e4500e0fa504a0b9cda0a2390b5e9a8~mv2.jpg", 
    },
    {
        id: 1,
        name: "Origin Jr",
        price: 64.00,
        imgSrc: "https://static.wixstatic.com/media/c837a6_936329eced864c0abedbf89844390c72~mv2.jpg/v1/fill/w_419,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_936329eced864c0abedbf89844390c72~mv2.jpg", 
    },
    {
        id: 2,
        name: "Classic Jr",
        price: 64.00,
        imgSrc: "https://static.wixstatic.com/media/c837a6_88ee5da8f42c4aa29599f05cee8854d3~mv2.jpg/v1/fill/w_419,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_88ee5da8f42c4aa29599f05cee8854d3~mv2.jpg", 
    },
    {
        id: 3,
        name: "Natural Jr",
        price: 64.00,
        imgSrc: "https://static.wixstatic.com/media/c837a6_f77f07d4300b41979a686818470f24ca~mv2.jpg/v1/fill/w_419,h_419,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_f77f07d4300b41979a686818470f24ca~mv2.jpg", 
    }
];


let displayEl = document.querySelector('.middletheProducts');

function renderProductshere() {
    console.log("Rendering kids products...");
    displayEl.innerHTML = '';
    product.forEach((products) => {
        displayEl.innerHTML += `
             <div class="itemifo">
                 <img src = ${products.imgSrc} class="shoeimg1">
                 <h4>${products.name} </h4>
                 <p>$${products.price} </p>
                 <button class='cartadd' onclick = 'addedtocart(${products.id})'>Add To Cart</button>
             </div>
        `;
    });
}
renderProductshere()

function addedtocart(id) {
    // 1. Get the latest cart data from Local Storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const productToAdd = product.find((item) => item.id === id);

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