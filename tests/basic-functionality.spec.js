const { test, expect } = require('@playwright/test');

test.describe('Mi Casa Rentals - Basic Functionality Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('file://' + process.cwd() + '/index.html');
    await page.waitForLoadState('networkidle');
  });

  test('should load the page and display main elements', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Furnished Rentals Pensacola FL/);
    
    // Check main sections are present
    await expect(page.locator('h1')).toHaveText('Furnished Rentals in Pensacola, Florida');
    await expect(page.locator('.map-section')).toBeVisible();
    await expect(page.locator('.property-details-section')).toBeVisible();
  });

  test('should display the map container', async ({ page }) => {
    const mapContainer = page.locator('#map');
    await expect(mapContainer).toBeVisible();
    await expect(mapContainer).toHaveClass(/google-map/);
  });

  test('should have 4 property detail sections', async ({ page }) => {
    await expect(page.locator('#rebecca-details')).toBeVisible();
    await expect(page.locator('#gadsden-community-details')).toBeVisible();
    await expect(page.locator('#gadsden-duplex-details')).toBeVisible();
    await expect(page.locator('#yacht-harbor-details')).toBeVisible();
  });

  test('should display correct number of units across all properties', async ({ page }) => {
    // Rebecca: 4 units, Gadsden Community: 4 units, Gadsden Duplex: 2 units, Yacht Harbor: 2 units = 12 total
    const allTableRows = page.locator('.availability-table tbody tr');
    await expect(allTableRows).toHaveCount(12);
  });

  test('should display correct pricing information', async ({ page }) => {
    // Check Rebecca Street pricing
    const rebeccaPrices = page.locator('#rebecca-details tbody tr td:nth-child(3)');
    await expect(rebeccaPrices.first()).toHaveText('$1,500/month');
    
    // Check Gadsden Community pricing
    const gadsdenPrices = page.locator('#gadsden-community-details tbody tr td:nth-child(3)');
    await expect(gadsdenPrices.first()).toHaveText('$2,350/month');
    
    // Check Duplex pricing
    const duplexPrices = page.locator('#gadsden-duplex-details tbody tr td:nth-child(3)');
    await expect(duplexPrices.first()).toHaveText('$2,250/month');
    
    // Check Yacht Harbor pricing  
    const yachtPrices = page.locator('#yacht-harbor-details tbody tr td:nth-child(3)');
    await expect(yachtPrices.first()).toHaveText('$1,750/month');
  });

  test('should have proper availability dates', async ({ page }) => {
    // Check specific availability dates as requested
    const gadsdenTable = page.locator('#gadsden-community-details tbody tr');
    
    // 1816 should be available September 23, 2025
    const row1816 = gadsdenTable.filter({ hasText: '1816 W Gadsden' });
    await expect(row1816.locator('td:nth-child(4)')).toHaveText('September 23, 2025');
    
    // 1818 should be available November 8, 2025
    const row1818 = gadsdenTable.filter({ hasText: '1818 W Gadsden' });
    await expect(row1818.locator('td:nth-child(4)')).toHaveText('November 8, 2025');
  });

  test('should display all units as available', async ({ page }) => {
    const availableStatuses = page.locator('.status-available');
    const statusCount = await availableStatuses.count();
    expect(statusCount).toBe(12);
    
    // Verify each status says "Available"
    for (let i = 0; i < statusCount; i++) {
      await expect(availableStatuses.nth(i)).toHaveText('Available');
    }
  });

});