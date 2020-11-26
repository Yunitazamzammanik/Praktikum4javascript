const untukul = document.querySelector("ul")
const untukinput = document.querySelector("input")
const untukbutton = document.querySelector("button")
const untulli = document.createElement("li")

untukbutton.addEventListener("click",function(){
    const untukli = document.createElement("ul");
    const isiinput = document.createTextNode(untukinput.value);
    untukli.appendChild(isiinput);
    untukul.appendChild(untukli);
    untukinput.value =""

});
