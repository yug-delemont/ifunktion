// Scroll Trigger
const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const texts = gsap.utils.toArray(".anim");
const mask = document.querySelector(".mask");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    end: "+=3000",
    //snap: 1 / (sections.length - 1),
    markers: false,
  },
});

console.log(1 / (sections.length - 1));

//Progress bar animation
gsap.to(mask, {
  width: "100%",
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top left",
    scrub: 1,
  },
});

// whizz around the sections
sections.forEach((section) => {
  // grab the scoped text
  let text = section.querySelectorAll(".anim");

  // bump out if there's no items to animate
  if (text.length === 0) return;

  // do a little stagger
  gsap.from(text, {
    y: -130,
    opacity: 0,
    duration: 2,
    ease: "elastic",
    stagger: 0.1,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween,
      start: "left center",
      markers: false,
    },
  });
});

// Hamburger menu
document
  .querySelector(".navbar-toggler")
  .addEventListener("click", function () {
    document.querySelector("html").classList.toggle("show-menu");
  });

//   document.querySelector("#des-minus").addEventListener("click", function() {
//     var htmlElement = document.querySelector("#des-para");
//     if (htmlElement.style.visibility === "hidden") {
//         htmlElement.style.visibility = "visible";
//     } else {
//         htmlElement.style.visibility = "hidden";
//     }
// });


$(document).ready(function () {
  $("#convenient").owlCarousel({
    loop: true,
    margin: 32,
    nav: true,
    navText: [
      "<img src='./assets/images/slider-left-arrow.svg'>",
      "<img src='./assets/images/slider-right-arrow.svg'>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $("#testimonials").owlCarousel({
    loop: true,
    margin: 32,
    nav: true,
    dots: true,
    navText: [
      "<img src='./assets/images/slider-left-arrow.svg'>",
      "<img src='./assets/images/slider-right-arrow.svg'>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $("#pro-sport-slider").owlCarousel({
    loop: true,
    margin: 32,
    nav: true,
    dots: true,
    navText: [
      "<img src='./assets/images/slider-left-arrow.svg'>",
      "<img src='./assets/images/slider-right-arrow.svg'>",
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});