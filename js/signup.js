const signUpButton = document.querySelector('#signUp');
const signInButton = document.querySelector('#signIn');
const container = document.querySelector('#container');
const clearButton = document.querySelector(".clear-f")
// const getAJob = document.querySelector("#get-a-job");
const form = document.querySelector('.form-div');
const signUpForm = document.querySelector(".sign-up-form-div")


const signInEmail = document.querySelector("#text-field");
const signInPassword = document.querySelector("#password-Field");
const signIn = document.querySelector(".sign-in-button");


const signUpName = document.querySelector("#sign-up-text");
const signUpEmail = document.querySelector("#sign-up-email");
const signUpPassword = document.querySelector("#sign-up-password");
const signUp = document.querySelector(".sign-up-button");


signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// form.addEventListener('submit', function handleSubmitButton(event) {
//     event.preventDefault();
//     form.reset();
// })

signIn.addEventListener('click', function () {
    form.submit();
    signInEmail.value = "";
    signInPassword.value = "";
});

signUp.addEventListener('click', function () {
    signUpForm.submit();
    signUpName.value = "";
    signUpEmail.value = "";
    signUpPassword.value = "";
});

