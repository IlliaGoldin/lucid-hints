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
