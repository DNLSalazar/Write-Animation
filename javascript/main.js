var i = 0;
var arrayWords = ["Awesome", "Brilliant", "Simple", "Elegant", "Functional", "Whatever you want it to be"];
var wordElement = document.getElementById("word");
var currentWord = wordElement.innerHTML;
var status = 0;

window.addEventListener("load", function () {
  setInterval(animation, 150);
});


function animation () {
  if (status == 0) {
    if (currentWord.length < arrayWords[i].length) {
      currentWord += arrayWords[i].slice(currentWord.length, currentWord.length+1);
      wordElement.innerHTML = currentWord;
    } else {
      status = 1;
      return;
    }
  } else {
    if (currentWord.length > 0 && status == 1) {
      currentWord = currentWord.slice(0, currentWord.length - 1);
      wordElement.innerHTML = currentWord;
    } else {
      i++;
      if(i == arrayWords.length) i = 0;
      status = 0;
      return;
    }
  }
}