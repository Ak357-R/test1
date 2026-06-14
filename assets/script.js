/* ==========================================
   KADROLLI FINANCIAL SERVICES
   PREMIUM FINTECH JS
========================================== */

document.addEventListener("DOMContentLoaded", function () {

/* ==========================================
   HAMBURGER MENU
========================================== */

const hamburger =
document.getElementById("hamburger");

const navLinks =
document.getElementById("navLinks");

if (hamburger && navLinks) {

hamburger.addEventListener("click", function () {

navLinks.classList.toggle("active");

});

}

/* ==========================================
   CLOSE MENU WHEN LINK CLICKED
========================================== */

const menuLinks =
document.querySelectorAll(".nav-links a");

menuLinks.forEach(link => {

link.addEventListener("click", () => {

navLinks.classList.remove("active");

});

});

/* ==========================================
   HEADER SHADOW ON SCROLL
========================================== */

const header =
document.querySelector(".header");

window.addEventListener("scroll", () => {

if (window.scrollY > 50) {

header.style.boxShadow =
"0 10px 30px rgba(0,0,0,.08)";

} else {

header.style.boxShadow =
"0 2px 8px rgba(0,0,0,.08)";

}

});

/* ==========================================
   SCROLL ANIMATION
========================================== */

const fadeElements =
document.querySelectorAll(
".service-card,.feature-card,.testimonial-card,.gallery-item,.metric-card,.contact-card"
);

const observer =
new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add("fade-up");

}

});

}, {
threshold: 0.1
});

fadeElements.forEach(el => {

observer.observe(el);

});

/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters =
document.querySelectorAll(".metric-number");

const runCounter = (counter) => {

const target =
parseInt(counter.innerText.replace(/\D/g, ""));

let current = 0;

const increment =
target / 80;

const update = () => {

current += increment;

if (current < target) {

counter.innerText =
Math.floor(current) + "+";

requestAnimationFrame(update);

} else {

counter.innerText =
target + "+";

}

};

update();

};

const counterObserver =
new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

runCounter(entry.target);

counterObserver.unobserve(entry.target);

}

});

}, {
threshold: 0.5
});

counters.forEach(counter => {

counterObserver.observe(counter);

});

});

/* ==========================================
   SIP CALCULATOR
========================================== */

function calculateSIP(amount, rate, years) {

const monthlyRate =
(rate / 100) / 12;

const months =
years * 12;

const futureValue =
amount *
(
(
Math.pow(
(1 + monthlyRate),
months
) - 1
) / monthlyRate
) *
(1 + monthlyRate);

return Math.round(futureValue);

}

/* ==========================================
   LUMPSUM CALCULATOR
========================================== */

function calculateLumpsum(
amount,
rate,
years
) {

const result =
amount *
Math.pow(
1 + (rate / 100),
years
);

return Math.round(result);

}

/* ==========================================
   GLOBAL FUNCTIONS
========================================== */

window.calculateSIP =
calculateSIP;

window.calculateLumpsum =
calculateLumpsum;

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const backToTop =
document.createElement("button");

backToTop.innerHTML =
"↑";

backToTop.id =
"backToTop";

document.body.appendChild(backToTop);

backToTop.style.position =
"fixed";

backToTop.style.bottom =
"25px";

backToTop.style.left =
"25px";

backToTop.style.width =
"50px";

backToTop.style.height =
"50px";

backToTop.style.borderRadius =
"50%";

backToTop.style.border =
"none";

backToTop.style.background =
"#0f2341";

backToTop.style.color =
"#fff";

backToTop.style.cursor =
"pointer";

backToTop.style.display =
"none";

backToTop.style.zIndex =
"999";

window.addEventListener("scroll", () => {

if (window.scrollY > 500) {

backToTop.style.display =
"block";

} else {

backToTop.style.display =
"none";

}

});

backToTop.addEventListener("click", () => {

window.scrollTo({

top: 0,

behavior: "smooth"

});

});

/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll(
'a[href^="#"]'
).forEach(anchor => {

anchor.addEventListener(
"click",
function (e) {

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if (target) {

target.scrollIntoView({

behavior: "smooth"

});

}

});

});

/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(
"Kadrolli Financial Services Website Loaded Successfully"
);
