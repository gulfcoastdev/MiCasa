const { test, expect } = require('@playwright/test');

test.describe('Mi Casa Rentals Map Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to the local HTML file
    await page.goto('file://' + process.cwd() + '/index.html');
    
    // Wait for Google Maps to load
    await page.waitForSelector('#map', { timeout: 10000 });
    await page.waitForTimeout(3000); // Give time for map initialization
  });

  test('should display 4 property markers on the map', async ({ page }) => {
    // Wait for map markers to be rendered
    await page.waitForSelector('gmp-advanced-marker', { timeout: 15000 });
    
    // Count the number of markers
    const markers = await page.locator('gmp-advanced-marker').count();
    expect(markers).toBe(4);
  });

  test('should display prices on map markers', async ({ page }) => {
    // Wait for markers with price labels to appear
    await page.waitForSelector('gmp-advanced-marker', { timeout: 15000 });
    
    // Check for price labels in markers - they should contain $ symbols
    const priceLabels = await page.locator('gmp-advanced-marker').filter({ 
      hasText: '$' 
    }).count();
    
    expect(priceLabels).toBeGreaterThanOrEqual(4);
  });

  test('should open info window when marker is clicked', async ({ page }) => {
    // Wait for markers to load
    await page.waitForSelector('gmp-advanced-marker', { timeout: 15000 });
    
    // Click the first marker
    const firstMarker = page.locator('gmp-advanced-marker').first();
    await firstMarker.click();
    
    // Wait for info window to appear
    await page.waitForSelector('gmp-info-window', { timeout: 5000 });
    
    // Check if info window contains expected elements
    const infoWindow = page.locator('gmp-info-window');
    await expect(infoWindow).toBeVisible();
  });

  test('should display View Details button in info window', async ({ page }) => {
    // Wait for markers to load
    await page.waitForSelector('gmp-advanced-marker', { timeout: 15000 });
    
    // Click a marker to open info window
    const firstMarker = page.locator('gmp-advanced-marker').first();
    await firstMarker.click();
    
    // Wait for info window and check for View Details button
    await page.waitForSelector('gmp-info-window', { timeout: 5000 });
    
    const viewDetailsButton = page.locator('gmp-info-window a:has-text("View Details")');
    await expect(viewDetailsButton).toBeVisible();
  });

  test('should display Zillow links where available', async ({ page }) => {
    // Wait for markers to load
    await page.waitForSelector('gmp-advanced-marker', { timeout: 15000 });
    
    // Click multiple markers to check for Zillow links
    const markers = page.locator('gmp-advanced-marker');
    const markerCount = await markers.count();
    
    let zillowLinksFound = 0;
    
    for (let i = 0; i < Math.min(markerCount, 4); i++) {
      await markers.nth(i).click();
      await page.waitForTimeout(500);
      
      const zillowLink = page.locator('gmp-info-window a:has-text("Zillow")');
      if (await zillowLink.isVisible()) {
        zillowLinksFound++;
      }
      
      // Close info window by clicking elsewhere on the map
      await page.locator('#map').click({ position: { x: 100, y: 100 } });
      await page.waitForTimeout(300);
    }
    
    // Expect at least some Zillow links to be present
    expect(zillowLinksFound).toBeGreaterThan(0);
  });

  test('should display Contact/Call button in info windows', async ({ page }) => {
    // Wait for markers to load
    await page.waitForSelector('gmp-advanced-marker', { timeout: 15000 });
    
    // Click first marker
    const firstMarker = page.locator('gmp-advanced-marker').first();
    await firstMarker.click();
    
    // Wait for info window and check for contact button
    await page.waitForSelector('gmp-info-window', { timeout: 5000 });
    
    const callButton = page.locator('gmp-info-window a:has-text("Call")');
    await expect(callButton).toBeVisible();
    
    // Verify it has the correct phone number
    await expect(callButton).toHaveAttribute('href', 'tel:8506912685');
  });

});