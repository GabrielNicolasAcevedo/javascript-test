// Select element
let msg = document.querySelector("#message");

// Character keys: keydown, keypress and keyup are fired sequentially
// Non-character keys: keydown and keyup events are fired 
// event properties
msg.addEventListener("keydown", e => {
    console.log(
        `Keydown:
        \nkey= ${e.key}, 
        \ncode= ${e.code}`)
});

msg.addEventListener("keypress", e => {
    console.log(
        `keypress (Only for character keys):
        \nkey= ${e.key}, 
        \ncode= ${e.code}`)
});

msg.addEventListener("keyup", e => {
    console.log(
        `Keyup:
        \nkey= ${e.key}, 
        \ncode= ${e.code}`)
});
