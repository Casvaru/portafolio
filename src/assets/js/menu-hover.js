const boxIconMenu = document.querySelector(".btn1")
const textHiddenHover = document.getElementById("text1")
const boxIconMenu2 = document.querySelector(".btn2")
const textHiddenHover2 = document.getElementById("text2")
const boxIconMenu3 = document.getElementById("box3")
const textHiddenHover3 = document.getElementById("text3")
const btnHome = document.getElementById("home")

const boxIconMenuMobile = document.querySelector(".btnM1")
const boxIconMenuMobile2 = document.querySelector(".btnM2")

const section =  document.getElementById("section1")
const section2 =  document.getElementById("section2")
const section3 =  document.getElementById("section3")

boxIconMenuMobile.addEventListener("click" , ()=>{
    boxIconMenu.classList.add("boxActive")
    boxIconMenu2.classList.remove("boxActive")

    section2.classList.add("showSection2")
    section.classList.add("hiddenSection")
    section3.classList.remove("showSection3")
})
boxIconMenuMobile2.addEventListener("click" , ()=>{
    boxIconMenu.classList.remove("boxActive")
    boxIconMenu2.classList.add("boxActive")
    section3.classList.add("showSection3")
    section.classList.add("hiddenSection")
    section2.classList.remove("showSection2")
})

//---------------------------------------------//

const menu = document.getElementById("menu")

    boxIconMenu.addEventListener("mouseout", showText)
    boxIconMenu.addEventListener("mouseover", hiddenText)
    boxIconMenu2.addEventListener("mouseout", showText2)
    boxIconMenu2.addEventListener("mouseover", hiddenText2)
    boxIconMenu3.addEventListener("mouseout", showText3)
    boxIconMenu3.addEventListener("mouseover", hiddenText3)
    function showText(){
        textHiddenHover.setAttribute("class", "menu__text")
    }
    function hiddenText(){
        textHiddenHover.setAttribute("class", "hiddenText menu__text")
    }
    function showText2(){
        textHiddenHover2.setAttribute("class", "menu__text")
    }
    function hiddenText2(){
        textHiddenHover2.setAttribute("class", "hiddenText menu__text")
    }
    function showText3(){
        textHiddenHover3.setAttribute("class", "menu__text")
    }
    function hiddenText3(){
        textHiddenHover3.setAttribute("class", "hiddenText menu__text")
    }