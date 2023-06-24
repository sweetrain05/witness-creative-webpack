import { carouselData } from "../data/carouselData";
import { router } from "../index.js";

// 👉 Carousel of company logos using swiper.js
function LandingPageCarousel() {
    // select an element where you want to place the carousel.
    const swiperWrapper = document.querySelector(".swiper-wrapper");

    // create slide data and attach to swiperWrapper based on given carouselData above.
    for (let i = 0; i < carouselData.length; i++) {
        // create slide element which 'swiper-slide' class name (class name shouldn't be modified)
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");

        // create anchor tag for each slide
        const anchor = document.createElement("a");
        anchor.href = carouselData[i]["url"];
        anchor.target = "_blank";

        // insert svg logo data for each slide
        anchor.innerHTML = `
        <svg width="150" height="100">
        <image
            href="${carouselData[i]["imgSrc"]}"
            width="100%"
            height="100%"
        />
        </svg>
    `;

        // Attach anchor element to the slide
        slide.appendChild(anchor);

        // Attach slide element to swiperWrapper
        swiperWrapper.appendChild(slide);
    }

    // Make a swiper based on Swiper.js guidelines
    const swiper = new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal",
        loop: true,
        centeredSlides: true,
        effect: "slide",
        speed: 1000,
        updateOnWindowResize: true,

        autoplay: {
            delay: 0,
            pauseOnMouseEnter: true,
        },

        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        // Default parameters
        slidesPerView: 3,
        spaceBetween: 80,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 80,
            },
            // when window width is >= 767px
            767: {
                slidesPerView: 4,
                spaceBetween: 80,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 6,
                spaceBetween: 150,
            },

            // when window width is >= 1700px
            1700: {
                slidesPerView: 7,
                spaceBetween: 200,
            },
        },
    });
    // activate carousel autoplay when window is resized
    window.addEventListener("resize", () => {
        swiper.autoplay.start();
    });
}

// --------------------------------------------------------
// 👉 scroll down element animation effects
function LandingPageAnimation() {
    // select all elements that has 'animate' class
    const animatedElements = document.querySelectorAll(".animate");
    // get current window's content area's height
    const windowHeight = window.innerHeight;

    function addAnimationEffect() {
        for (let i = 0; i < animatedElements.length; i++) {
            // loop the activity for each element that has 'onScroll' class name.
            const element = animatedElements[i];

            // get y-coordiate of the user
            const positionFromTop = element.getBoundingClientRect().top;

            // if y-coordinate and window height equal to each other,
            // add appropriate class name to the element, depending on which animation is needed.
            if (positionFromTop - windowHeight <= 0) {
                element.classList.add("appear");
            }
        }
    }

    addAnimationEffect();
    // Call addAnimationEffect on page scroll and on page load
    window.addEventListener("scroll", addAnimationEffect);
    window.addEventListener("load", addAnimationEffect);
}

// --------------------------------------------------------
// 👉 clear e-mail input area when it is focused & let original value appear when nothing is written.
function LandingPageEmailSubs() {
    const emailInput = document.getElementById("mce-EMAIL");
    const originalValue = emailInput.value;

    // delete the existing value when user clicks on the input area.
    emailInput.addEventListener("focus", () => {
        if (emailInput.value === originalValue) {
            emailInput.value = "";
        }
    });

    // show the original value only when nothing is written on the input.
    emailInput.addEventListener("blur", () => {
        if (emailInput.value === "") {
            emailInput.value = originalValue;
        }
    });
}
// --------------------------------------------------------
// 👉 Routes for buttons in landing page
function LandingPageRoutes() {
    const contactBtns = document.querySelectorAll(".goToContact");
    contactBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            router.navigate("/contact");
        });
    });
}

export {
    LandingPageCarousel,
    LandingPageAnimation,
    LandingPageEmailSubs,
    LandingPageRoutes,
};
