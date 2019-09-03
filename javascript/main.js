window.addEventListener("load", function () {
  var arrayWords = ["Ogre", "Windranger", "OD", "Pudge", "Mirana", "Invoker"];
  var wordElement = document.getElementById("word");
  var currentWord = wordElement.innerHTML;
  var status = false;
  setInterval(animation, 150, wordElement, currentWord, arrayWords, status);
});


function animation (wordElement, currentWord, arrayWords, status) {
  if (status);
}