<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Furnished Rentals Pensacola FL | Mi Casa Rentals - Short & Long-Term</title>
    <meta name="description" content="Fully furnished apartments in Pensacola FL for short-term stays and long-term leases. Move-in ready corporate housing with WiFi. Book online or apply today!">
    <link rel="stylesheet" href="assets/styles/styles.css">

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-1JPY4MQ7H9"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-1JPY4MQ7H9');
      gtag('config', 'AW-17414151203');
    </script>
</head>
<body>
    <?php include 'components/header.php'; ?>

    <main>
        <!-- Hero Section -->
        <section class="hero">
            <!-- Image Slider - Content loaded dynamically by JavaScript -->
            <div class="slider">
                <!-- Slides, navigation arrows, and dots will be generated automatically -->
            </div>

            <div class="container hero-content">
                <h1 class="hero-title">Furnished Rentals in Pensacola, Florida</h1>
                <p class="hero-subtitle">Move-in ready apartments for short-term stays and long-term leases in beautiful Pensacola</p>

                <!-- Contact Info in Hero -->
                <div class="hero-contact">
                    <p class="contact-text">Questions or inquiries?</p>
                    <div class="hero-contact-links">
                        <a href="tel:+1-850-912-9225" class="hero-contact-link">
                            📞 (850) 912-9225
                        </a>
                        <a href="mailto:rentalspcola@gmail.com" class="hero-contact-link">
                            ✉️ rentalspcola@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Description Section -->
        <section class="description">
            <div class="container">
                <h2>Premium Furnished Apartments in Pensacola</h2>
                <p>Discover our collection of 12 beautifully furnished apartments in Pensacola, Florida. Perfect for corporate housing, extended stays, and monthly rentals, our move-in ready units feature everything you need for comfortable living. With years of successful hosting and consistently excellent reviews, we specialize in both short-term bookings and long-term leases throughout the Pensacola area.</p>

            </div>
        </section>

        <!-- Map Section -->
        <section class="map-section">
            <div class="container">
                <h2>Property Locations</h2>
            </div>
            <div class="map-container">
                <div id="map" class="google-map"></div>
                <div id="map-fallback" class="map-placeholder" style="display: none;">
                    <p>Interactive map showing our property locations in Pensacola, FL</p>
                    <p><small>Please add your Google Maps API key to view the interactive map</small></p>
                </div>
            </div>
        </section>

        <!-- Bedroom Filter Section -->
        <section class="filter-section">
            <div class="container">
                <h2>Find Your Perfect Rental</h2>
                <p class="filter-intro">Filter properties by number of bedrooms</p>
                <div class="bedroom-filter">
                    <button class="filter-btn active" data-bedrooms="all">All Properties</button>
                    <button class="filter-btn" data-bedrooms="1">1 Bedroom</button>
                    <button class="filter-btn" data-bedrooms="2">2 Bedrooms</button>
                    <button class="filter-btn" data-bedrooms="3">3 Bedrooms</button>
                </div>
                <div id="filter-results" class="filter-results-info"></div>
            </div>
        </section>

        <!-- Property Details, Amenities & Availability Section -->
        <section class="property-details-section">
            <div class="container">
                <h2>Property Details, Amenities & Availability</h2>

                <!-- Lease Terms & Pricing -->
                <div class="pricing-info-inline">
                    <h4>Lease Terms & Pricing</h4>
                    <p><strong>Listed prices are for 6+ month leases.</strong> Shorter-term rentals (month-to-month) are 20% higher than listed rates.</p>
                </div>

                <!-- Dynamic Properties Content -->
                <div id="properties-container">
                    <!-- Properties will be loaded here dynamically -->
                </div>

                <!-- Universal Amenities (dynamic) -->
                <div id="universal-amenities-container">
                    <!-- Universal amenities will be loaded here dynamically -->
                </div>

            </div>
        </section>

        <?php include 'components/marketing.php'; ?>
    </main>

    <?php include 'components/footer.php'; ?>

    <script src="assets/scripts/clean-slider.js"></script>
    <script src="assets/scripts/logo-loader.js"></script>
    <script src="assets/scripts/property-data.js"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB5zmwFcxCvFrMChrVpA3AcoBRXDgEb8b8&loading=async&libraries=marker&callback=initMap"></script>
</body>
</html>
