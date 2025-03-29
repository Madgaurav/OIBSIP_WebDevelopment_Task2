document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Fade-in animation for sections
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-visible");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.classList.add("fade-in");
        observer.observe(section);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#nameAbout", {
        strings: ["Hi I'm Gaurav Dhadge"],  // The text to type
        typeSpeed: 100,      // Slow typing speed (100ms per letter)
        backSpeed: 50,       // Smooth backspacing speed (50ms per letter)
        startDelay: 1000,    // Wait 1 second before typing starts
        backDelay: 2500,     // Wait 3 seconds after typing before backspacing
        loop: true,           // Enable infinite loop
        fadeOut: true,        // Fade out instead of deleting backwards
        fadeOutClass: 'typed-fade-out',
        fadeOutDelay: 500,  
        showCursor: false
   
    });
});






