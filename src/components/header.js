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
            <div class="hamburger-menu">
                <svg width="25" height="25">
                    <image href="./img/menubar.svg" width="100%" height="100%" />
                </svg>
            </div>
            `;
            // add a toggle btn event to created hamburger element
            const toggleBtn = document.querySelector(".hamburger-menu");
            toggleBtn.addEventListener("click", toggleHandler);
        } else {
            // show list when screen size is big
            menulist("header");
        }
    }

    // when screen is resized or loaded, execute headerDesignHandler function.
    // This will show either 'hanburger menu' or 'contact text' depending on current screen size.
    headerDesignHandler(getCurrentScreenWidth());
}

// --------------------------------------------------------

function overlayCloseBtnHandler() {
    const toggleBtn = document.querySelector(".menu_btn_close");
    toggleBtn.addEventListener("click", toggleHandler);
}

// make a state for toggle status and provide getter & setter for it
const toggleBool = {
    value: false,
    get state() {
        return this.value;
    },
    set state(value) {
        this.value = value;
    },
};

function toggleHandler(e) {
    e.preventDefault();
    if (toggleBool.state === false) {
        showOverlay();
    } else {
        hideOverlay();
    }
}

// hide the overlay element and change toggle status
function hideOverlay() {
    const menuOverlay = document.querySelector(".menu_container_overlay");
    if (toggleBool.state) {
        menuOverlay.style.display = "none";
        toggleBool.state = false;
    }
}

// show the overlay element and change toggle status
function showOverlay() {
    const menuOverlay = document.querySelector(".menu_container_overlay");
    if (!toggleBool.state) {
        menuOverlay.style.display = "flex";
        toggleBool.state = true;
        overlayCloseBtnHandler();
    }
}

export { resizeHeader, HeaderComponent, hideOverlay };
