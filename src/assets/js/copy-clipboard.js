const text = "contacto@casvaru.com"

 function copyToClipboard(text) {
    const elem = document.createElement('textarea');
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);
 }

 const btnCopy = document.getElementById("btnCopy")

 btnCopy.addEventListener("click", ()=>{
   btnCopy.classList.toggle("copiedSucess")
   setTimeout(() => {
      btnCopy.classList.toggle("copiedSucess")
   }, "2000");
 })