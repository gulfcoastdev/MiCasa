// Logo loading functionality
document.addEventListener('DOMContentLoaded', function() {
    loadLogo();
    setupHeaderScroll();
});

// Function to load logo from assets/logo folder
async function loadLogo() {
    const logoImg = document.getElementById('site-logo');
    const headerText = document.querySelector('.header-text');
    
    // Possible logo filenames in order of priority
    const logoFiles = [
        'logo.png',
        'logo.jpg',
        'logo.jpeg',
        'logo.svg',
        'mi-casa-logo.png',
        'mi-casa-logo.svg',
        'micasa-logo.png',
        'micasa-logo.svg',
        'brand-logo.png',
        'brand-logo.svg',
        'company-logo.png',
        'company-logo.svg'
    ];
    
    // Try to find and load logo
    for (const filename of logoFiles) {
        const logoPath = `assets/logo/${filename}`;
        
        if (await imageExists(logoPath)) {
            logoImg.src = logoPath;
            logoImg.classList.remove('hidden');
            headerText.style.display = 'none';
            console.log(`Logo loaded: ${logoPath}`);
            return;
        }
    }
    
    // If no logo found, keep text logo
    console.log('No logo image found, using text logo');
}

// Function to check if image exists (reused from slider.js)
function imageExists(imageSrc) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = imageSrc;
    });
}

// Setup header scroll effect
function setupHeaderScroll() {
    const header = document.querySelector('.site-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Optional: Logo error handling
document.addEventListener('DOMContentLoaded', function() {
    const logoImg = document.getElementById('site-logo');
    
    logoImg.addEventListener('error', function() {
        // If logo fails to load, show text logo
        logoImg.classList.add('hidden');
        const headerText = document.querySelector('.header-text');
        if (headerText) {
            headerText.style.display = 'flex';
        }
    });
    
    logoImg.addEventListener('load', function() {
        // Successfully loaded logo
        console.log('Logo image loaded successfully');
    });
});