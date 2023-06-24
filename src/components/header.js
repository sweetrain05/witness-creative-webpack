import { externalLinksList } from "./links.js";
import { menulist } from "./menulist.js";

// 👉
function HeaderComponent() {
    externalLinksList("menu");
    menulist("overlay");
}

// --------------------------------------------------------
function resizeHeader() {
    // get current screen width size
    function getCurrentScreenWidth() {
        const screenWidth =
            window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
        return screenWidth;
    }

    // function to show different designs based on passed on screen width size
    function headerDesignHandler(screenWidth) {
        // select the area where you want your html code to change depending on screen size
        const headerRight = document.querySelector(".header_rightside");

        // switch to different html code based on screen width.
        if (screenWidth < 767) {
            // show the hamburger menu when screen size is small
            headerRight.innerHTML = `
            <div class="hamburger-menu menu-toggle">
                <svg width="25" height="25">
                    <image href="./img/menubar.svg" width="100%" height="100%" />
                </svg>
            </div>
            `;
        } else {
            // show list when screen size is big
            menulist("header");
        }
    }

    // when screen is resized or loaded, execute headerDesignHandler function.
    // This will show either 'hanburger menu' or 'contact text' depending on current screen size.
    headerDesignHandler(getCurrentScreenWidth());

    // --------------------------------------------------------
    // Now, let's add toggle effect to hamburger menu.
    function toggleBtnsHandler() {
        // select all the elements that is related to toggle
        const toggleBtns = document.querySelectorAll(".menu-toggle");

        // when any toggle element is clicked, it will appear/disappear
        toggleBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                console.log("toggle button clicked");
                if (toggleBool.state === false) {
                    showOverlay();
                    console.log("show");
                } else {
                    hideOverlay();
                    console.log("hide");
                }
            });
        });
    }
    toggleBtnsHandler();
}

// if (toggleBool.state === true) {
//     hideOverlay();
// }

// make a state for toggle status and provide getter & setter for it
// let toggleState = false;
const toggleBool = {
    value: false,
    get state() {
        return this.value;
    },
    set setState(value) {
        this.value = value;
    },
};

// hide the overlay element and change toggle status
function hideOverlay() {
    const menuOverlay = document.querySelector(".menu_container_overlay");
    menuOverlay.style.display = "none";

    toggleBool.setState = false;
}
// show the overlay element and change toggle status
function showOverlay() {
    const menuOverlay = document.querySelector(".menu_container_overlay");
    menuOverlay.style.display = "flex";
    toggleBool.setState = true;
}

export { resizeHeader, HeaderComponent, hideOverlay };
