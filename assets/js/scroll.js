var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    mousewheel: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 1,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    on: {
      slideChange: function () {
        updateActiveClass(swiper.activeIndex);
        toggleMousewheel(swiper.activeIndex);
      },
    },
  });
  
  // Function to update active class
  function updateActiveClass(activeIndex) {
    const items = document.querySelectorAll(".may-like-pro-inner");
    items.forEach((item, index) => {
      if (index === activeIndex) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }
  
  // Function to enable or disable mousewheel control
  function toggleMousewheel(activeIndex) {
    const lastSlideIndex = swiper.slides.length - 1;
    if (activeIndex === lastSlideIndex) { // Last slide index
      swiper.mousewheel.disable();
      window.addEventListener('wheel', handleScrollNextSection);
    } else {
      swiper.mousewheel.enable();
      window.removeEventListener('wheel', handleScrollNextSection);
    }
  }
  
  // Function to handle scrolling to the next section
  function handleScrollNextSection(event) {
    // if (event.deltaY > 0) {
    //   // Scroll down to the next section
    //   document.querySelector('.convenient-sec').scrollIntoView({ behavior: 'smooth' });
    // }
  }
  
  // Initial active class setting
  updateActiveClass(swiper.activeIndex);
  toggleMousewheel(swiper.activeIndex);

  // Add click event listeners to .may-like-pro-inner elements
document.querySelectorAll(".may-like-pro-inner").forEach((item, index) => {
    item.addEventListener("click", () => {
      swiper.slideTo(index);
    });
  });

  // Global scroll event listener to detect scroll direction and enable mousewheel
window.addEventListener('wheel', (event) => {
  if (event.deltaY < 0) {
    // Scroll direction is upwards (bottom to top)
    swiper.mousewheel.enable();
  }
});