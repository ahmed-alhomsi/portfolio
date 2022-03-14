const helloWorldSpan = document.querySelector('.hello-world');
const blinkingCursor = document.querySelector('.blinking-cursor');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.navbar ul');
const projectsContainer = document.querySelector('.projects-container');
const cards = document.querySelectorAll('.projects-container .card')
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
let counter = 1;
const size = 600;
const helloWorldArray = ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd', '!'];
let helloWorldIndex = 0;
projectsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';

document.addEventListener('DOMContentLoaded', ()=>{
    setInterval(() => {
        if(helloWorldIndex < helloWorldArray.length) {
            helloWorldSpan.innerText += helloWorldArray[helloWorldIndex];
            helloWorldIndex++;
        }
    }, 200);
});

document.addEventListener('DOMContentLoaded', ()=>{
        setInterval(() => {
            // console.log(helloWorldIndex)
            if(helloWorldIndex === helloWorldArray.length) {
            blinkingCursor.classList.toggle('blinking-cursor-off');
            }
        }, 400);
});

navToggle.addEventListener('click', ()=>{
    if(navLinks.classList.contains("none")) {
        navLinks.style.transition = "transform 0.5s ease-in-out";
        navLinks.classList.remove("none");
        navLinks.style.display = "block";
    } else {
        navLinks.style.transition = "transform 0.5s ease-in-out";
        navLinks.classList.add("none");
        navLinks.style.display = "none";
    }
});

nextBtn.addEventListener('click', ()=>{
    if(counter >= cards.length - 1) return;
    projectsContainer.style.transition = "transform 0.4s ease-in-out";
    counter++;
    projectsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', ()=>{
    if(counter <= 0) return;
    projectsContainer.style.transition = "transform 0.4s ease-in-out";
    counter--;
    projectsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

projectsContainer.addEventListener('transitionend', ()=>{
    if(cards[counter].id === 'lastClone') {
        projectsContainer.style.transition = "none";
        counter = cards.length - 2;
        projectsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
    } else if(cards[counter].id === 'firstClone') {
        projectsContainer.style.transition = "none";
        counter = cards.length - counter;
        projectsContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});