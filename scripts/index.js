//document.getElementById('result').innerHTML = "Hello Paragraph!";

//caeserCipher()
function caeserCipher(text, shift) {
    let result = "";
    for(let i = 0; i < text.length; i++) {
        let char = text.charAt(i);
        if(char.match(/[a-z]/i)) {
            let isUpperCase = char === char.toUpperCase();
            let shiftedChar = String.fromCharCode((char.charCodeAt(0) + shift - (isUpperCase ? 65 : 97)) % 26 + (isUpperCase ? 65 : 97));
            result += shiftedChar;
        }
        else {
            result += char;
        }
    }
    return result;
}

//encryptText()
function encryptText() {
    let inputText = document.getElementById('inputText').value;
    let shiftValue = parseInt(document.getElementById('shiftValue').value);

    if(!isNaN(shiftValue)) {
        let encryptedText = caeserCipher(inputText, shiftValue);
        document.getElementById('result').innerText = `Encrypted Text: ${encryptedText}`;
    }
    else {
        document.getElementById('result').innerText = "Please enter a valid shift value!";
    }
}