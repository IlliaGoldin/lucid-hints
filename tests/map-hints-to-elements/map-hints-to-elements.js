// create a collection of elements with .debugging-hint-template-file class
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
    return mapElements;
}

// create a map of template hint ids to its innerHtml
let templatePaths = mapIdsToInnerHtml(debugginHintsTmpltFiles);

// create a collection of elements with .debugging-hints class
let debuggingHints = document.getElementsByClassName(
    "debugging-hints"
);

//////
// get element from collection
let el = debuggingHints[0];
// get elements children
let elChildren = el.children;
// create an array from children
let elChildrenArr = Array.from(elChildren);
console.log(elChildrenArr);
// get id of div with class .debugging-template-hint-file
let id = "";
for (let i = 0; i < elChildrenArr.length; i++) {
    if (elChildrenArr[i].classList.contains("debugging-hint-template-file")) {
        id = elChildrenArr[i].id;
    }
}

// get all children besides element.debuggint-template-hint-file
let elChildrenArrClean = elChildrenArr.filter(function (el) {
    if (el.classList.contains("debugging-hint-template-file")) {
        return
    }
    return el;
});

// assign class = id of above based on filter "id not equal debugging-template-hint-file id"
elChildrenArrClean.map(x => x.classList.add(id));


// create an array of immediate children of an element (in our case children of .debugging-hints div)
for (let i = 0; i < debuggingHints.length; i++) {

}
// search array above for element with .debugging-hint-tepmlate-file class and grab its id

// filter array by !id and assign class = id to each element which fits the criteria