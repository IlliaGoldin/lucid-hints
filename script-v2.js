// ?templatehints=magento
let debuggingHints = document.getElementsByClassName("debugging-hints");

let debugginHintsTmpltFiles = document.getElementsByClassName(
  "debugging-hint-template-file"
);

// add a unique id attribute to each element using the following format "prefix-number"
// where "prefix" is a string passed as first argument and "number" is index of an element in array passed as second argument
// accepts a string as first argument and array or html collection as second argument
function assignUniqueId(prefix, elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].setAttribute("id", `${prefix}-${i}`);
  }
}

// add a unique id attribute to each element with .debugging-hint-template-file class
assignUniqueId("debugHintTmpltFile", debugginHintsTmpltFiles);

// create a map of element ids with its innerHtml
// uses element's id attribute as keys
// accepts array or html collection as an argument
function mapIdsToInnerHtml(elements) {
  let mapElements = new Map();

  for (let i = 0; i < elements.length; i++) {
    mapElements.set(`${elements[i].id}`, elements[i].innerHTML);
  }
}

// create a map of template hint ids and its innerHtml
let templatePaths = mapIdsToInnerHtml(debugginHintsTmpltFiles);

// add identifiers and bring html to initial state
// use forEach?
for (let i = 0; i < debuggingHints.length; i++) {
  // get id of current template hint file
  let tmplt = debuggingHints[i];
  let tmpltHint = tmplt.getElementsByClassName(
    "debugging-hint-template-file"
  )[0];
  let tmpltHintId = tmpltHint.id;

  // remove divs with .debugging-hint-template-file
  tmpltHint.parentNode.removeChild(tmpltHint);
  //

  // add classes to children
  for (let i = 0; i < tmplt.children.length; i++) {
    tmplt.children[i].classList.add("rendered-by-template", `${tmpltHintId}`);
  }

  //unwrap all elements wrapped in .debugging-hints div
}

// remove empty divs with .debugging-hints
// maybe it only removes the first child that fits the discription. Try simplifying the environment and test in it
for (let i = 0; i < debuggingHints.length; i++) {
  let debuggingHint = debuggingHints[i];
  debuggingHint.parentNode.removeChild(debuggingHint);
  console.log(i, debuggingHint);
}
