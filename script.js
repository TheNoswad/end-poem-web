// Set the initial scroll position
let scrollPos = 0;

// Define the function to change the scroll position
function scrollPage() {
    if (!is_scrolling()) {
        // Set the new scroll position
        //   window.scrollBy(0, 4);
        window.scrollBy({
            top: 1, // could be negative value
            left: 0,
            behavior: 'smooth'
        });

    }

}

function is_scrolling() {
    return window.lastScrollTime && new Date().getTime() < window.lastScrollTime + 500
}


// Call the scrollPage function every 100 milliseconds
setInterval(scrollPage, 100);
