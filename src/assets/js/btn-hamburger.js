    const btn_menu = document.getElementById("btn-menu")
    const btnCloseMenuAbout = document.getElementById("closeMenuMobileAbout")
    const btnCloseMenuProject = document.getElementById("closeMenuMobileProject")
    const btnCloseMenuContact = document.getElementById("closeMenuMobileContact")
    const line1 = document.getElementById("line1")
    const line2 = document.getElementById("line2")
    const line3 = document.getElementById("line3")
    // const menu = document.getElementById("menu")

btn_menu.addEventListener("click", ()=>{
    line1.classList.toggle("toggleActiveLine1")
    line2.classList.toggle("toggleActiveLine2")
    line3.classList.toggle("toggleActiveLine3")
})
btnCloseMenuAbout.addEventListener("click", ()=>{
    line1.classList.toggle("toggleActiveLine1")
    line2.classList.toggle("toggleActiveLine2")
    line3.classList.toggle("toggleActiveLine3")
})
btnCloseMenuProject.addEventListener("click", ()=>{
    line1.classList.toggle("toggleActiveLine1")
    line2.classList.toggle("toggleActiveLine2")
    line3.classList.toggle("toggleActiveLine3")
})
btnCloseMenuContact.addEventListener("click", ()=>{
    line1.classList.toggle("toggleActiveLine1")
    line2.classList.toggle("toggleActiveLine2")
    line3.classList.toggle("toggleActiveLine3")
})



