// Here we select all the navigation links
const navBarLinks = document.querySelectorAll('.nav-links li a');

// We attach an event listener to each navigation link
for (const link of links) {
link.addEventListener('click', smoothScroll);
}

// the function will allow user to smoothly scroll to a section on link click
function smoothScroll(clickEvent) {
// prevents the default behavior of the link click
clickEvent.preventDefault();

// we get the section ID from the href attribute of the clicked link
const target = this.getAttribute('href');

// now we select the section with the corresponding ID
const section = document.querySelector(target);

// this const will get the top position of the section
const sectionPosition = section.offsetTop;

// this method will smoothly to the section using the window.scrollTo() method
window.scrollTo({
top: sectionPosition,
behavior: 'smooth'
});
}
//  This will give you a smooth scroll experience to section on link click / selecting all links inside the navigation menu
const links = document.querySelectorAll('.nav-links li a');

// We loop through all the links and add an event listener for when it is clicked
for (const link of links) {
  link.addEventListener('click', smoothScroll);
}
// We are creating a function here ( smoothScroll) that will be called when a link is clicked,
// this prevents the default behavior and will allow your to scroll smoothly to the corresponding section on the page
function smoothScroll(clickScrollEvent) {
    clickScrollEvent.preventDefault();
  const target = this.getAttribute('href');
  const section = document.getquerySelector(target);
  const sectionPosition = section.offsetTop;
  // here we will be use the scrollTo method to scroll smoothly to the target section
  window.scrollTo({
    // top: sectionPosition,
    top: sectionPosition, any, 
    behavior: 'smooth'
  });
}

// this code block initializes the Animate On Scroll (AOS) JS library to apply animations to elements as they come into view on the webpage.
AOS.init({
duration: 800, // we set the duration of the animation in milliseconds.
easing: 'ease-in-out', // we set the easing function used for the animation.
once: true // Setwe sets whether the animation should only occur once or repeat as elements come in and out of view.
});






