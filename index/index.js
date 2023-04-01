const slider = document.querySelector('.flex-up');
const dotsContainer = document.querySelector('.dot-nav');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slideWidth = slider.offsetWidth;
const slideMargin = parseInt(getComputedStyle(slider.children[0]).marginRight);

// Create dots based on the number of images in the slider
for (let i = 0; i < slider.children.length; i++) {
    const dot = document.createElement('button');
    dot.addEventListener('click', () => {
        const scrollAmount = i * (slideWidth + slideMargin);
        slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        setActiveDot(i);
    });
    dotsContainer.appendChild(dot);
}

// Set the first dot as active by default
setActiveDot(0);

function setActiveDot(index) {
    // Remove active class from all dots
    dotsContainer.querySelectorAll('button').forEach(dot => {
        dot.classList.remove('active');
    });
    // Add active class to the current dot
    dotsContainer.children[index].classList.add('active');
}

prevButton.addEventListener('click', () => {
    slider.scrollBy({ left: -slideWidth / 2, behavior: 'smooth' });
});

nextButton.addEventListener('click', () => {
    slider.scrollBy({ left: slideWidth / 2, behavior: 'smooth' });
});
