const entities = [
    {
        city: "Rostov-on-Don<br>LCD admiral",
        repairTime: "3.5 months",
        apartmentArea: "81 m<sup>2</sup>",
        img: "images/image 1.jpg"
    },

    {
        city: "Sochi<br>Thieves",
        repairTime: "4 months",
        apartmentArea: "105 m<sup>2</sup>",
        img: "images/image 2.jpg"
    },

    {
        city: "Rostov-on-Don<br>Patriotic",
        repairTime: "3 months",
        apartmentArea: "93 m<sup>2</sup>",
        img: "images/image 3.jpg"
    }
]

const city = document.querySelector(".city");
const repairTime = document.querySelector(".repair_time");
const apartmentArea = document.querySelector(".apartment_area");
const img = document.querySelector(".slide");
const dotsContainer = document.querySelector(".dots-container");

for (let i = 0; i < entities.length; i++) {
    let dot = document.createElement("div");
    dot.className = "dot";
    if (i === 0) {
        dot.classList.add("first_dot");
    }
    dotsContainer.append(dot);
}

const dots = document.querySelectorAll(".dot");
const links = document.querySelectorAll(".link_in_content_projects");

dots.forEach((dot, index) => dot.addEventListener('click', () => { currentSlide(index); }));
links.forEach((link, index) => link.addEventListener('click', () => { currentSlide(index); }))

const setEntity = (index) => {
    city.innerHTML = entities[index].city;
    repairTime.innerHTML = entities[index].repairTime;
    apartmentArea.innerHTML = entities[index].apartmentArea;
    img.style.backgroundImage = `url(\"${entities[index].img}\")`;
    for (let i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        links[i].classList.remove("active_link");
    }
    links[index].classList.add("active_link");
    dots[index].style.backgroundColor = "#FFFFFF";
}

const next = document.querySelector(".right-btn");
const prev = document.querySelector(".left-btn");
let currentIndex = 0;

prev.addEventListener('click', () => {
    if (currentIndex == 0) {
        currentIndex = entities.length;
    }

    setEntity(currentIndex - 1);
    currentIndex -= 1;
})
next.addEventListener('click', () => {
    if (currentIndex == entities.length - 1) {
        currentIndex = -1;
    }

    setEntity(currentIndex + 1);
    currentIndex += 1;
})

const currentSlide = (index) => {
    setEntity(index);
}