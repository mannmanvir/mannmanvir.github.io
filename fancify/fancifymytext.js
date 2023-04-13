const alerting = function() {
    alert("Hello, world!");
  }
  
  const textBox = document.getElementById('textBox')
  const boringButton = document.getElementById('boringButton')
  const fancyButton = document.getElementById('fancyButton')
  
  const bigger = function() {
    textBox.style.fontSize = "2em";
  }
  
  const styles = function() {
    textBox.style.fontWeight = "bold";
    textBox.style.color = "blue";
    textBox.style.textDecoration = "underline";
    boringButton.checked = false;
  }
  const unstyles = function() {
    textBox.style.fontWeight = 'normal'
    textBox.style.color = "black";
    textBox.style.textDecoration = "none";
    boringButton.checked = true;
    fancyButton.checked = false;
  }

  const upper = function() {
    var parts = document.getElementById("textBox").value;
    parts = parts.split(".");
    parts = parts.join("-moo ");
    document.getElementById("textBox").value = parts;
    }   