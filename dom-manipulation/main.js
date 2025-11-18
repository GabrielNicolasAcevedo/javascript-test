const container = document.querySelector("#container");

const p = document.createElement ("p");
p.textContent = "Hey I'm red!";
p.style.color = "red";

container.appendChild(p);

const h3 = document.createElement("h3");
h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

container.appendChild(h3);

const div = document.createElement("div");
div.style.border = "1px solid black"
div.style.backgroundColor = "pink"

container.appendChild(div);

const h1 = document.createElement("h1");
h1.textContent= "I'm in the div!";

const p2 = document.createElement("p");
p2.textContent= "ME TOO!";

div.appendChild(h1)
div.appendChild(p2)




