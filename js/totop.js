// referenced https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// referenced class dropdown tutorial

"use strict";

let button = document.querySelector('#topButton');

window.onscroll = function () {
    if (document.documentElement.scrollTop > 30) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};



