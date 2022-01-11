// fade in effects on first page load



const bannerName = document.querySelector("#bannerName");
const aboutPage = document.querySelector("#aboutMe");
const portfolioPage = document.querySelector("#portfolioPage");
const contactMe = document.querySelector("#contactMe");
const bannerImage = document.querySelector("#headshot");
const adj1 = document.querySelector("#adj1");
const adj2 = document.querySelector("#adj2");
const adj3 = document.querySelector("#adj3");
const resumeButton = document.querySelector("#resumeButton");
const navBar = document.querySelector("#navBar");
const mainBody = document.querySelector("#mainBody");
const socialBar = document.querySelector("#headshotSocialLinks");
const background = document.querySelector("#bg1");



document.onload = addAnimations();


function addAnimations() {
        navBar.classList.toggle("sticky-top");
        bannerName.classList.add("animated", "fadeIn");
        bannerImage.classList.add("animated", "fadeIn", "animatedDelay1");
        adj1.classList.add("animated", "fadeIn", "animatedDelay2");
        adj2.classList.add("animated", "fadeIn", "animatedDelay3");
        adj3.classList.add("animated", "fadeIn", "animatedDelay4");
        mainBody.classList.add("animated", "slideUp", "animatedDelay4");
        resumeButton.classList.add("animated", "fadeIn", "animatedDelay5");
        navBar.classList.add("animated", "dropDown", "animatedDelay5");
        socialBar.classList.add("animated", "fadeIn", "animatedDelay5");
        background.classList.add("animated", "leftToRight", "animatedDelay6");
        setTimeout(stickyTop, 9000);





}


function stickyTop(){
        navBar.classList.toggle("sticky-top");
}



$(document).ready(function () {
        // Toggle right and down arrow icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function () {
                $(this).prev(".card-header").find(".fa").removeClass("fa-angle-right").addClass("fa-angle-down");
        }).on('hide.bs.collapse', function () {
                $(this).prev(".card-header").find(".fa").removeClass("fa-angle-down").addClass("fa-angle-right");
        });
});

