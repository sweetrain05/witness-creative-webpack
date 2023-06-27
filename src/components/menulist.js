import menulistHTML from "./menulist.html";
import { router } from "../index.js";
import { hideOverlay } from "../components/header.js";

function menulist(menuLocation) {
    let listUl;
    if (menuLocation === "header") {
        listUl = document.querySelector(".header_rightside");
    } else if (menuLocation === "overlay") {
        listUl = document.querySelector(".menu_list");
    }
    listUl.innerHTML = menulistHTML;

    const menuLists = document.querySelectorAll(".menu_li");
    menuLists.forEach((li) => {
        const value = li.innerHTML;
        li.addEventListener("click", (e) => {
            e.preventDefault();
            switch (value) {
                case "home":
                    router.navigate("/");
                    break;
                case "news":
                    router.navigate("/news");
                    break;
                case "contact":
                    router.navigate("/contact");
                    break;
                default:
                    router.navigate("/");
                    break;
            }
            hideOverlay();
        });
    });
}

export { menulist };
