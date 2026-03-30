(function () {
    "use strict";

    const navBar = document.querySelector("#navBar");
    const bannerName = document.querySelector("#bannerName");
    const bannerImage = document.querySelector("#headshot");
    const adj1 = document.querySelector("#adj1");
    const adj2 = document.querySelector("#adj2");
    const adj3 = document.querySelector("#adj3");
    const resumeButton = document.querySelector("#resumeButton");
    const mainBody = document.querySelector("#mainBody");
    const socialBar = document.querySelector("#headshotSocialLinks");

    function addHeroAnimations() {
        if (!bannerName) return;
        bannerName.classList.add("anim-in");
        if (bannerImage) bannerImage.classList.add("anim-in", "anim-in-delay-1");
        if (adj1) adj1.classList.add("anim-in", "anim-in-delay-2");
        if (adj2) adj2.classList.add("anim-in", "anim-in-delay-2");
        if (adj3) adj3.classList.add("anim-in", "anim-in-delay-2");
        if (resumeButton) resumeButton.classList.add("anim-in", "anim-in-delay-3");
        if (mainBody) mainBody.classList.add("anim-in", "anim-in-delay-4");
        if (socialBar) socialBar.classList.add("anim-in", "anim-in-delay-3");
        if (navBar) navBar.classList.add("anim-in");
    }

    document.addEventListener("DOMContentLoaded", addHeroAnimations);
})();
