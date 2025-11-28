// AOS Animation Init
AOS.init();

// Typing Animation Text
const texts = [
    "Python Development",
    "Machine Learning",
    "Data Science",
    "Web Development",
    "Cloud Computing"
];

let index = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
    if (charIndex < texts[index].length) {
        typingElement.innerHTML += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.innerHTML = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index = (index + 1) % texts.length;
        setTimeout(typeEffect, 400);
    }
}

typeEffect();

// Particle Background Init
particlesJS.load('particles-js',
    'https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js/particles.json',
    function () { console.log("Particles Loaded"); });
