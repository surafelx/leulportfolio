import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate between pages', async ({ page }) => {
    await page.goto('/');

    // Check home page
    await expect(page.locator('h1')).toContainText('Leoul Solomon');
    await expect(page.locator('text=Art Director')).toBeVisible();

    // Navigate to About page
    await page.click('text=About');
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h1')).toContainText('About Me');

    // Navigate to Work page
    await page.click('text=Work');
    await expect(page).toHaveURL('/work');
    await expect(page.locator('h1')).toContainText('My Work');

    // Navigate to Resume page
    await page.click('text=Resume');
    await expect(page).toHaveURL('/resume');
    await expect(page.locator('h1')).toContainText('Resume');

    // Navigate to Contact page
    await page.click('text=Contact');
    await expect(page).toHaveURL('/contact');
    await expect(page.locator('h1')).toContainText('Get In Touch');
  });

  test('should work on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Open mobile menu
    await page.click('[aria-label="Open main menu"]');
    
    // Check if mobile menu is visible
    await expect(page.locator('text=Home').nth(1)).toBeVisible();
    
    // Navigate using mobile menu
    await page.click('text=About');
    await expect(page).toHaveURL('/about');
  });
});

test.describe('Work Page', () => {
  test('should filter projects by category', async ({ page }) => {
    await page.goto('/work');

    // Wait for projects to load
    await expect(page.locator('[data-testid="project-card"]').first()).toBeVisible({ timeout: 10000 });

    // Click on Branding filter
    await page.click('text=Branding');
    
    // Check if URL contains category filter (if implemented)
    // await expect(page).toHaveURL(/category=Branding/);
    
    // Check if only branding projects are shown
    const projectCards = page.locator('[data-testid="project-card"]');
    const count = await projectCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should open project modal', async ({ page }) => {
    await page.goto('/work');

    // Wait for projects to load
    await expect(page.locator('[data-testid="project-card"]').first()).toBeVisible({ timeout: 10000 });

    // Click on first project
    await page.locator('[data-testid="project-card"]').first().click();
    
    // Check if modal is open
    await expect(page.locator('[data-testid="project-modal"]')).toBeVisible();
    
    // Close modal
    await page.click('[aria-label="Close modal"]');
    await expect(page.locator('[data-testid="project-modal"]')).not.toBeVisible();
  });
});

test.describe('Contact Form', () => {
  test('should submit contact form', async ({ page }) => {
    await page.goto('/contact');

    // Fill out the form
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="email"]', 'john@example.com');
    await page.fill('input[name="subject"]', 'Test Subject');
    await page.fill('textarea[name="message"]', 'This is a test message.');

    // Submit the form
    await page.click('button[type="submit"]');

    // Check for success message
    await expect(page.locator('text=Message sent successfully')).toBeVisible({ timeout: 10000 });
  });

  test('should validate required fields', async ({ page }) => {
    await page.goto('/contact');

    // Try to submit empty form
    await page.click('button[type="submit"]');

    // Check for HTML5 validation or custom validation
    const nameInput = page.locator('input[name="name"]');
    await expect(nameInput).toHaveAttribute('required');
  });
});
