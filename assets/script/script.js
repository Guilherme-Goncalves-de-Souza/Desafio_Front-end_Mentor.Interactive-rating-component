"use strict";
let form = document.querySelector('form');
let choiceAvaliation = document.querySelector('.main__choiceAvaliation');
let avaliationSuccess = document.querySelector('.main__avaliationSuccess');
let textThankYou = document.querySelector('.main__selected p');
let el1 = document.querySelector('.el1');
let el2 = document.querySelector('.el2');
let el3 = document.querySelector('.el3');
let el4 = document.querySelector('.el4');
let el5 = document.querySelector('.el5');
function selected(selectedNumber) {
    let formItem = document.querySelector(`.el${selectedNumber}`);
    formItem.classList.toggle('is-selected');
    if (formItem.classList.contains('is-selected')) {
        notTwoSelected(selectedNumber);
        console.log(selectedNumber);
    }
    else {
        el1.classList.remove('is-not-clicked');
        el2.classList.remove('is-not-clicked');
        el3.classList.remove('is-not-clicked');
        el4.classList.remove('is-not-clicked');
        el5.classList.remove('is-not-clicked');
        selectedNumber = 0;
    }
    if (selectedNumber !== 0) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            choiceAvaliation.classList.add('is-none');
            avaliationSuccess.classList.remove('is-none');
            textThankYou.innerHTML = `You selected ${selectedNumber} out of 5`;
        });
    }
    else {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            choiceAvaliation.classList.remove('is-none');
            avaliationSuccess.classList.add('is-none');
        });
    }
}
function notTwoSelected(number) {
    el1.classList.add('is-not-clicked');
    el2.classList.add('is-not-clicked');
    el3.classList.add('is-not-clicked');
    el4.classList.add('is-not-clicked');
    el5.classList.add('is-not-clicked');
    switch (number) {
        case 1:
            el1.classList.remove('is-not-clicked');
            break;
        case 2:
            el2.classList.remove('is-not-clicked');
            break;
        case 3:
            el3.classList.remove('is-not-clicked');
            break;
        case 4:
            el4.classList.remove('is-not-clicked');
            break;
        case 5:
            el5.classList.remove('is-not-clicked');
            break;
    }
}
