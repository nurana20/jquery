// let deleteButton=document.querySelector(".deletebutton")
// let sideBar=document.querySelector(".sidebar")
// let burgerIcon=document.querySelector(".burger")
// deleteButton.addEventListener("click",function(){
//     deleteButton.classList.add("open")
//     burgerIcon.classList.remove("open")
//     sideBar.classList.add("move")
//     document.querySelector("body").classList.add("light")
// })
// burgerIcon.addEventListener("click",function(){
//     deleteButton.classList.remove("open")
//     burgerIcon.classList.add("open")
//     sideBar.classList.remove("move")
//     document.querySelector("body").classList.remove("light")
// })
//----------------------------------------------------jquery---------------------------------------------------------
$(document).ready(function() {
let deleteButton=$(".deletebutton")
let sideBar=$(".sidebar")
let burgerIcon=$(".burger")
let boody=$("body")
deleteButton.on("click",function(){
    deleteButton.addClass("open")
    burgerIcon.removeClass("open")
    sideBar.addClass("move")
    boody.addClass("light")
})
burgerIcon.on("click",function(){
    deleteButton.removeClass("open")
    burgerIcon.addClass("open")
    sideBar.removeClass("move")
    boody.removeClass("light")
})
});