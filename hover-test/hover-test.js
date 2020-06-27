
// Create small div
let redDiv = document.createElement("div");
redDiv.style.width = "50px";
redDiv.style.height = "50px";
redDiv.style.background = "orange";
redDiv.style.position = "absolute"

// Create an HTML collection of immediate children of <body> tag
let y = document.body.children;

// Add small div to element
for (let i = 0; i < y.length; i++) {
    y[i].onmouseover = function () {
        this.appendChild(redDiv);
    };
}
