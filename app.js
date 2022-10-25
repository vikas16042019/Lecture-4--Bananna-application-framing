var btnTranslate= document.querySelector("#btn-Translate");
var txtInput= document.querySelector("#txt-input");

btnTranslate.addEventListener("click", clickevent )

function clickevent()
{
    console.log("Clicked");
    console.log("Input", txtInput.value);
}