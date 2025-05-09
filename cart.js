const cartItemsEl = document.querySelector(".renderCartItemsHere");
const subtotalEl = document.querySelector(".subtotal");

console.log("yep it running");

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCartItems() {
    let cartHTML = ''; // Initialize an empty string to build the HTML
    let totalPrice = 0;

    cart.forEach(item => {
        cartHTML += `
            <div class="item-info">
                <img width='200' src="${item.imgSrc}" class="cartImg">
                <h4>${item.name}</h4>
                <div class="unit-price">
                    <small>$</small>${item.price}
                </div>
                <div class="units">
                    <div class="btnminus" onclick="changeQuantity('${item.id}', 'minus')">-</div>
                    <div class="number">${item.quantity}</div>
                    <div class="btnplus" onclick="changeQuantity('${item.id}', 'plus')">+</div>
                </div>
                <button class="delete-btn" onclick="removeItem('${item.id}')">Delete</button>
            </div>
        `;
        totalPrice += item.price * item.quantity;
    });

    cartItemsEl.innerHTML = cartHTML; // Set innerHTML once after building the entire string
    subtotalEl.innerText = `Subtotal (${cart.length} items): $${totalPrice}`;
}

renderCartItems();

function removeItem(itemID) {
    console.log('removeItem called for ID:', itemID);
    console.log('Cart before removal:', cart);

    let newCart = [];

    const itemIdAsNumber = parseInt(itemID); // Try converting itemId to a number

    for (let i = 0; i < cart.length; i++) {
        const currentItem = cart[i];
        if (currentItem.id !== itemIdAsNumber) { // Compare with the numerical itemId
            newCart.push(currentItem);
        }
    }

    cart = newCart;
    console.log('Cart after removal:', cart); 
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
}

function changeQuantity(itemID, action) {

    console.log('changeQuantity called for ID:', itemID, 'action:', action);
    console.log('Cart before quantity change:', cart);

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === itemID) {
            console.log("Found matching item:", cart[i]);
            if (action === 'minus' && cart[i].quantity > 1) {
                cart[i].quantity--;
            } else if (action === 'plus') {
                cart[i].quantity++;
            }
            break;
        }
    }

    console.log('Cart after quantity change:', cart);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Cart before render:', cart); // Added console log
    renderCartItems();
}
