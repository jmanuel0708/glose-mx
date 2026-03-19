const menu = document.querySelector(".menu");
const cart = document.querySelector(".cart");
const panelOverlay = document.querySelector(".panelOverlay");
const menuIcon = document.querySelector(".header__menu");
const menuCloseIcon = document.querySelector(".menu__close");
const cartIcon = document.querySelector(".header__cart");
const closeCartIcon = document.querySelector(".cart__close");
const cartBody = document.querySelector(".cart__body");
const cartEmpty = document.querySelector(".cart__empty");
const cartCheckoutBtn = document.querySelector(".cart__btn");
const addToBag = document.querySelectorAll(".card__btn");
const panels = [menu, cart];

let itemsInCart = 0;

const syncPanelState = (panel, isOpen) => {
    panel.classList.toggle("is-open", isOpen);
    panel.setAttribute("aria-hidden", String(!isOpen));
};

const openPanel = (panelToOpen) => {
    panels.forEach((panel) => {
        syncPanelState(panel, panel === panelToOpen);
    });

    panelOverlay.classList.add("is-active");
    document.body.classList.add("no-scroll");
};

const closePanels = () => {
    panels.forEach((panel) => {
        syncPanelState(panel, false);
    });

    panelOverlay.classList.remove("is-active");
    document.body.classList.remove("no-scroll");
};

const togglePanel = (panelToToggle) => {
    if (panelToToggle.classList.contains("is-open")) {
        closePanels();
        return;
    }

    openPanel(panelToToggle);
};

const toggleEmptyState = () => {
    cartEmpty.classList.toggle("is-hidden", itemsInCart > 0);
};

const updateCheckoutBtn = () => {
    const isDisabled = itemsInCart < 1;

    cartCheckoutBtn.disabled = isDisabled;
    cartCheckoutBtn.classList.toggle("cart__btn--disabled", isDisabled);
};

menuIcon.addEventListener("click", () => {
    togglePanel(menu);
});

menuCloseIcon.addEventListener("click", closePanels);

cartIcon.addEventListener("click", () => {
    togglePanel(cart);
});

closeCartIcon.addEventListener("click", closePanels);

panelOverlay.addEventListener("click", closePanels);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closePanels();
    }
});

addToBag.forEach((button) => {
    button.addEventListener("click", (event) => {
        itemsInCart += 1;
        updateCheckoutBtn();
        toggleEmptyState();

        const card = event.currentTarget.closest(".card");
        const img = card.querySelector(".card__img");
        const title = card.querySelector(".card__item");
        const price = card.querySelector(".card__price");

        const imgSrc = img.getAttribute("src");
        const imgAlt = img.getAttribute("alt");
        const titleText = title.textContent;
        const priceText = price.textContent;

        const newArticleInCart = document.createElement("article");
        newArticleInCart.setAttribute("class", "cart__article");

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
        newBtn.setAttribute("src", "img/icons/trash.svg");
        newBtn.setAttribute("alt", "Remove from cart");
        newBtn.addEventListener("click", () => {
            newArticleInCart.remove();
            itemsInCart -= 1;
            updateCheckoutBtn();
            toggleEmptyState();
        });

        newArticleInCart.append(newImg);
        newArticleInCart.append(newTitle);
        newArticleInCart.append(newPrice);
        newArticleInCart.append(newBtn);

        cartBody.append(newArticleInCart);
        openPanel(cart);
    });
});

updateCheckoutBtn();
toggleEmptyState();
