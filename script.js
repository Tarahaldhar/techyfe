document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const toggleIcon = document.getElementById("toggle-icon");
  
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
  
      if (navLinks.classList.contains("active")) {
        toggleIcon.classList.remove("fa-bars");
        toggleIcon.classList.add("fa-times");
      } else {
        toggleIcon.classList.remove("fa-times");
        toggleIcon.classList.add("fa-bars");
      }
    });
  });
  

//   ------------------testimonil---------
const swiper = new Swiper(".testimonial-carousel", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });