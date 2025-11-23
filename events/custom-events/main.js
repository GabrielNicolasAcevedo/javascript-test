// Create a function tto highligh an element
/* function highlight(elem, callback) {
    elem.style.backgroundColor = "yellow";

    if (callback && typeof callback === "function") {
        callback(elem)
    }
};

let note = document.querySelector("#note");
function addBorder(elem) {
    elem.style.border = "solid 1px red"
}

highlight(note, addBorder);
 */


//Creating the same function with a custom event
function highlight(elem) {
    const bgColor = "yellow";
    elem.style.backgroundColor = bgColor;
    
    let customEvent = new CustomEvent("mark", {
        detail: {
            backgroundColor: "yellow"
        }
    });

    // dispatch the event
    elem.dispatchEvent(customEvent);
};

// select the div
const div = document.querySelector("#note");

// add border style
function addBorder(elem) {
    elem.style.border = "solid 2px blue"
};

// listen to the highlight event
div.addEventListener("mark", e => {
    addBorder(e.currentTarget);

    // examine the background
    console.log(e.detail);
});

// Highlight the div
highlight(div);
