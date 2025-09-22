const { test, expect } = require('@playwright/test');

test.describe('Property Details & Availability Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navigate to the local HTML file
    await page.goto('file://' + process.cwd() + '/index.html');
    await page.waitForLoadState('networkidle');
  });

  test('should display all property detail sections', async ({ page }) => {
    // Check for all 4 property detail sections
    await expect(page.locator('#rebecca-details')).toBeVisible();
    await expect(page.locator('#gadsden-community-details')).toBeVisible();
    await expect(page.locator('#gadsden-duplex-details')).toBeVisible();
    await expect(page.locator('#yacht-harbor-details')).toBeVisible();
  });

  test('should display Rebecca Street details with correct availability', async ({ page }) => {
    const rebeccaSection = page.locator('#rebecca-details');
    await expect(rebeccaSection).toBeVisible();
    
    // Check section title
    await expect(rebeccaSection.locator('h3')).toHaveText('1625 Rebecca Street - 4 Apartments');
    
    // Check address
    await expect(rebeccaSection.locator('.property-address')).toHaveText('Pensacola, FL 32534');
    
    // Check availability table has 4 units
    const tableRows = rebeccaSection.locator('tbody tr');
    await expect(tableRows).toHaveCount(4);
    
    // Check all units have September 2025 availability
    const availabilityDates = rebeccaSection.locator('tbody tr td:nth-child(4)');
    for (let i = 0; i < 4; i++) {
      await expect(availabilityDates.nth(i)).toHaveText('September 2025');
    }
    
    // Check rent prices are $1,500/month
    const rentPrices = rebeccaSection.locator('tbody tr td:nth-child(3)');
    for (let i = 0; i < 4; i++) {
      await expect(rentPrices.nth(i)).toHaveText('$1,500/month');
    }
  });

  test('should display Gadsden Community details with correct availability dates', async ({ page }) => {
    const gadsdenSection = page.locator('#gadsden-community-details');
    await expect(gadsdenSection).toBeVisible();
    
    // Check section title
    await expect(gadsdenSection.locator('h3')).toHaveText('1810 W Gadsden Community - Gated 4-Unit Complex');
    
    // Check table has 4 units
    const tableRows = gadsdenSection.locator('tbody tr');
    await expect(tableRows).toHaveCount(4);
    
    // Check specific availability dates
    const availabilityDates = gadsdenSection.locator('tbody tr td:nth-child(4)');
    await expect(availabilityDates.nth(0)).toHaveText('February 2026'); // 1810
    await expect(availabilityDates.nth(1)).toHaveText('February 2026'); // 1812  
    await expect(availabilityDates.nth(2)).toHaveText('September 23, 2025'); // 1816
    await expect(availabilityDates.nth(3)).toHaveText('November 8, 2025'); // 1818
    
    // Check all have $2,350/month rent
    const rentPrices = gadsdenSection.locator('tbody tr td:nth-child(3)');
    for (let i = 0; i < 4; i++) {
      await expect(rentPrices.nth(i)).toHaveText('$2,350/month');
    }
  });

  test('should display Gadsden Duplex details with correct availability', async ({ page }) => {
    const duplexSection = page.locator('#gadsden-duplex-details');
    await expect(duplexSection).toBeVisible();
    
    // Check section title
    await expect(duplexSection.locator('h3')).toHaveText('1918 W Gadsden Duplex - 2 Units');
    
    // Check table has 2 units
    const tableRows = duplexSection.locator('tbody tr');
    await expect(tableRows).toHaveCount(2);
    
    // Check specific availability dates
    const availabilityDates = duplexSection.locator('tbody tr td:nth-child(4)');
    await expect(availabilityDates.nth(0)).toHaveText('August 2026'); // Unit A
    await expect(availabilityDates.nth(1)).toHaveText('January 1, 2026'); // Unit B
    
    // Check rent prices are $2,250/month
    const rentPrices = duplexSection.locator('tbody tr td:nth-child(3)');
    for (let i = 0; i < 2; i++) {
      await expect(rentPrices.nth(i)).toHaveText('$2,250/month');
    }
  });

  test('should display Yacht Harbor details with correct availability', async ({ page }) => {
    const yachtSection = page.locator('#yacht-harbor-details');
    await expect(yachtSection).toBeVisible();
    
    // Check section title
    await expect(yachtSection.locator('h3')).toHaveText('4969 Yacht Harbor Drive - 2 Units');
    
    // Check table has 2 units
    const tableRows = yachtSection.locator('tbody tr');
    await expect(tableRows).toHaveCount(2);
    
    // Check availability dates (both February 2025)
    const availabilityDates = yachtSection.locator('tbody tr td:nth-child(4)');
    await expect(availabilityDates.nth(0)).toHaveText('February 2025');
    await expect(availabilityDates.nth(1)).toHaveText('February 2025');
    
    // Check rent prices are $1,750/month
    const rentPrices = yachtSection.locator('tbody tr td:nth-child(3)');
    for (let i = 0; i < 2; i++) {
      await expect(rentPrices.nth(i)).toHaveText('$1,750/month');
    }
  });

  test('should show all units as available status', async ({ page }) => {
    // Check all property sections for available status
    const allStatusCells = page.locator('.status-available');
    const statusCount = await allStatusCells.count();
    
    // Should have 12 total units (4 + 4 + 2 + 2)
    expect(statusCount).toBe(12);
    
    // Check that all status cells say "Available"
    for (let i = 0; i < statusCount; i++) {
      await expect(allStatusCells.nth(i)).toHaveText('Available');
    }
  });

  test('should scroll to property section when View Details is clicked from map', async ({ page }) => {
    // Wait for map to load
    await page.waitForSelector('#map', { timeout: 10000 });
    await page.waitForTimeout(3000);
    
    // Wait for markers and click first one
    await page.waitForSelector('gmp-advanced-marker', { timeout: 15000 });
    const firstMarker = page.locator('gmp-advanced-marker').first();
    await firstMarker.click();
    
    // Wait for info window and click View Details
    await page.waitForSelector('gmp-info-window', { timeout: 5000 });
    const viewDetailsButton = page.locator('gmp-info-window a:has-text("View Details")');
    
    if (await viewDetailsButton.isVisible()) {
      await viewDetailsButton.click();
      
      // Wait a moment for scrolling to complete
      await page.waitForTimeout(1000);
      
      // Check that we've scrolled to a property details section
      // (We can't predict which marker was clicked first, but one should be in view)
      const propertyDetails = page.locator('.property-detail-group');
      const visibleSections = [];
      
      for (let i = 0; i < await propertyDetails.count(); i++) {
        if (await propertyDetails.nth(i).isInViewport()) {
          visibleSections.push(i);
        }
      }
      
      expect(visibleSections.length).toBeGreaterThan(0);
    }
  });

  test('should have proper table structure and styling', async ({ page }) => {
    // Check that tables have proper headers
    const expectedHeaders = ['Unit', 'Bed/Bath', 'Rent', 'Available', 'Status'];
    
    const tables = page.locator('.availability-table table');
    const tableCount = await tables.count();
    expect(tableCount).toBe(4); // Should have 4 property tables
    
    // Check each table has correct headers
    for (let i = 0; i < tableCount; i++) {
      const headers = tables.nth(i).locator('th');
      const headerCount = await headers.count();
      expect(headerCount).toBe(5);
      
      for (let j = 0; j < 5; j++) {
        await expect(headers.nth(j)).toHaveText(expectedHeaders[j]);
      }
    }
  });

});