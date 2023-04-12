// document.getElementById('title').innerHTML = "some text";

// let hideButton = document.getElementById('hideButton');
// let unhideButton = document.getElementById('unhideButton');

// hideButton.addEventListener('click', (e) => {
//     console.log("button was pressed");
// })

// let hideButton = () => {
//     let title = document.getElementById('title');
//     title.style.display = "none";
// }

// let unhideButton = () => {
//     let title = document.getElementById('title');
//     title.style.display = "none";
// }


h1Element = document.querySelector('h1');
hideButtonElement = document.getElementById('hideButton');
unhideButtonElement = document.getElementById('unhideButton');
console.log(h1Element, hideButtonElement, unhideButtonElement)

h1Element.innerHTML = "some text";

hideButtonElement.addEventListener('click', () => {
h1Element.style.display = "none";
})

unhideButtonElement.addEventListener('click', () => {
    h1Element.style.display = "inline";
    })
    