// Select element
let msg = document.querySelector("#message");


// event properties
msg.addEventListener("keydown", e => {
    console.log(
        `key= ${e.key}, 
        \ncode= ${e.code}`)
});