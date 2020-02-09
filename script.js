//Write your own code here
//DON'T touch any other files!
document.querySelectorAll("br").forEach(b => b.remove());
document.querySelectorAll("section").forEach(s => {
  s.classList.add("filled");
  s.previousElementSibling.remove();
});
