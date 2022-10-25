var btnTranslate= document.querySelector("#btn-Translate");
var txtInput= document.querySelector("#txt-input");
var outputDiv= document.querySelector("#output");
btnTranslate.addEventListener("click", clickevent )

var userURl= "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getURL(text)
{
    return userURl+ "?" +"text=" + text;
}


function errorHandler(error)
{
    console.log("Error Occured",error);
    alert("Something Went Wrong !!! Try again later ");
}

function clickevent()
{
    var inputText= txtInput.value;
    fetch(getURL(inputText))
    .then(response => response.json)
    .then(json => console.log(json.contents.translated))
    .catch(errorHandler)
}