/*  For Tiny Screens & Tiny Tvs: 
Here we have the function to toggle mobile menu 
when the function is called, it checks whether the
menu element has the class name active or not.
If it does not have the class name, the function adds it,
and if it does have the class name, the function removes it.
We use this to hide elements or apply styles to them */
function toggleMenu() {
  const menu = document.get.querySelector('.menu');
  menu.classList.toggle('active');
}

// Adding event listener to mobile menu button
const menuButton = document.get.querySelector('.menu-button'); //querySelector method selects an HTML element with a class of .menu-button
menuButton.clickEvent.addEventListener('click', toggleMenu);
 //method listens for a click event on the selected button and will trigger the toggleMenu function
// if the menu is closed it will open it and vice versa

// *** NAV LINKS ***
// Selecting all the navigation links
const links = document.get.querySelectorAll('.nav-links li a');

// Attaching an event listener to each navigation link
for (const link of links) {
  link.addEventListener('click', smoothScroll);
}

// This function will allow the user to smoothly scroll to a section on link click
function smoothScroll(event) {
    // Prevents the default behavior of the link click
  event.preventDefault();
  const target = this.getAttribute('href');
  const section = document.querySelector(target);
  const sectionPosition = section.offsetTop;
  window.scrollTo({
    top: sectionPosition,
    behavior: 'smooth'
  });
}
  // Gets the section ID from the href attribute of the clicked link
  const target = this.getAttribute('href');

  // Selects the section with the corresponding ID
  const section = document.querySelector(target);

  // Gets the top position of the section
  const sectionPosition = section.offsetTop;

  // Scrolls smoothly to the section using the window.scrollTo() method
  window.scrollTo({
    top: sectionPosition,
    behavior: 'smooth'
  });

// Looping through all the links and adding an event listener for when it is clicked
for (const link of links) {
  link.addEventListener('click', smoothScroll); 
}

// *** BLOG POSTS ***
// Adding event listeners to each blog post 
// we set up the functionality to expand and collapse the details of each blog post when the user clicks on its title.
const posts = document.querySelectorAll('.post');
for (const post of posts) {
  const title = post.querySelector('.title');
  title.addEventListener('click', toggleDetails);
}

// This function will show/hide blog post details
function toggleDetails(event) {
  const post = event.target.closest('.post'); //  the closest method gets the closest ancestor element of the clicked element that has a class of 'post' AKA it finds the blog post that was clicked.
  const details = post.querySelector('.details'); //This gets the first element inside the blog post that has a class of details
  details.classList.toggle('active'); //This toggles the active class on the details element, which will show or hide it depending on its current state.
}

// This code block initializes the Animate On Scroll (AOS) JS library to apply animations to elements as they come into view on the webpage.
AOS.init({
  duration: 800, // Sets the duration of the animation in milliseconds.
  easing: 'ease-in-out', // Sets the easing function used for the animation.
  once: true // Sets whether the animation should only occur once or repeat as elements come in and out of view.
});







