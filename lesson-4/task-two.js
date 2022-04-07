"use strict";

const p = document.querySelector(".before");
const textAfter = document.querySelector(".after");

let changeText = () => {
    let textBefore = p.textContent;
    textAfter.innerText = textBefore.replace(/\B'|'\B/g, '"');
}

changeText();