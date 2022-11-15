const btnMenu = document.getElementById("btn-menu")
const btnCloseMenuMobileAbout = document.getElementById("closeMenuMobileAbout")
const btnCloseMenuMobileProject = document.getElementById("closeMenuMobileProject")
const btnCloseMenuMobileContact = document.getElementById("closeMenuMobileContact")
const menuMobile = document.getElementById("menuMobile")

btnMenu.addEventListener("click", ()=>{
    menuMobile.classList.toggle("menuMobile--active")
})
// Menu Mobile close on click

btnCloseMenuMobileAbout.addEventListener("click", ()=>{
    menuMobile.classList.toggle("menuMobile--active")
})
btnCloseMenuMobileProject.addEventListener("click", ()=>{
    menuMobile.classList.toggle("menuMobile--active")
})
btnCloseMenuContact.addEventListener("click", ()=>{
    menuMobile.classList.toggle("menuMobile--active")
})