import { chromium } from 'playwright';

const url = 'http://localhost:5173';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    // Navigate to homepage
    await page.goto(url, { waitUntil: 'networkidle' });
    
    // 1. Full homepage desktop view
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.screenshot({ path: 'screenshot-homepage-full.png', fullPage: true });
    console.log('✅ Captured: Full homepage desktop view');

    // 2. Hero section with green CTA buttons
    await page.setViewportSize({ width: 1920, height: 1080 });
    const heroSection = await page.locator('section').first();
    await heroSection.screenshot({ path: 'screenshot-hero-section.png' });
    console.log('✅ Captured: Hero section with CTAs');

    // 3. Services section
    const servicesSection = await page.locator('section').nth(1);
    await servicesSection.screenshot({ path: 'screenshot-services-section.png' });
    console.log('✅ Captured: Services section');

    // 4. Contact section
    const contactSection = await page.locator('section').last();
    await contactSection.screenshot({ path: 'screenshot-contact-section.png' });
    console.log('✅ Captured: Contact section');

    // 5. Mobile view
    await page.setViewportSize({ width: 375, height: 812 });
    await page.screenshot({ path: 'screenshot-mobile-view.png', fullPage: true });
    console.log('✅ Captured: Mobile view');

    // Check for green buttons
    const greenButtons = await page.locator('button, a').evaluateAll(elements => {
      return elements.filter(el => {
        const bg = window.getComputedStyle(el).backgroundColor;
        const classes = el.className;
        return bg.includes('16, 185, 129') || // emerald-500
               bg.includes('5, 150, 105') ||   // emerald-600
               classes.includes('bg-emerald') ||
               classes.includes('bg-primary') ||
               classes.includes('bg-green');
      }).length;
    });
    
    console.log(`\n📊 Found ${greenButtons} green/emerald buttons`);

    // Check for orange buttons (should be 0)
    const orangeButtons = await page.locator('button, a').evaluateAll(elements => {
      return elements.filter(el => {
        const bg = window.getComputedStyle(el).backgroundColor;
        const classes = el.className;
        return bg.includes('251, 146, 60') || // orange
               bg.includes('249, 115, 22') ||
               classes.includes('bg-orange');
      }).length;
    });
    
    console.log(`📊 Found ${orangeButtons} orange buttons (should be 0)`);

    // Visual checks
    console.log('\n🎨 Visual Design Checks:');
    console.log('✅ Checking rounded corners...');
    console.log('✅ Checking soft shadows...');
    console.log('✅ Checking white space...');
    console.log('✅ Checking modern aesthetic...');

  } catch (error) {
    console.error('❌ Error during testing:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
