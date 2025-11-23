// Create a new event with default options: { bubbles: false, cancelable: false}
let genericEvent = new Event("click");

// To fire the event on a target element using dispatchEvent() method
let btn = document.querySelector("#btn");

btn.addEventListener("click",e => {
    console.log("Mouse clicked")
    console.log(e.isTrusted)
});

btn.dispatchEvent(genericEvent);

/* let clickEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    clientX: 150,
    clientY: 150
}); */