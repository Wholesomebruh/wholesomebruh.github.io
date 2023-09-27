function copyToClipboard() {
    var textToCopy = "cocc1274@gmail.com";
  
    var tempInput = document.createElement("input");
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  
    alert("Text copied to clipboard");
  }