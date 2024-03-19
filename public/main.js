const topMenu = document.getElementById('dd-top-menu')
const toggleTopMenu = document.getElementById('dd-toggle-top-menu-icon')

document.addEventListener('click', (e) => {
  if(toggleTopMenu.contains(e.target)) {
    //Click to toggle top menu icon
    topMenu.classList.toggle('dd-top-menu-expanded')
    topMenu.classList.toggle('hidden')
  } else{
    //click outside from toggle menu icon
    if(topMenu.classList.contains('dd-top-menu-expanded')){
      topMenu.classList.remove('dd-top-menu-expanded')
      topMenu.classList.add('hidden')
    }
  }
})