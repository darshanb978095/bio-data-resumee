$(document).ready(function () {

    // Display the current year in the footer
    $("#year").text(new Date().getFullYear());

    // Mobile navigation menu
    $("#menuBtn").on("click", function () {
        $("#navLinks").toggleClass("show");
    });

    // Close the mobile menu after clicking a link
    $("#navLinks a").on("click", function () {
        $("#navLinks").removeClass("show");
    });

    // Small fade-in effect for page content
    $(".card, .resume-section, .biodata-card").hide().fadeIn(600);
});
