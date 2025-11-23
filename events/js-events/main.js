let btn = document.querySelector("#btn");


// Option 1
function handleClick() {
    console.log("It was clicked! Option 1")
};

btn.addEventListener("click", handleClick);


// Option 2: Shorter way

btn.addEventListener("click" , () => {
    console.log("It was clicked! Option 2")
});

// Event Object + properties
/* btn.addEventListener("click", e => {
    console.log(`
        \nType: ${e.type} 
        \nTarget: ${e.target}
        \nBubbles: ${e.bubbles}
        \nEvent Phase: ${e.eventPhase}
        \nDetails: ${e.detail}
        \nDefault Prevented: ${e.defaultPrevented}
        \nCancelable: ${e.cancelable}
        \nCurrent Target: ${e.currentTarget}` );
}); */

// preventDefault method to prevent to redirecting to link
let link = document.querySelector("a");

link.addEventListener("click" , e => {
    e.preventDefault();
    console.log("Just clicked but didn't redirect to the link")
})

// stopPropagation: without it,you will see 2 messages on the console

btn.addEventListener("click", e => {
    console.log("Clicked! Test for stopPropagation!")
    e.stopPropagation();
})

document.body.addEventListener("click", () => {
    console.log("the body was clicked! propagation!")
})

