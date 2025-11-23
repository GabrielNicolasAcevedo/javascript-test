/* // the JavaScript file
// METHOD 1
function alertFunction() {
  alert("YAY! YOU DID IT!");
} */


// the JavaScript file
// METHODS 2 & 3
function alertFunction() {
    alert("YAY! YOU DID IT!");
}
const btn = document.querySelector("#btn");

// METHOD 2
//btn.onclick = alertFunction;

// METHOD 3
//btn.addEventListener("click", alertFunction);


/* btn.addEventListener("click", function (e) {
  console.log(e);
});

btn.addEventListener("click", function (e) {
  console.log(e.target);
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
}); */

let link = document.querySelector('a');

link.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event);
    console.log('clicked');
});

btn.addEventListener('contextmenu', e => {
    e.preventDefault();
});

btn.addEventListener('mouseup', e => {
    let msg = document.querySelector("#message");

    switch (e.button) {
        case 0:
            msg.textContent = "Left mouse button has been clicked";
            console.log(e.button);
            break;
        case 1:
            msg.textContent = "Middle mouse button has been clicked";
            console.log(e.button);
            break;
        case 2:
            msg.textContent = "Right mouse button has been clicked";
            console.log(e.button);
            break;
        default:
            msg.textContent = `Unknown mouse button code: ${e.button}`;
    }
});

/* btn.addEventListener('click', function(event) {
    console.log('The button was clicked!');
   // event.stopPropagation();
});

document.body.addEventListener('click',function(event) {
    console.log('The body was clicked!');
}); */

let btnKeys = document.querySelector('#btnKeys');

btnKeys.addEventListener('click', (e) => {
    let keys = [];

    if (e.shiftKey) keys.push('shift');
    if (e.ctrlKey) keys.push('ctrl');
    if (e.altKey) keys.push('alt');
    if (e.metaKey) keys.push('meta');

    console.log(e);

    let msg = document.querySelector('#messageKeys');
    msg.textContent = `Keys: ${keys.join('+')}`;
});

const text = document.querySelector("#text");

text.addEventListener("keydown", e => {
    console.log(e);
    console.log(e.key);
    console.log(e.code);

})
