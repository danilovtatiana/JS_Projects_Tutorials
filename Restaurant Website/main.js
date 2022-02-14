// SHOW MENU

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  nav = document.getElementById(navId);

  //Validate that variables exists
  if (toggle && nav) {
    //add the show-menu class to the div tag with the nav_menu class
    toggle.addEventListener('click', () =>{
      nav.classList.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle', 'nav-menu')


// REMOVE MENU MOBILE

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  //when we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach( n => n.addEventListener('click', linkAction))
