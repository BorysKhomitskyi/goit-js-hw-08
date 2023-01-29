import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('textarea', throttle(onInputData, 500));
form.addEventListener('submit', onSubmitForm)

dataFromLocalStorage();

function onInputData(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY , JSON.stringify(formData));
}


function onSubmitForm(evt) {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function  dataFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (data) {
        email.value = data.email;
        textarea.value = data.message;
    }
}
