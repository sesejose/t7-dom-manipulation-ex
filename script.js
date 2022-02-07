//Write your own code here
//DON'T touch any other files!

const brs = document.querySelectorAll("br");

brs.forEach(removeElement);

function removeElement(el) {
  el.remove();
}

/* ***************************** */

const sections = document.querySelectorAll("section");

sections.forEach(classIt);

function classIt(el) {
  el.classList.add("filled");
}

/* ***************************** */

const allSections = document.querySelectorAll("section");
//Here I select All the sections in the DOM

allSections.forEach(remove);
//Here I call a function forEach section

function remove(el) {
  //this is the function - with an argument called "el" (I am using this argument in the next const)

  const beforeSection = el.previousElementSibling;
  //Here I define a variable "beforeSection" that grab the previousElementSibling of the section selected in the first line;

  beforeSection.remove();
  // Then I remove those previous elements calling back the function remove().
  //"beforeSection" is equal to "el...sibling" and "el" is the argument/parameter defined in the function that makes reference to the previousElementSibling of "section" grabed in the begining in line 24.
}
