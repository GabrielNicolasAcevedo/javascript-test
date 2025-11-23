// Select the element
let btn = document.querySelector("#btn");

// Add a listener
btn.addEventListener("click", e => {
    console.log("Clicked!");
});

// Create a personalize message for each mouse button
//First, disable context menu for right click
let btn1 = document.querySelector("#btn1");

btn1.addEventListener("contextmenu", e => {
    e.preventDefault();
});

// Show the mouse event message 
btn1.addEventListener("mouseup", e => {
    let msg = document.querySelector("#message1");

    switch (e.button) {
        case 0:
            msg.textContent = "Left mouse clicked!";
            console.log("Left clicked");
            break;
        case 1: 
            msg.textContent = "Wheel clicked!";
            console.log("Wheel clicked");
            break;
        case 2:
            msg.textContent = "Right mouse clicked!"
            console.log("Right clicked");
            break;
        default:
            msg.textContent = "Unknown button!"
    }
});

// Modifier keys: alt, ctrl , shift and Meta
let btnKeys = document.querySelector("#btnKeys")

btnKeys.addEventListener("click", e => {
    let keys = [];
    if (e.shiftKey) keys.push("Shift");
    if (e.ctrlKey) keys.push("Ctrl");
    if (e.altKey) keys.push("Alt");
    if (e.metaKey) keys.push("Meta");

    let msg = document.querySelector("#messageKeys");
    msg.textContent = `Keys: ${keys.join("+")}`;
});

// Getting screen coordinates
let track = document.querySelector("#track");

track.addEventListener("mousemove", e => {
    let log = document.querySelector("#log");
    log.innerText = `
    \nScreen X/Y: (${e.screenX}, ${e.screenY})
    \nClient X/Y: (${e.clientX}, ${e.clientY})`
});


