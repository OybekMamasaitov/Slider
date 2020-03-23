let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let features = document.getElementsByClassName("feature");
let links = document.getElementsByClassName("link_in_content_projects")
let slideIndex = 1;

function showSlides() {
    if (slideIndex > 3) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = 3;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add("hide");
        features[i].classList.add("hide");
        features[i+3].classList.add("hide");
        features[i+6].classList.add("hide");
        links[i].classList.remove("active_link");
        dots[i].classList.remove("active");
    }

    slides[slideIndex-1].classList.remove("hide");
    features[slideIndex-1].classList.remove("hide");
    features[slideIndex+2].classList.remove("hide");
    features[slideIndex+5].classList.remove("hide");
    links[slideIndex-1].classList.add("active_link");
    dots[slideIndex-1].classList.add("active");
}

function toggleSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}