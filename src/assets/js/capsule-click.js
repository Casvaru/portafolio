const capsule1 = document.getElementById("capsule1")
const capsule2 = document.getElementById("capsule2")
const capsule3 = document.getElementById("capsule3")
const paragraph1 = document.getElementById("paragraph1")
const paragraph2 = document.getElementById("paragraph2")
const paragraph3 = document.getElementById("paragraph3")

    capsule1.addEventListener("click", ()=>{
        capsule1.classList.add("containerSecond__capsule--active")
        capsule2.classList.remove("containerSecond__capsule--active")
        capsule3.classList.remove("containerSecond__capsule--active")

        paragraph1.classList.add("containerSecond__paragraph--active")
        paragraph2.classList.remove("containerSecond__paragraph--active")
        paragraph3.classList.remove("containerSecond__paragraph--active")
    })
    capsule2.addEventListener("click", ()=>{
        capsule1.classList.remove("containerSecond__capsule--active")
        capsule2.classList.add("containerSecond__capsule--active")
        capsule3.classList.remove("containerSecond__capsule--active")

        paragraph1.classList.remove("containerSecond__paragraph--active")
        paragraph2.classList.add("containerSecond__paragraph--active")
        paragraph3.classList.remove("containerSecond__paragraph--active")
    })
    capsule3.addEventListener("click", ()=>{
        capsule1.classList.remove("containerSecond__capsule--active")
        capsule2.classList.remove("containerSecond__capsule--active")
        capsule3.classList.add("containerSecond__capsule--active")

        paragraph1.classList.remove("containerSecond__paragraph--active")
        paragraph2.classList.remove("containerSecond__paragraph--active")
        paragraph3.classList.add("containerSecond__paragraph--active")
    })