import linksHTML from "./links.html";

function externalLinksList(location) {
    const listUl = document.querySelector(`.${location}_externalLinks`);
    listUl.innerHTML = linksHTML;

    const links = [
        "https://www.facebook.com/witnesspartners.us",
        "https://www.instagram.com/witness_creative/",
        "https://www.linkedin.com/company/witness-creative-partners-inc/",
    ];

    const linkedIcons = document.querySelectorAll(".links");
    linkedIcons.forEach((icon, i) => {
        icon.addEventListener("click", () => {
            window.open(links[i], "_blank");
        });
    });
}

export { externalLinksList };
