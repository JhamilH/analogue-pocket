// "document.querySelectorAll" searches the entire page for elements that match the CSS selector I gave and returns all of them as a list.
const animatedSections = document.querySelectorAll('.productpage, .modern, .modern2, .specs');
// This loop goes through the section adds a CSS class called "hidden"
animatedSections.forEach(section => {
    section.classList.add('hidden');
});

const observer = new IntersectionObserver((entries) => {
 
    // Loop through each "entry" (each element being watched).
    entries.forEach(entry => {
 
        // Check if the element is currently visible on screen.
        // "isIntersecting" is true when the element has scrolled into view.
        if (entry.isIntersecting) {
 
            // Remove the "hidden" class and add "visible".
            // This triggers the CSS animation I already have (fadeInUp).
            entry.target.classList.remove('hidden');
            entry.target.classList.add('visible');
 
            // Stop watching this element once it has animated.
            // No need to keep watching it after it's already visible.
            observer.unobserve(entry.target);
        }
    });
 
// "threshold: 0.15" means: only trigger when 15% of the element
// is visible on screen. 0 = as soon as 1px is visible, 1 = fully visible.
}, { threshold: 0.15 });
 
// Tell the observer to start watching each of our sections.
// Without this step, the observer exists but isn't watching anything yet.
animatedSections.forEach(section => {
    observer.observe(section);
});