var btnTranslate= document.querySelector("#btn-Translate");
var txtInput= document.querySelector("#txt-input");
var outputDiv= document.querySelector("#output");
btnTranslate.addEventListener("click", clickevent )

var userURl= "https://api.funtranslations.com/translate/minion.json"

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
        .then(response=>response.json())
        .then(json=>{
            var translatedText= json.contents.translated
            outputDiv.innerText= translatedText;
        })
        .catch(errorHandler);
    }