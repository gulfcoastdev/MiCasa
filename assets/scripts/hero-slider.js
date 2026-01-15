// Hero Slider using Swiper
let heroSwiper;

document.addEventListener('DOMContentLoaded', async function() {
    await initializeHeroSlider();
});

async function initializeHeroSlider() {
    console.log('🔍 Loading hero slider images...');

    // Find sequential images (image1.jpeg to image20.jpeg)
    const images = await findSequentialImages();

    if (images.length === 0) {
        console.log('❌ No images found for hero slider');
        return;
    }

    console.log(`✅ Found ${images.length} images for hero slider`);

    // Create slides
    const wrapper = document.getElementById('hero-swiper-wrapper');
    if (!wrapper) {
        console.error('Hero swiper wrapper not found');
        return;
    }

    images.forEach((imageName, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';

        const img = document.createElement('img');
        img.src = `assets/slider/${imageName}`;
        img.alt = `Hero slide ${index + 1}`;
        img.loading = index === 0 ? 'eager' : 'lazy';

        slide.appendChild(img);
        wrapper.appendChild(slide);
    });

    // Initialize Swiper
    heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 800,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    console.log('✅ Hero slider initialized');
}

// Find image1.jpeg through image20.jpeg sequentially
async function findSequentialImages() {
    const foundImages = [];

    for (let i = 1; i <= 20; i++) {
        const imageName = `image${i}.jpeg`;

        if (await imageExists(`assets/slider/${imageName}`)) {
            foundImages.push(imageName);
        } else {
            // Stop at first missing image
            break;
        }
    }

    return foundImages;
}

// Check if image exists
function imageExists(imageSrc) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = imageSrc;
        setTimeout(() => resolve(false), 1000);
    });
}
