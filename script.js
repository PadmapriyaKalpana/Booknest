var popoverlay = document.querySelector(".overlay")
var popupbox=document.querySelector(".popup")
var addpopup=document.getElementById("addpopbtn")
var popaddbook=document.getElementById("addbook")
var popdelbook=document.getElementById("delbook")
var container=document.querySelector(".container")
var nameval=document.getElementById("nameval")
var author=document.getElementById("author")
var description=document.getElementById("description")
var deletebtn=document.querySelector(".deletebtn")

addpopup.addEventListener("click",function(){
    popoverlay.style.display="block"
    popupbox.style.display="block"
})

popdelbook.addEventListener("click",function(event){
    event.preventDefault()
    popoverlay.style.display="none"
    popupbox.style.display="none"
})

popaddbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book")
    div.innerHTML=`<h2>${nameval.value}</h2> 
    <h5>${author.value}</h5> 
    <p>${description.value}</p>
    <button onclick='delbtn(event)' class="deletebtn">Delete</button>`
    container.append(div)
    popoverlay.style.display="none"
    popupbox.style.display="none"
    nameval.value = ""
    author.value = ""
    description.value = ""
})
function delbtn(event){
    event.target.parentElement.remove()
}