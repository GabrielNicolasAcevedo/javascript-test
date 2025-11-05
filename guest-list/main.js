const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

// loop starts here
// Phil and Lola are not welcomed for being greedy and rude

for (let person of people) {
    if (person === "Lola" || person === "Phil") {
        refused.textContent += `${person} `;
    }
    admitted.textContent += `${person} `;
}