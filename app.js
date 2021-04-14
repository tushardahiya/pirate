var buttonTranslate = document.querySelector("#buttonTranslate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/pirate.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

function clickHandler() {
  var inputText = textInput.value;

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch((err) => console.log(err));
}

buttonTranslate.addEventListener("click", clickHandler);
