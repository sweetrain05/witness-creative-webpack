/**
A Corporate Website for Witness Creative Inc.

Created by Dan Bi Choi, a frontend developer. 

📗 Last updated date: June 10th, 2023
*/
// --------------------------------------------------------
// --------------------------------------------------------
"use strict";
import "./styles/style.scss";
import {
    LandingPageCarousel,
    LandingPageAnimation,
    LandingPageEmailSubs,
    LandingPageRoutes,
} from "./pages/landing.js";
import { ContactPage } from "./pages/contact.js";

// --------------------------------------------------------
// 👉 Implement router functionality using Navigo
import Navigo from "navigo";
const router = new Navigo(null, true);

// import html files that will be used for mainApp when route changes
import contactHTML from "./pages/contact.html";
import landingHTML from "./pages/landing.html";
import newsHTML from "./pages/news.html";

const mainApp = document.getElementById("main-content");

router
    .on({
        "/": {
            as: "home",
            uses: function () {
                mainApp.innerHTML = `${landingHTML}`;
            },
            hooks: {
                after: function () {
                    // actions to be taken after route changes
                    LandingPageCarousel();
                    LandingPageAnimation();
                    LandingPageEmailSubs();
                    LandingPageRoutes();
                },
            },
        },
        "/news": {
            as: "news",
            uses: function () {
                mainApp.innerHTML = `${newsHTML}`;
            },
            hooks: {
                after: function () {
                    // actions to be taken after route changes
                    //
                    scrollTo(0, 0);
                },
            },
        },
        "/contact": {
            as: "contact",
            uses: function () {
                mainApp.innerHTML = `${contactHTML}`;
            },
            hooks: {
                after: function () {
                    // actions to be taken after route changes
                    ContactPage();
                    scrollTo(0, 0);
                },
            },
        },
    })
    .notFound(
        function () {
            mainApp.innerHTML = `Page not found`;
        },
        setTimeout(() => {
            router.navigate("/");
        }, 1500)
    )
    .resolve();

export { router };

// --------------------------------------------------------
// 👉 Import header & footer as components
import headerHTML from "./components/header.html";
import footerHTML from "./components/footer.html";

const header = document.querySelector(".header");
const footer = document.querySelector(".footer");

header.innerHTML = headerHTML;
footer.innerHTML = footerHTML;

// --------------------------------------------------------
// 👉 Apply change in header design according to screen size
// when window is resized or loaded, execute resizeHeader which gets all new btns and their locations
import { resizeHeader, hideOverlay } from "./components/header.js";
window.addEventListener("resize", () => {
    hideOverlay();
    resizeHeader();
});
window.addEventListener("load", resizeHeader);

// --------------------------------------------------------
// 👉 External links for icons on open menu and on footer
import { FooterComponent } from "./components/footer.js";
import { HeaderComponent } from "./components/header.js";
FooterComponent();
HeaderComponent();

// --------------------------------------------------------
// 👉 hide scroll bar when on top of the page
window.addEventListener("scroll", () => {
    const body = document.querySelector("body");
    if (window.scrollY === 0) {
        body.classList.add("hide-scrollbar");
    } else {
        body.classList.remove("hide-scrollbar");
    }
});

// --------------------------------------------------------
// // 👉 Scroll to very top button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

let isScrolling;
window.addEventListener("scroll", function () {
    clearTimeout(isScrolling);

    scrollToTopBtn.classList.add("show");

    isScrolling = setTimeout(function () {
        scrollToTopBtn.classList.remove("show");
    }, 500);
});

scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// --------------------------------------------------------
// // // 👉 Scroll down to contact form when 'contact us' elements are clicked

// // when window is resized or loaded, get all the new btns and their locations
// window.addEventListener("resize", getAllBtns);
// window.addEventListener("load", getAllBtns);
// function getAllBtns() {
//     // select all the elements that will lead the user to form location
//     const goToContactBtns = document.querySelectorAll(".goToContact");

//     // when any elements with .goToContact class is clicked, it will lead to current location of the contact form.
//     goToContactBtns.forEach((btn) => {
//         btn.addEventListener("click", (e) => {
//             e.preventDefault();
//             window.scrollTo({
//                 top: getNewLocation(),
//                 behavior: "smooth",
//             });

//             // close the menu overlay, if it is displayed
//             const menuOverlay = document.querySelector(
//                 ".menu_container_overlay"
//             );
//             if (menuOverlay.style.display === "flex") {
//                 menuOverlay.style.display = "none";
//             }
//         });
//     });

//     // select form by its class
//     const contactForm = document.querySelector(".contactUs_formSub");

//     // function to get current location of contactForm.
//     function getNewLocation() {
//         return contactForm.getBoundingClientRect().top + window.pageYOffset;
//     }
// }

// router.on("/", function () {
//     mainApp.innerHTML = `${landingHTML}`;
//     window.addEventListener("DOMContentLoaded", () => {
//         console.log("dom loaded");
//         LandingPageCarousel();
//         LandingPageAnimation();
//         LandingPageEmailSubs();
//     });
// });
// router.on("/contact", function () {
//     mainApp.innerHTML = `${contactHTML}`;
//     ContactPage();
// });

// router.hooks({
//     after: function () {
//       // Your code that should run after every route change
//     }
//   });

// router.resolve();
