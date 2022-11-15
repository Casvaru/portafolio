const btnActiveModal = document.getElementById("box3")
const btnCloseModal = document.getElementById("closeModal")
const modal = document.getElementById("modal")
const btnMobileContact = document.getElementById("closeMenuMobileContact")

    btnActiveModal.addEventListener("click", ()=>{
        modal.classList.toggle("modalActive")
    })
    btnCloseModal.addEventListener("click", ()=>{
        modal.classList.toggle("modalActive")
    })
    btnMobileContact.addEventListener("click", ()=>{
        modal.classList.toggle("modalActive")
    })