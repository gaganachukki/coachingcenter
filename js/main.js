// Execute immediately since script is at the bottom of the body
(function() {
    const preloader = document.getElementById('preloader');
    
    function hidePreloader() {
        if (!preloader || preloader.style.display === 'none') return;
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }

    if (preloader) {
        // Hide after exactly 1000ms (+500ms fade = 1.5s)
        setTimeout(hidePreloader, 1000);
    }

    // Safety fallback
    window.addEventListener('load', () => {
        setTimeout(hidePreloader, 1000);
    });
})();\n