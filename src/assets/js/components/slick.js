var services = $("#services");

services.carousel({
    interval: true,
    wrap: true,
    touch: true
})

$("#services-arrow-prev").on("click", function (event) {
    event.preventDefault();

    services.carousel('slickPrev');
});

$("#services-arrow-next").on("click", function (event) {
    event.preventDefault();

    services.carousel('slickNext');
});