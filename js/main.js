// TODO create app function and tidy up functions into singular app()


// navbar and burger toggle from Dev Ed YouTube
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  // Toggle nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    // Animate links in
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      }
      else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    // Burger Animation 
    burger.classList.toggle('toggle');
  });

}

navSlide();

// window.addEventListener('DOMContentLoaded', (event) => {
//   var deviceAgent = navigator.userAgent.toLowerCase();
//   var agentID = deviceAgent.match(/(iPad|iPhone|iPod)/i);
//   if (agentID) {       
//     let scrolling = document.querySelector('body');
//     scrolling.style.cssText += "'-webkit-overflow-scrolling', 'touch'"; 
//   }
// });

$(document).ready(function(){
  var deviceAgent = navigator.userAgent.toLowerCase();
  var agentID = deviceAgent.match(/(iPad|iPhone|iPod)/i);
  if (agentID) {       
     $('body').css('-webkit-overflow-scrolling', 'touch');
  }
});