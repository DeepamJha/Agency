// Initialize GSAP timeline
var tl = gsap.timeline();

// First animation: Animate the lines
tl.from(".line h1", {
    y: 150,
    stagger: 0.3,
    duration: 0.6,
    delay: 0.5
});

// Second animation: Fade in ".line h2" and "#line1-part1" with counter logic
tl.from(".line h2, #line1-part1", {
    opacity: 0,
    duration: 0.6,
    onStart: function () {
        // Initialize counter
        var h5timer = document.querySelector("#line1-part1 h5");
        var grow = 0;
        var interval = setInterval(function () {
            if (grow < 100) {
                grow++;
                h5timer.innerHTML = grow; // Update the counter
            } else {
                clearInterval(interval); // Stop the interval when counter reaches 100
            }
        }, 29); // Smooth counter increment (100 steps over ~3.9 seconds)
    }
});

// Third animation: Fade out the loader
tl.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 2.7, // Waits for the counter animation to complete
     
});
