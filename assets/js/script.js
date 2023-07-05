
console.log("JS Loaded");


const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
        reverseDirection: true,
    },
    spaceBetween: 50,
    autoHeight: true,
    slidesPerView: 4,
    // Responsive breakpoints
    breakpoints: {
        320: {
            direction: "vertical",
            slidesPerView: 4,
            spaceBetween: 30,
        },
        640: {
            direction: "vertical",
            slidesPerView: 4,
            spaceBetween: 30,
        },
        780: {
            direction: "horizontal",
            slidesPerView: 4,
            spaceBetween: 80,
        },
    },
});
