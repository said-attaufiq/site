document.addEventListener('DOMContentLoaded', () => {
    // Parallax effect for blobs following mouse
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        const blobs = document.querySelectorAll('.blob');
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 30;
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;
            blob.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1), transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)';
        observer.observe(el);
    });

    // View Transition Logic for Smooth Page Navigation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Check if View Transitions are supported
            if (!document.startViewTransition) return;

            e.preventDefault();
            const href = this.getAttribute('href');

            // Perform transition
            document.startViewTransition(async () => {
                // Fetch the new page content (minimal SPA simulation for transition effect)
                // For a real production app, you might use a router,
                // but here we redirect after a tiny delay to allow the animation to start
                // OR we can just use the native transition if the browser supports it cross-document.
                // For this demo, let's simulate the feel by adding the transition class
                window.location.href = href;
            });
        });
    });
});
