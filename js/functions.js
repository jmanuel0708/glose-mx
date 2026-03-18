const showCart = (buttonPressed) => {
    buttonPressed.addEventListener("click", () => {
        if (!cart.classList.contains("cart__show")) {
            cart.classList.add("cart__show");   
        }
    })
}

// Show cart

const closeCartIcon = document.querySelector(".cart__close");
const cartIcon = document.querySelector(".header__cart")
const cart = document.querySelector(".cart")

showCart(cartIcon)

closeCartIcon.addEventListener("click", () => {
    if (cart.classList.contains("cart__show")) {
        cart.classList.remove("cart__show");
    }
})

// Remove item from cart

const iconRemove = document.querySelectorAll(".cart__article__btn");

iconRemove.forEach(elem => {
    elem.addEventListener("click", () => {
        const elemParent = elem.parentElement;
        elemParent.remove();
    })
})

// Add item to cart

