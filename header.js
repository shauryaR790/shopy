function updateCartCounter() {
    const cartCounterEl = document.querySelector(".cart-counter");
    if (cartCounterEl) { // Make sure the element exists on the page
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartCounterEl.innerText = cart.length;
    }
}

updateCartCounter();