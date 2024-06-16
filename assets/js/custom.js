// Scroll Trigger
const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const texts = gsap.utils.toArray(".anim");
const mask = document.querySelector(".mask");
const mayLikeProInners = gsap.utils.toArray(".may-like-pro-inner");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    end: "+=3000",
    markers: false,
  },
});

// Progress bar animation
gsap.to(mask, {
  width: "100%",
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top left",
    scrub: 1,
  },
});

// Text animation
sections.forEach((section, index) => {
  let text = section.querySelectorAll(".anim");

  if (text.length === 0) return;

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

  // Add active class to corresponding .may-like-pro-inner
  gsap.to({}, {
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween,
      start: "left center",
      end: "right center",
      onEnter: () => {
        mayLikeProInners.forEach((div, i) => {
          if (i === index) {
            div.classList.add("active");
          } else {
            div.classList.remove("active");
          }
        });
      },
      onLeaveBack: () => {
        mayLikeProInners.forEach((div, i) => {
          if (i === index - 1) {
            div.classList.add("active");
          } else {
            div.classList.remove("active");
          }
        });
      },
    },
  });
});

// Initialize active class on page load based on scroll position
function setActiveClassOnLoad() {
  let scrollPos = window.pageYOffset;
  let containerRect = container.getBoundingClientRect();
  let containerStart = containerRect.left + window.pageXOffset;

  sections.forEach((section, index) => {
    let sectionRect = section.getBoundingClientRect();
    let sectionStart = sectionRect.left + window.pageXOffset - containerStart;
    let sectionEnd = sectionStart + sectionRect.width;

    if (scrollPos >= sectionStart && scrollPos < sectionEnd) {
      mayLikeProInners.forEach((div, i) => {
        if (i === index) {
          div.classList.add("active");
        } else {
          div.classList.remove("active");
        }
      });
    }
  });
}

window.addEventListener('load', () => {
  setActiveClassOnLoad();
  ScrollTrigger.refresh();
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

// Product details
const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem, index) => {
  imgItem.addEventListener("click", (event) => {
    event.preventDefault();
    imgId = imgItem.dataset.id;
    slideImage();
  });
});

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;

  // Remove active class from all images
  document.querySelectorAll(".img-showcase img").forEach((img) => {
    img.classList.remove("active");
  });

  // Add active class to the current image
  document
    .querySelector(`.img-showcase img:nth-child(${imgId})`)
    .classList.add("active");

  // Slide the images (this part is optional if you're hiding/showing images with classes)
  // document.querySelector(".img-showcase").style.transform = `translateX(${
  //   -(imgId - 1) * displayWidth
  // }px)`;
}

// Call slideImage on page load to set the initial state
document.addEventListener("DOMContentLoaded", slideImage);

window.addEventListener("resize", slideImage);

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
      800: {
        items: 2,
      },
      1118: {
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
      800: {
        items: 2,
      },
      1118: {
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
      800: {
        items: 2,
      },
      1118: {
        items: 3,
      },
    },
  });
});
