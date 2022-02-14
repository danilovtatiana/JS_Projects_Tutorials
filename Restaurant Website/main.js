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
