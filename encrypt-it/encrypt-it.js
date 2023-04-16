(function() {
  "use strict";

  const textArea = document.querySelector("#input-text");
  const encryptButton = document.getElementById("encrypt-it");
  const increaseSize = document.getElementById("24pt");
  const makeCapital = document.querySelector("#all-caps");
  const result = document.querySelector("#result");
  const resetButton = document.getElementById('reset');

  window.addEventListener("load", init);

  function init() {
    console.log("Window loaded!");
    encryptButton.addEventListener("click", () => {
      shiftCipher(textArea.value);
    });
    resetButton.addEventListener("click", resetResult);
  }

  function shiftCipher(text) {
    text = text.toLowerCase();

    let res = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < "a" || text[i] > "z") {
        res += text[i];
      } else if (text[i] == "z") {
        res += "a";
      } else {
        var letter = text.charCodeAt(i);
        res += String.fromCharCode(letter + 1);
      }
    }
    if (makeCapital.checked) {
      res = res.toUpperCase();
    }
    if (increaseSize.checked) {
      result.style.fontSize = "24pt";
    } else {
      result.style.fontSize = "12pt";
    }
    result.innerHTML = res;
    return res;
  }

  function resetResult() {
    textArea.value = "";
    makeCapital.checked = false;
    increaseSize.checked = false;
    result.innerHTML = "";
  }  
})();