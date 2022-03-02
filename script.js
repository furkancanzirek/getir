const telNumberInput=document.querySelector(".number")
const telNumberInputAlertCircle=document.querySelector(".fa-circle-exclamation")
const telNumberAuthForm=document.querySelector(".authForm-number")
telNumberInput.addEventListener("focusout",(e)=>{
    e.preventDefault()
if (telNumberInput.value=="") {
    telNumberAuthForm.classList.add("alert")
    
}
})
telNumberInput.addEventListener("keydown",(e)=>{
    telNumberAuthForm.classList.remove("alert")
})