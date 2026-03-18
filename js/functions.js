const closeCartIcon = document.querySelector(".cart__close");
const cartIcon = document.querySelector(".header__cart")
const cart = document.querySelector(".cart")

cartIcon.addEventListener("click", () => {
    
    if (!cart.classList.contains("cart__show")) {
        cart.classList.add("cart__show")      
    }
})

closeCartIcon.addEventListener("click", () => {
    if (cart.classList.contains("cart__show")) {
        cart.classList.remove("cart__show")
    }
})