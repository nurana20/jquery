// let deleteButton=document.querySelector(".xbutton")
// let navbar=document.querySelector(".navbar")
// let burgerButton=document.querySelector(".burger")
// deleteButton.addEventListener("click",function(){
//     deleteButton.classList.add("none")
//     navbar.classList.add("move")
//     burgerButton.classList.remove("none")
// })
// burgerButton.addEventListener("click",function(){
//     deleteButton.classList.remove("none")
//     navbar.classList.remove("move")
//     burgerButton.classList.add("none")
// })

//----------------------------------jquery--------------------------------
$(document).ready(function() {

    let deleteButton = $(".xbutton");
    let navbar=$(".navbar")
    let burgerButton=$(".burger")
    deleteButton.on("click", function() {
    deleteButton.addClass("none")
    navbar.addClass("move")
    burgerButton.removeClass("none")
})
burgerButton.on("click", function() {
    deleteButton.removeClass("none")
    navbar.removeClass("move")
    burgerButton.addClass("none")
})
});