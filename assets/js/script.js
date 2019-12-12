const btn = document.querySelector("#toggle-link")
const angleIcon = btn.querySelector(".angle-icon")
const links = document.querySelector("#links")
btn.addEventListener('click', function(event) {

  if (!links.classList.contains("active")) {
    //Tornando icones actives
    links.classList.add("active")
    angleIcon.classList.remove("fa-angle-down")
    angleIcon.classList.add("fa-angle-up")
  } else {
    //Escondendo icones
    links.classList.add("hiding")
    links.classList.remove("active")
    setTimeout(function() {
      links.classList.remove("hiding")
      angleIcon.classList.remove("fa-angle-up")
      angleIcon.classList.add("fa-angle-down")
    }, 300)
  }
})