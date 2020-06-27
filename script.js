// resets inline styles of a div
// function

// reset styles of each div with .debugging-hints class

// reset styles

// add position relative
// function

// add position relative to each div with .debugging-hints class

//run only after page fully rendered

let templatePathlCollection = document.getElementsByClassName(
  "debugging-hint-template-file"
);

//create a map template id => 'template path'
let templateHints = new Map();

for (let i = 0; i < templatePathlCollection.length; i++) {
  //add unique id's to each template hint
  templatePathlCollection[i].setAttribute("id", `template-${i}`);
  //populate map with template hint unique id's => paths
  templateHints.set(`template-${i}`, templatePathlCollection[i].innerHTML);
  //replace inner html with unique id's serial number
  templatePathlCollection[i].innerHTML = i;
}

let teml;
//create a page with data from templateHints map

//redesign UX/UI
