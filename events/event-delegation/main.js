// Select the elements
// Add event listeners to each elem
/* let home = document.querySelector("#home");
home.addEventListener("click", e => {
    console.log("Home item was clicked!");
});

let dashboard = document.querySelector("#dashboard");
dashboard.addEventListener("click", e => {
    console.log("Dashboard item was clicked!");
});

let report = document.querySelector("#report");
report.addEventListener("click", e => {
    console.log("Report item was clicked!");
}); */


// instead of multiple handlers, use only 1

let menu = document.querySelector("#menu");

menu.addEventListener("click", e => {
    let target = e.target;
    //console.log(target);
    //console.log(target.id);
    switch (target.id){
        case "home":
            console.log("Home item was clicked!");
            break;
        case "dashboard":
            console.log("Dashboard item was clicked!");
            break;
        case "report":
            console.log("Report item was clicked!");
            break;
    }
});