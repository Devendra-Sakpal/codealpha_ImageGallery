const cards = document.querySelectorAll(".card");
const filterBtns = document.querySelectorAll(".filter-buttons button");

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentFilter = "all";
let filteredCards = [...cards];
let currentIndex = 0;

// Open Lightbox
cards.forEach((card) => {

    card.addEventListener("click", () => {

        filteredCards = [...cards].filter(c =>
            currentFilter === "all" || c.classList.contains(currentFilter)
        );

        currentIndex = filteredCards.indexOf(card);

        lightbox.classList.add("active");
        lightboxImg.src = card.querySelector("img").src;

    });

});

// Close Lightbox
closeBtn.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

// Next Image
nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= filteredCards.length) {
        currentIndex = 0;
    }

    lightboxImg.src =
        filteredCards[currentIndex].querySelector("img").src;

});

// Previous Image
prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = filteredCards.length - 1;
    }

    lightboxImg.src =
        filteredCards[currentIndex].querySelector("img").src;

});

// Filter Buttons
filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        currentFilter = btn.dataset.filter;

        filteredCards = [];

        cards.forEach(card => {

            if (
                currentFilter === "all" ||
                card.classList.contains(currentFilter)
            ) {

                card.style.display = "block";
                filteredCards.push(card);

            } else {

                card.style.display = "none";

            }

        });

    });

});