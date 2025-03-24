document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of element is visible
    );

    fadeElements.forEach(element => observer.observe(element));
});