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
