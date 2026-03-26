// Show Menu

const showMenu = (buttonPressed) => {
    buttonPressed.addEventListener("click", () => {
        if (!menu.classList.contains("menu__show")) {
            menu.classList.add("menu__show")
        }
    })
}

const closeMenuIcon = document.querySelector(".menu__header__close");
const menuIcon = document.querySelector(".header__icon");
const menu = document.querySelector(".menu");

showMenu(menuIcon);

closeMenuIcon.addEventListener("click", () => {
    if (menu.classList.contains("menu__show")) {
        menu.classList.remove("menu__show");
    }
})


// Show Cart

const closeCartIcon = document.querySelector(".cart__header__close");
const cartIcon = document.querySelector(".header__cart")
const cart = document.querySelector(".cart")

const showCart = (buttonPressed) => {
    buttonPressed.addEventListener("click", () => {
        if (!cart.classList.contains("cart__show")) {
            cart.classList.add("cart__show");   
        }
    })
}

showCart(cartIcon);

closeCartIcon.addEventListener("click", () => {
    if (cart.classList.contains("cart__show")) {
        cart.classList.remove("cart__show");
    }
})


// const showOverlay = () => {
    
// }

// // Show overlay

// const overlay = document.querySelector(".panelOverlay");

// Show menu



// Add item to cart


const addToBag = document.querySelectorAll(".card__btn");

let itemsInCart = 0;

addToBag.forEach(button => {
    button.addEventListener("click", (e) => {
        itemsInCart += 1;
        updateCheckoutBtn();
        updateItemsInCart();
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
        cart.insertBefore(newArticleInCart,cartCheckoutBtn);

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
        newBtn.addEventListener("click", () => {
            newBtn.parentElement.remove();
            itemsInCart -=1;
            updateCheckoutBtn();
            updateItemsInCart();
        })

        
        newArticleInCart.append(newImg);
        newArticleInCart.append(newTitle);
        newArticleInCart.append(newPrice);
        newArticleInCart.append(newBtn);

        if (!cart.classList.contains("cart__show")) {
            cart.classList.add("cart__show");   
        }
    })

})

const itemsInCartHTML = document.querySelector(".header__cartCount");

const updateItemsInCart = () => {
    itemsInCartHTML.textContent = itemsInCart;
    if (itemsInCart < 1) {
        itemsInCartHTML.classList.remove("header__cartCount__show");
    } else if (!itemsInCartHTML.classList.contains("header__cartCount__show")) {
        itemsInCartHTML.classList.add("header__cartCount__show")
    }
}

// Checkout Btn

const cartCheckoutBtn = document.querySelector(".cart__btn");

const updateCheckoutBtn = () => {
    if (itemsInCart < 1) {
        cartCheckoutBtn.disabled = true;
        cartCheckoutBtn.classList.add("cart__btn--disabled");
    } else {
        cartCheckoutBtn.disabled = false;
        cartCheckoutBtn.classList.remove("cart__btn--disabled");
    }
};
