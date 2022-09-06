const boxIconMenu = document.getElementById("box1")
const textHiddenHover = document.getElementById("text1")
const boxIconMenu2 = document.getElementById("box2")
const textHiddenHover2 = document.getElementById("text2")
const boxIconMenu3 = document.getElementById("box3")
const textHiddenHover3 = document.getElementById("text3")

const menu = document.getElementById("menu")
    boxIconMenu.addEventListener("mouseover", showText, false)
    boxIconMenu.addEventListener("mouseout", hiddenText, false)
    boxIconMenu2.addEventListener("mouseover", showText2, false)
    boxIconMenu2.addEventListener("mouseout", hiddenText2, false)
    boxIconMenu3.addEventListener("mouseover", showText3, false)
    boxIconMenu3.addEventListener("mouseout", hiddenText3, false)
    function showText(){
        textHiddenHover.setAttribute("style", "opacity: 1;")
    }
    function hiddenText(){
        textHiddenHover.setAttribute("style", "opacity: 0;")
    }
    function showText2(){
        textHiddenHover2.setAttribute("style", "opacity: 1;")
    }
    function hiddenText2(){
        textHiddenHover2.setAttribute("style", "opacity: 0;")
    }
    function showText3(){
        textHiddenHover3.setAttribute("style", "opacity: 1;")
    }
    function hiddenText3(){
        textHiddenHover3.setAttribute("style", "opacity: 0;")
    }