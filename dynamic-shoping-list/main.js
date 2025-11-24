let list = document.querySelector("ul");
let input = document.querySelector("input");
const btn = document.querySelector("button")

let li = document.createElement("li");
let span = document.createElement("span");
let newBtn = document.createElement("button")

btn.addEventListener("click", e => {
    e.preventDefault();
    let item = input.value;
    input.value = "";

    let li = document.createElement("li");
    let span = document.createElement("span");
    let newBtn = document.createElement("button")

    li.appendChild(span);
    li.appendChild(newBtn);

    span.textContent = item;
    newBtn.textContent = "Delete"

    list.appendChild(li);

    newBtn.addEventListener("click", e => {
        li.remove(e.target);
    })

    input.focus()
})