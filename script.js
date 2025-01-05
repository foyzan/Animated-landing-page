let gtl = gsap.timeline();

// Animate navigation links
gtl.from("#nav a", {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    stagger: 0.3
});

// Animate heading elements
gtl.from("h1", {
    x: -500,
    opacity: 0,
    duration: 0.9,
    stagger: 0.5
});

// Animate images
gtl.from("img", {
    x: 500,
    rotate: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.7
});

