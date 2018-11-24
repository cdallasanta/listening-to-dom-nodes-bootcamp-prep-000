// using this file is optional
// you can also load the code snippets in using your browser's console
function toggleColor(target){
  if(target.style.backgroundColor === "red"){
    target.style.backgroundColor = "white";
  } else {
    target.style.backgroundColor = "red";
  }
}

document.addEventListener('click', function(event){
  if(event.target.tagName === "DIV"){
    toggleColor(event.target);
  }
});