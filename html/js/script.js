/* to automatically the year in the footer section */

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

//make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

console.log("biniam");
console.log(6);

// sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    //in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEl);

// e-commerce, category visible, and hiding

/*

document.addEventListener("DOMContentLoaded", () => {
  const cardsContainer = document.querySelector(".category-cards");
  const cards = document.querySelectorAll(".card");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  let currentIndex = 0;

  function getVisibleCards() {
    return window.innerWidth <= 884 ? 3 : 4;
  }

  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 15; // Include margin
    const visibleCards = getVisibleCards();
    const maxScrollLeft = (cards.length - visibleCards) * cardWidth;
    const scrollLeft = currentIndex * cardWidth;
    cardsContainer.scrollLeft = Math.min(scrollLeft, maxScrollLeft);
  }

  function handleResize() {
    currentIndex = 0; // Reset to first slide on resize
    updateCarousel();
  }
  


  rightArrow.addEventListener("click", () => {
    const visibleCards = getVisibleCards();
    if (currentIndex < cards.length - visibleCards) {
      currentIndex++;
      updateCarousel();
    }
  }); 
  
  leftArrow.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  window.addEventListener("resize", handleResize);

  // Initial update
  updateCarousel();
}); */

// e-commerce, testimonial
/*


document.addEventListener("DOMContentLoaded", () => {
  const testimonialContainer = document.querySelector(".list-testimonial");
  const testimonials = document.querySelectorAll(".testimonial");
  const prevButton = document.querySelector(".navigation-arrows .prev");
  const nextButton = document.querySelector(".navigation-arrows .next");

  let currentToken = 0;

  // Example: Adding event listeners to test the buttons
  prevButton.addEventListener("click", () => {
    console.log("Previous button clicked");
  });

  nextButton.addEventListener("click", () => {
    console.log("Next button clicked");
  });

  function getVisibleTestimonials() {
    return window.innerWidth <= 884 ? 2 : 3;
  }

  
  function updateTestimonialPosition() {
    const testimonialWidth = testimonials[0].offsetWidth + 15; // Width + gap
    const offset = currentToken * testimonialWidth;
    testimonialContainer.style.transform = `translateX(-${offset}px)`; // Move horizontally
  } 

  function updateTestimonial() {
    const testimonialWidth = testimonials[0].offsetWidth + 15;
    const visibleTestimonials = getVisibleTestimonials();

    const maxScrollLeftButton =
      (testimonials.length - visibleTestimonials) * testimonialWidth;

    const scrollLeftButton = currentToken * testimonialWidth;

    testimonialContainer.scrollLeftButton = Math.min(
      scrollLeftButton,
      maxScrollLeftButton
    );
  } 

  
  function handleResizeTestimonial() {
    currentToken = 0;
    updateTestimonial();
  }

  nextButton.addEventListener("click", () => {
    const visibleTestimonials = getVisibleTestimonials();
    if (currentToken < testimonials.length - visibleTestimonials) {
      currentToken++;
      updateTestimonial();
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentToken > 0) {
      currentToken--;
      updateTestimonial();
    }
  });

  window.addEventListener("resize", () => {
    currentToken = 0; // Reset on resize
    updateTestimonialPosition();
  });

  updateTestimonial(); // Initial setup
});
 */
