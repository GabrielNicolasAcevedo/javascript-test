const output = document.querySelector(".output");
output.textContent = "";

//Countdown loop from 10 to 0
let i = 10;

while (i>=0) {
const para = document.createElement('p');
para.textContent = "";
output.appendChild(para);

if (i=== 0) {
    para.textContent += "BLASTOFF!!!"
} else if (i === 10) {
    para.textContent += `Countdown ${i}\n`
} else {
    para.textContent += `${i}\n`
}

i--;
}