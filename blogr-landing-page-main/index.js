let js_0 = document.querySelector(".js_0");
let js_1 = document.querySelector(".js_1");
let js_2 = document.querySelector(".js_2");
let hamburger = document.querySelector(".hamburger");
let bars = document.querySelector(".fa-bars");
let times = document.querySelector(".fa-times");
let menuInside = document.querySelector(".menu-inside");
let btnOne = document.querySelector(".btn-one");
let btnTwo = document.querySelector(".btn-two");
let btnThree = document.querySelector(".btn-three");
let menuOne = document.querySelector(".menu-one");
let menuTwo = document.querySelector(".menu-two");
let menuThree = document.querySelector(".menu-three");


let products = document.querySelector(".product-dropmenu");
let company = document.querySelector(".company-dropmenu");
let connect = document.querySelector(".connect-dropmenu");


document.addEventListener("click", function (ev) {
    ev.preventDefault()
    if (js_0.contains(ev.target)) {
        products.style.visibility = "visible"
    } else {
        products.style.visibility = "hidden"
    }
});

document.addEventListener("click", function (ev) {
    ev.preventDefault()
    if (js_1.contains(ev.target)) {
        company.style.visibility = "visible"
    } else {
        company.style.visibility = "hidden"
    }
});

document.addEventListener("click", function (ev) {
    ev.preventDefault()
    if (js_2.contains(ev.target)) {
        connect.style.visibility = "visible"
    } else {
        connect.style.visibility = "hidden"
    }
});

// ********************************************************Mobile Version Menu

bars.addEventListener("click", function () {

    bars.style.visibility = "hidden";
    times.style.visibility = "visible";
    menuInside.style.visibility = "visible";

})

times.addEventListener("click", function () {

    bars.style.visibility = "visible";
    times.style.visibility = "hidden";
    menuInside.style.visibility = "hidden";
    menuOne.style.display = "none";
    menuTwo.style.display = "none";
    menuThree.style.display = "none";

})

btnOne.addEventListener("click", function () {
    if (menuOne.style.display === "block") {
        menuOne.style.display = "none";
    } else {
        menuOne.style.display = "block";
        menuTwo.style.display = "none";
        menuThree.style.display = "none";
    }
})

btnTwo.addEventListener("click", function () {
    if (menuTwo.style.display === "block") {
        menuTwo.style.display = "none";
    } else {
        menuTwo.style.display = "block";
        menuOne.style.display = "none";
        menuThree.style.display = "none";
    }
})

btnThree.addEventListener("click", function () {
    if (menuThree.style.display === "block") {
        menuThree.style.display = "none";
    } else {
        menuThree.style.display = "block";
        menuOne.style.display = "none";
        menuTwo.style.display = "none";
    }
})

