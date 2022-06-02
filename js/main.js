const selected = document.querySelector(".selected");
const secondSelected = document.querySelector(".selected2");

const optionsContainer = document.querySelector(".options-container");
const secondOptionsContainer = document.querySelector(".options2-container");

const optionsList = document.querySelectorAll(".option");
const secondOptionsList = document.querySelectorAll(".option2")

console.log(secondOptionsList);

const body = document.querySelector("#body-div");

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const findAJobButton = document.querySelector("#find-a-job");

const closeButton = document.querySelector('.close-modal');

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

secondSelected.addEventListener("click", () => {
    secondOptionsContainer.classList.toggle("active");
});

let job;

optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        job = selected.innerHTML;
        optionsContainer.classList.remove("active");
    });
});

let state;

secondOptionsList.forEach(o => {
    o.addEventListener("click", () => {
        secondSelected.innerHTML = o.querySelector("label").innerHTML;
        state = secondSelected.innerHTML;
        secondOptionsContainer.classList.remove("active");
    });
});

findAJobButton.addEventListener('click', function () {
    if ((!selected.innerHTML.includes("Job title, keywords")) && (!secondSelected.innerHTML.includes("Location"))) {
        location.href = "signup.html";
    }
    else {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
})

closeButton.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})
