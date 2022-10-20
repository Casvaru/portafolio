const slider1 = document.getElementById("slider1")
const slider2 = document.getElementById("slider2")
// const slider3 = document.getElementById("slider3")
// const btnLeft = document.getElementById("btnLeft")
const btnRight = document.getElementById("btnRight")

const numberSliders = [slider1, slider2]
let positionSlider = 1

btnRight.addEventListener("click", ()=>{
    if(positionSlider === 1){
        slider2.classList.add("gallerySlider--active")
        slider1.classList.add("gallerySlider--noActive")
    } else{
        slider2.classList.remove("gallerySlider--active")
    }
    if(positionSlider === 2){
        // slider3.classList.add("gallerySlider--active")
        slider1.classList.remove("gallerySlider--noActive")
    } else{
        // slider3.classList.remove("gallerySlider--active")
    }
    if(positionSlider === 0){
        positionSlider = 4
    }
    if(positionSlider === 2){
        positionSlider = 0
    }
    positionSlider ++
})