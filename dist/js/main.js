
/* Here I'm building hamburger menu open and close state with java script vanilla. Bassically if the menu is in use I'll see 'X' button of it's not in use I'll see the hamburger icon. By the way, every changes occur here we obser from the console for example by clicking the icon how the casses change  */



/* with the DOM collecting element from html and assign to constants, to use them in the function that I'll create.   */
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');



/* Set Initial State Of Menu, What I mean is overlay. What gonna be initial stuation of menu. I'll create a variable with true or false. When the hamburger menu active/open state will be true. When menu is closed state will be false by default. */
let showMenu = false;


// I need event listener to triger my menu, with click menu will toggle to do so I need a toggle function to toggle menu.
menuBtn.addEventListener('click', toggleMenu);


/* here  by adding close class I'll just see "X" when menu is open state the I can click the "X" to close menu as usual. In show state we'll see just normal hamburger menu icon.
navItems: More than one item, I put show class for each item with using loop.  */
function toggleMenu() {
  //Menu is OPEN state(true or not False)
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State ture means menu is opened/active/in usage then I must remove the 'close' state
    showMenu = true;

    // Else means menu State false(also by default is false=hamburger) means menu is not in usage icon is hamburger and we are looking content of page. To bring hamburger icon again naturally I should remove 'X'='close' and all other items.
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State false: We looking hamburger icon.
    showMenu = false;
  }
}
