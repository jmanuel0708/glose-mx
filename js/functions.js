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

const addToBag = document.querySelectorAll(".card__btn");

addToBag.forEach(button => {
    button.addEventListener("click", (e) => {
        const card = e.currentTarget.closest(".card");

        const img = card.querySelector(".card__img");
        const title = card.querySelector(".card__item");
        const price = card.querySelector(".card__price");

        const imgSrc = img.getAttribute("src");
        const imgAlt = img.getAttribute("alt");
        const titleText = title.textContent;
        const priceText = price.textContent;

        const newArticleInCart = document.createElement("article");
        newArticleInCart.setAttribute("class","cart__article");
        cart.append(newArticleInCart);

        const newImg = document.createElement("img");
        newImg.setAttribute("class", "cart__article__img");
        newImg.setAttribute("src", imgSrc);
        newImg.setAttribute("alt", imgAlt);
        
        const newTitle = document.createElement("h3");
        newTitle.setAttribute("class", "cart__article__item");
        newTitle.textContent = titleText;

        const newPrice = document.createElement("p");
        newPrice.setAttribute("class", "cart__article__price");
        newPrice.textContent = priceText;

        const newBtn = document.createElement("img");
        newBtn.setAttribute("class", "cart__article__btn");
        newBtn.setAttribute("src","img/icons/trash.svg");
        newBtn.setAttribute("alt", "Remove from cart");

        
        newArticleInCart.append(newImg);
        newArticleInCart.append(newTitle);
        newArticleInCart.append(newPrice);
        newArticleInCart.append(newBtn);
    })
})