
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btn7 = document.getElementById("btn-7");
const btn8 = document.getElementById("btn-8");
const btn9 = document.getElementById("btn-9");
const btn10 = document.getElementById("btn-10");
const btn11 = document.getElementById("btn-11");
const btn12 = document.getElementById("btn-12");
const btn13 = document.getElementById("btn-13");
const btn14 = document.getElementById("btn-14");
const btn15 = document.getElementById("btn-15");
const btn16 = document.getElementById("btn-16");
const btn17 = document.getElementById("btn-17");
const btn18 = document.getElementById("btn-18");
const btn19 = document.getElementById("btn-19");
const btn20 = document.getElementById("btn-20");

const response1 = document.querySelector(".box1 > p");
const response2 = document.querySelector(".box2 > p");
const response3 = document.querySelector(".box3 > p");
const response4 = document.querySelector(".box4 > p");
const response5 = document.querySelector(".box5 > p");
const response6 = document.querySelector(".box6 > p");
const response7 = document.querySelector(".box7 > p");
const response8 = document.querySelector(".box8 > p");
const response9 = document.querySelector(".box9 > p");
const response10 = document.querySelector(".box10 > p");

const showScore = document.getElementById("Note");
const divScore = document.querySelector(".Score")
let note = 0;
let questionResponse = 0;
let totalQuestions = 10;

btn1.addEventListener("click", () => {
    response1.classList.add("show-response");
    response1.style.background = "green";
    note++;
    questionResponse++;
})

btn2.addEventListener("click", () => {
    response1.classList.add("show-response");
    response1.style.background = "red";
    questionResponse++;
})

btn3.addEventListener("click", () => {
    response2.classList.add("show-response");
    response2.style.background = "green";
    note++;
    questionResponse++;
})

btn4.addEventListener("click", () => {
    response2.classList.add("show-response");
    response2.style.background = "red";
    questionResponse++;
})

btn5.addEventListener("click", () => {
    response3.classList.add("show-response");
    response3.style.background = "green";
    note++;
    questionResponse++;
})

btn6.addEventListener("click", () => {
    response3.classList.add("show-response");
    response3.style.background = "red";
    questionResponse++;
})

btn7.addEventListener("click", () => {
    response4.classList.add("show-response");
    response4.style.background = "green";
    note++;
    questionResponse++;
})

btn8.addEventListener("click", () => {
    response4.classList.add("show-response");
    response4.style.background = "red";
    questionResponse++;
})

btn9.addEventListener("click", () => {
    response5.classList.add("show-response");
    response5.style.background = "red";
    questionResponse++;
})

btn10.addEventListener("click", () => {
    response5.classList.add("show-response");
    response5.style.background = "green";
    note++;
    questionResponse++;
})

btn11.addEventListener("click", () => {
    response6.classList.add("show-response");
    response6.style.background = "red";
    questionResponse++;
})

btn12.addEventListener("click", () => {
    response6.classList.add("show-response");
    response6.style.background = "green";
    note++;
    questionResponse++;
})

btn13.addEventListener("click", () => {
    response7.classList.add("show-response");
    response7.style.background = "green";
    note++;
    questionResponse++;
})

btn14.addEventListener("click", () => {
    response7.classList.add("show-response");
    response7.style.background = "red";
    questionResponse++;
})

btn15.addEventListener("click", () => {
    response8.classList.add("show-response");
    response8.style.background = "red";
    questionResponse++;
})

btn16.addEventListener("click", () => {
    response8.classList.add("show-response");
    response8.style.background = "green";
    note++;
    questionResponse++;
})

btn17.addEventListener("click", () => {
    response9.classList.add("show-response");
    response9.style.background = "green";
    note++;
    questionResponse++;
})

btn18.addEventListener("click", () => {
    response9.classList.add("show-response");
    response9.style.background = "red";
    questionResponse++;
})

btn19.addEventListener("click", () => {
    response10.classList.add("show-response");
    response10.style.background = "green";
    note++;
    questionResponse++;
    divScore.classList.add("showScore");
    showScore.innerHTML = `${note}`;
})

btn20.addEventListener("click", () => {
    response10.classList.add("show-response");
    response10.style.background = "red";
    questionResponse++;
    divScore.classList.add("showScore");
    showScore.innerHTML = `${note}`;
})


