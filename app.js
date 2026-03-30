(function () {
    "use strict";

    const navBar = document.querySelector("#navBar");
    const revealTargets = [
        "#bannerName",
        "#headshot",
        "#adj1",
        "#adj2",
        "#adj3",
        "#resumeButton",
        "#headshotSocialLinks"
    ]
        .map((selector) => document.querySelector(selector))
        .filter(Boolean);

    function applyIntroAnimation() {
        revealTargets.forEach((node, index) => {
            node.classList.add("anim-in");
            if (index > 0 && index < 4) {
                node.classList.add("anim-in-delay-2");
            } else if (index >= 4 && index <= 6) {
                node.classList.add("anim-in-delay-3");
            } else if (index > 6) {
                node.classList.add("anim-in-delay-4");
            } else {
                node.classList.add("anim-in-delay-1");
            }
        });
    }

    function syncNavOnScroll() {
        if (!navBar) return;
        const toggle = () => navBar.classList.toggle("is-scrolled", window.scrollY > 8);
        toggle();
        window.addEventListener("scroll", toggle, { passive: true });
    }

    function enableRevealOnScroll() {
        const cards = document.querySelectorAll(
            ".feature-card, .project-spotlight, .portfolio-accordion .accordion-item, .contact-card, .about-card"
        );
        if (!cards.length || !("IntersectionObserver" in window)) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("anim-in");
                    observer.unobserve(entry.target);
                });
            },
            { threshold: 0.12 }
        );

        cards.forEach((card) => observer.observe(card));
    }

    document.addEventListener("DOMContentLoaded", () => {
        applyIntroAnimation();
        syncNavOnScroll();
        enableRevealOnScroll();
    });
})();
