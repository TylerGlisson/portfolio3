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

// Smooth Scrolling from Traversy
// TODO  Remove jQuery
// let 
// document.querySelector('.cf a').on('click', function(event) {
//   if(this.hash !== '') {
//     event.preventDefault();

//     const hash = this.hash;

//     document.querySelector('html, body').animate (
//       {
//         scrollTop: $(hash).offset().top
//       },
//       800,
//       function() {
//         window.location.hash = hash;
//       }
//     );
//   }
// });