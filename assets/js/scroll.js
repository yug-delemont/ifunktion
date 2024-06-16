// Scroll Trigger
const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container > .heresecrion");
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
    snap: 1 / (sections.length - 1),
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
  gsap.to(
    {},
    {
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
    }
  );
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

window.addEventListener("load", () => {
  setActiveClassOnLoad();
  ScrollTrigger.refresh();
});