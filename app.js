let secondNavbar = document.querySelector(".navbar-2")

let hamburger = document.querySelector("#hamburger")
 let closeButton = document.querySelector("#closeButton")
closeButton.addEventListener("click", ()=>{
  hamburger.style.display = 'block'
  closeButton.style.display = 'none'

  secondNavbar.style.animation = 'slideOut 1s forwards'
})
hamburger.addEventListener("click", ()=>{
  closeButton.style.display = 'block'
  hamburger.style.display = 'none'
  secondNavbar.style.display = 'block'
  secondNavbar.style.animation = 'slideIn 1s forwards';
})
 