<?php
// Detect current page
$current_page = basename($_SERVER['PHP_SELF']);
$is_home = ($current_page === 'index.php');

// Set base URL for navigation
$nav_base = $is_home ? '' : 'index.php';
?>

<!-- Header with Logo -->
<header class="site-header">
    <div class="container">
        <div class="header-wrapper">
            <a href="index.php" class="logo-container">
                <img id="site-logo" src="" alt="Mi Casa Rentals" class="logo hidden">
                <div class="header-text">
                    <h1 class="logo-text">Mi Casa Rentals</h1>
                </div>
            </a>

            <div class="header-contact">
                <a href="tel:+1-850-912-9225" class="header-contact-link">
                    <span class="contact-icon">📞</span>
                    <span class="contact-info">(850) 912-9225</span>
                </a>
                <a href="mailto:rentalspcola@gmail.com" class="header-contact-link">
                    <span class="contact-icon">✉️</span>
                    <span class="contact-info">rentalspcola@gmail.com</span>
                </a>
            </div>

            <!-- Navigation Menu -->
            <nav class="main-nav">
                <button class="mobile-menu-toggle" aria-label="Toggle menu">
                    <span class="hamburger"></span>
                </button>
                <ul class="nav-menu">
                    <li><a href="<?php echo $nav_base; ?>#hero" class="nav-link">Home</a></li>
                    <li><a href="<?php echo $nav_base; ?>#properties" class="nav-link">All Properties</a></li>
                    <li><a href="listing.php?slug=pensacola-rebecca-street-one-bedroom" class="nav-link">1 Bedroom – Near UWF & Navy Federal</a></li>
                    <li><a href="listing.php?slug=pensacola-west-florida-hospital-two-bedroom" class="nav-link">2 Bedroom – West Florida Hospital Area</a></li>
                    <li><a href="listing.php?slug=pensacola-downtown-gated-three-bedroom" class="nav-link">Gated 3 Bedroom – Downtown & NAS</a></li>
                    <li><a href="listing.php?slug=pensacola-downtown-three-bedroom" class="nav-link">3 Bedroom – Downtown & NAS</a></li>
                    <li><a href="<?php echo $nav_base; ?>#contact" class="nav-link">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
</header>
