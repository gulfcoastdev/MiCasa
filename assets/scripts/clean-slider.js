// Clean, simple slider that only looks for image1.jpeg to image20.jpeg
let currentSlideIndex = 0;
let slideCount = 0;
let autoSlideInterval;
let detectedImages = [];

document.addEventListener('DOMContentLoaded', function() {
    initializeCleanSlider();
});

async function initializeCleanSlider() {
    console.log('🔍 Loading images with imageN.jpeg convention...');
    
    // Simple detection: only look for image1.jpeg to image20.jpeg
    detectedImages = await findSequentialImages();
    
    if (detectedImages.length > 0) {
        console.log(`✅ Found ${detectedImages.length} images: ${detectedImages.join(', ')}`);
        createSliderFromImages(detectedImages);
    } else {
        console.log('❌ No images found with imageN.jpeg naming convention');
    }
}

// Simple function to find image1.jpeg, image2.jpeg, etc.
async function findSequentialImages() {
    const foundImages = [];
    
    // Check for image1.jpeg through image20.jpeg (sequential)
    for (let i = 1; i <= 20; i++) {
        const imageName = `image${i}.jpeg`;
        
        if (await imageExists(`assets/slider/${imageName}`)) {
            foundImages.push(imageName);
        } else {
            // Stop at first missing image to keep sequence clean
            break;
        }
    }
    
    return foundImages;
}

// Clean image existence check with error suppression
function imageExists(imageSrc) {
    return new Promise((resolve) => {
        const img = new Image();
        
        // Suppress error logs by handling them silently
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        
        // Set source to test
        img.src = imageSrc;
        
        // Timeout after 1 second (faster)
        setTimeout(() => resolve(false), 1000);
    });
}

function createSliderFromImages(imageFilenames) {
    const sliderContainer = document.querySelector('.slider');
    if (!sliderContainer) return;
    
    // Clear any existing content
    sliderContainer.innerHTML = '';
    
    // Create slides for each image
    imageFilenames.forEach((filename, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.style.backgroundImage = `url('assets/slider/${filename}')`;
        
        // Add overlay
        const overlay = document.createElement('div');
        overlay.className = 'slide-overlay';
        slide.appendChild(overlay);
        
        sliderContainer.appendChild(slide);
    });
    
    // Create previous button
    const prevBtn = document.createElement('div');
    prevBtn.className = 'slider-arrow prev';
    prevBtn.innerHTML = '&#8249;';
    prevBtn.setAttribute('role', 'button');
    prevBtn.setAttribute('tabindex', '0');
    prevBtn.setAttribute('aria-label', 'Previous image');
    sliderContainer.appendChild(prevBtn);
    
    // Create next button
    const nextBtn = document.createElement('div');
    nextBtn.className = 'slider-arrow next';
    nextBtn.innerHTML = '&#8250;';
    nextBtn.setAttribute('role', 'button');
    nextBtn.setAttribute('tabindex', '0');
    nextBtn.setAttribute('aria-label', 'Next image');
    sliderContainer.appendChild(nextBtn);
    
    // Create dots container
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'slider-dots';
    
    // Create dots
    imageFilenames.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.setAttribute('data-slide', index);
        dotsContainer.appendChild(dot);
    });
    
    sliderContainer.appendChild(dotsContainer);
    
    // Set initial state
    slideCount = imageFilenames.length;
    currentSlideIndex = 0;
    updateSlider();
    
    // Add event listeners with better mobile support
    prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        goToPreviousSlide();
    });
    
    prevBtn.addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        goToPreviousSlide();
    });
    
    nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        goToNextSlide();
    });
    
    nextBtn.addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        goToNextSlide();
    });
    
    // Add dot click listeners with mobile support
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            goToSlide(index);
        });
        
        dot.addEventListener('touchend', function(e) {
            e.preventDefault();
            e.stopPropagation();
            goToSlide(index);
        });
    });
    
    // Add keyboard support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            goToPreviousSlide();
        } else if (e.key === 'ArrowRight') {
            goToNextSlide();
        }
    });
    
    // Add touch support
    let touchStartX = 0;
    let touchEndX = 0;
    
    sliderContainer.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    sliderContainer.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                goToNextSlide();
            } else {
                goToPreviousSlide();
            }
        }
    });
    
    // Start auto-slide
    startAutoSlide();
    
    // Pause auto-slide on hover
    sliderContainer.addEventListener('mouseenter', stopAutoSlide);
    sliderContainer.addEventListener('mouseleave', startAutoSlide);
    
    console.log(`🎬 Clean slider initialized with ${slideCount} images`);
}

function goToPreviousSlide() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slideCount - 1;
    }
    updateSlider();
    resetAutoSlide();
}

function goToNextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= slideCount) {
        currentSlideIndex = 0;
    }
    updateSlider();
    resetAutoSlide();
}

function goToSlide(index) {
    currentSlideIndex = index;
    updateSlider();
    resetAutoSlide();
}

function updateSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    // Update slides
    slides.forEach((slide, index) => {
        if (index === currentSlideIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    
    // Update dots
    dots.forEach((dot, index) => {
        if (index === currentSlideIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function startAutoSlide() {
    stopAutoSlide(); // Clear any existing interval
    autoSlideInterval = setInterval(function() {
        goToNextSlide();
    }, 8000);
}

function stopAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    }
}

function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}