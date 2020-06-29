let templateHints = new Map();

for (let i = 0; i < templatePathlCollection.length; i++) {
  //add unique id's to each template hint
  templatePathlCollection[i].setAttribute("id", `template-${i}`);
  //populate map with template hint unique id's => paths
  templateHints.set(`template-${i}`, templatePathlCollection[i].innerHTML);
  //replace inner html with unique id's serial number
  templatePathlCollection[i].innerHTML = i;
}

// 1. Create collections 
//    1.1 Create a collection of elements with .debugging-hitns class 
//        Eventually you want to remove this div all together, since it does not seem to carry any value.
//        Remove it last after all other actions have taken place. Do i even need this collection to begin with?
//    1.2 Create a collection of elements with .debugging-hint-template-file class (debugHintTempalateFiles)
// 2. Create data maps based on debugHintTemplateFiles. 
//    2.1 Assign unique id to each item in collection.
//    2.2 Create map of id to innerHtml (in this case represents template file path).
// 3. Assign a class to each element that was rendered by a phtml file. .class-name = id of associated debugHintTemplateFiles element.
// NOTE: find out if elements that were not rendered by phtml file can appear inside .debugging-hints div
//    3.1 Collect elements inside each .debugging-hints div that are immediate siblings of a div with .debugging-template-hint-file class