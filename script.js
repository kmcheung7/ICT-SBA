//Hamburger Menu
const menu = document.querySelector('#mobile_menu');
const menuitems = document.querySelector('.nav');

// Display Mobile Menu
 const mobileMenu = () => {
      menu.classList.toggle('is-active');
      menuitems.classList.toggle('active');
 };

 menu.addEventListener('click', mobileMenu);


// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');

  const storyMenu = document.querySelector('#MV-ham-menu');
  const productMenu = document.querySelector('#ABOUT-ham-menu');
  const recipeMenu = document.querySelector('#CONTACT-ham-menu');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  /* adds 'highlight' class to my menu items
  if (window.innerWidth > 600 && scrollPos < 400) {
    mvMenu.classList.remove('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 600 && scrollPos < 880) {
    aboutMenu.classList.add('highlight');
    contactMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 600 && scrollPos < 2000) {
    contactMenu.classList.add('highlight');
    mvMenu.classList.remove('highlight');
    return;
  }
  */

  if ((elem && window.innerWIdth < 600 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);


 //  Close mobile Menu when clicking on a menu item
  const hideMobileMenu = () => {
      const menuBars = document.querySelector('.is-active');
      if (window.innerWidth <= 600 && menuBars) {
          menu.classList.toggle('is-active');
          menuitems.classList.remove('active');
      }
  };

  menuitems.addEventListener('click', hideMobileMenu);



// Music Video //
const thumbnails = document.querySelectorAll('.video-thumbnails img');
const video = document.querySelector('.video-youtube iframe');
const videoInfo = document.querySelector('.video-info');

thumbnails.forEach(function(thumbnail) {
 thumbnail.addEventListener('click', function() {
   const videoId = this.getAttribute('data-video-id');
   const thumbnailSrc = this.getAttribute('src');
   const videoTitle = this.getAttribute('alt');
   const videoDescription = this.getAttribute('data-description');
   video.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
   videoInfo.querySelector('h2').textContent = videoTitle;
   videoInfo.querySelector('p').textContent = videoDescription;
   thumbnails.forEach(function(thumbnail) {
     thumbnail.classList.remove('active');
   });
   this.classList.add('active');
 });
});

/*
// Photo Slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}*/

//Auto Slide 
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000);
} 

