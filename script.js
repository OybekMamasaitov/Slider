let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let features = document.getElementsByClassName("feature");
let links = document.getElementsByClassName("link_in_content_projects");
let slideIndex = 1;
let slidesLen = slides.length;

function showSlides() {
    if (slideIndex > slidesLen) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slidesLen;
    }

    for (let i = 0; i < slidesLen; i++) {
        slides[i].classList.add("hide");
        links[i].classList.remove("active_link");
        dots[i].classList.remove("active");
        for (let k = 0; i + slidesLen * k < features.length; k++) {
            features[i + slidesLen * k].classList.add("hide");
        }
    }

    slides[slideIndex - 1].classList.remove("hide");
    links[slideIndex - 1].classList.add("active_link");
    dots[slideIndex - 1].classList.add("active");
    for (let i = 0; i < slidesLen; i++) {
        features[slideIndex - 1 + i * 3].classList.remove("hide");
    }
}

function toggleSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}