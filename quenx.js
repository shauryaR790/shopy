const products = [
    { id: 0, name: 'Active JR', price: 64, imgSrc: "https://static.wixstatic.com/media/c837a6_9e4500e0fa504a0b9cda0a2390b5e9a8~mv2.jpg/v1/fill/w_363,h_363,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_9e4500e0fa504a0b9cda0a2390b5e9a8~mv2.jpg" },
    { id: 1, name: 'Bio Originals', price: 73, imgSrc: "https://static.wixstatic.com/media/c837a6_96481ea655134a6789d7fdc909b280d2~mv2.jpg/v1/fill/w_506,h_506,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_96481ea655134a6789d7fdc909b280d2~mv2.jpg" },
    { id: 2, name: 'Bio Perform', price: 144, imgSrc: "https://static.wixstatic.com/media/c837a6_da34515a9ca049c9b729fa92e5f3e25f~mv2.jpg/v1/fill/w_363,h_363,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_da34515a9ca049c9b729fa92e5f3e25f~mv2.jpg" },
    { id: 3, name: 'Limited DLs', price: 164, imgSrc: "https://static.wixstatic.com/media/c837a6_a9b28eeb2641483ab21505b3b575a752~mv2.jpg/v1/fill/w_363,h_363,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_a9b28eeb2641483ab21505b3b575a752~mv2.jpg" }
];

let productEl = document.querySelector(".products");
const cartCounterEl = document.querySelector(".cart-counter"); // Get the counter element

function renderProducts(){
    productEl.innerHTML= '';
    products.forEach((product) => {
        productEl.innerHTML += `
            <div class="iteminfo">
                <img src="${product.imgSrc}" class="shoes">
                <h4>${product.name}</h4>
                <small>$${product.price}</small>
                <button class="cartBtn" onclick="addToCart(${product.id}, '${product.name}')">Add To Cart</button>
            </div>
        `
    })
}

renderProducts();

function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCounterEl.innerText = cart.length;
}

updateCartCounter(); // Call this on page load to display initial count

function addToCart(id, name) { // Ensure you're still passing the name
    console.log('addToCart function called with ID:', id, 'and Name:', name);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Current cart from localStorage:', cart);
    const productToAdd = products.find((item) => item.id === id);
    console.log('Product found:', productToAdd);

    if (productToAdd) {
        cart.push({
            ...productToAdd,
            quantity: 1,
        });
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Cart updated in localStorage:', cart);
        alert(`"${name}" added to cart!`);
        updateCartCounter();
    } else {
        console.log('Product with ID:', id, 'not found in products array.');
        alert('Error: Could not add item to cart.'); // Provide feedback if product not found
    }
}

gsap.from(".products",{
    opacity:0,
    duration:.8,
    
    scrollTrigger:{
        scroller:"body",
        trigger:".products",
        // markers:true,
        start:"top 70%",
    }
});

gsap.from(".page3 .kidsimg",{
    opacity:0,
    x:735,
    duration:1.9,
    
    scrollTrigger:{
        scroller:"body",
        trigger:".page3 .kidsimg",
        // markers:true,
        start:"top 70%",
    }
});

gsap.from(".details",{
    opacity:0,
    x:-200,
    duration:1.8,
    
    scrollTrigger:{
        scroller:"body",
        trigger:".details",
        // markers:true,
        start:"top 40%",
    }
});

gsap.from(".imgtext",{
    // opacity:0,
    y:-220,
    duration:1.0,
    
    scrollTrigger:{
        scroller:"body",
        trigger:".imgtext",
        // markers:true,
        start:"top 40%",
    }
});
gsap.from(".imgtextbelow",{
    // opacity:0,
    y:-250,
    duration:1.0,
    
    scrollTrigger:{
        scroller:"body",
        trigger:".imgtextbelow",
        // markers:true,
        start:"top 40%",
    }
});
gsap.from(".textright",{
    // opacity:0,
    y:-250,
    duration:1.0,
    
    scrollTrigger:{
        scroller:"body",
        trigger:".imgtext",
        // markers:true,
        start:"top 40%",
    }
});