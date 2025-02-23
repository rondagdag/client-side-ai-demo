import { test, expect } from '@playwright/test';

const TEST_URL = 'https://www.history.com/news/who-were-the-luddites';

test.describe('Software Engineering Time Machine Extension', () => {
  test.beforeEach(async ({ context }) => {
    const extensionPath = '/Users/Ron/presentations/client-side-ai-demo/techstack-time-machine/dist';
    await context.grantPermissions(['clipboard-read']);
    
    // Load the extension in the context
    await context.route('**/manifest.json', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          manifest_version: 3,
          name: 'Software Engineering Time Machine',
          version: '1.0',
          permissions: ['activeTab', 'scripting', 'storage']
        })
      });
    });
  });

  test('Mainframe Generation perspective', async ({ page }) => {
    await page.goto(TEST_URL);
    await page.waitForLoadState('networkidle');
    
    // Find and select text about industrial revolution
    await page.evaluate(() => {
      const selection = window.getSelection();
      const range = document.createRange();
      const elements = document.evaluate(
        "//text()[contains(., 'industrial')]",
        document,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null
      );
      if (elements.snapshotLength > 0) {
        const element = elements.snapshotItem(0);
        range.selectNodeContents(element.parentNode);
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    });

    // Wait for context menu to be available
    await page.waitForTimeout(1000);
    await page.keyboard.press('ContextMenu');
    await page.getByText('Explain in Engineering Eras').click();
    
    // Verify mainframe perspective in side panel
    const sidePanel = page.frameLocator('iframe[name="side-panel"]');
    const summary = await sidePanel.locator('.prose').textContent();
    expect(summary).toContain('batch processing');
    expect(summary).toContain('structured programming');
  });

  test('Client-Server Generation perspective', async ({ page }) => {
    await page.goto(TEST_URL);
    
    await page.evaluate(() => {
      const selection = window.getSelection();
      const range = document.createRange();
      const elements = document.evaluate(
        "//text()[contains(., 'Luddites')]",
        document,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null
      );
      if (elements.snapshotLength > 0) {
        const element = elements.snapshotItem(0);
        range.selectNodeContents(element.parentNode);
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    });

    await page.keyboard.press('ContextMenu');
    await page.getByText('Explain in Engineering Eras').click();
    
    const sidePanel = page.frameLocator('iframe[name="side-panel"]');
    const summary = await sidePanel.locator('.prose').textContent();
    expect(summary).toContain('client-server');
    expect(summary).toContain('GUI frameworks');
  });

  // Test theme switching in the side panel
  test('Theme switching functionality', async ({ page }) => {
    await page.goto(TEST_URL);
    
    // Open side panel
    await page.evaluate(() => {
      chrome.sidePanel.open();
    });
    
    const sidePanel = page.frameLocator('iframe[name="side-panel"]');
    
    // Test dark mode toggle
    await sidePanel.locator('button[aria-label="Toggle theme"]').click();
    await expect(sidePanel.locator('html.dark')).toBeVisible();
    
    // Switch back to light mode
    await sidePanel.locator('button[aria-label="Toggle theme"]').click();
    await expect(sidePanel.locator('html.dark')).not.toBeVisible();
  });

  // Test clearing the summary
  test('Clear summary functionality', async ({ page }) => {
    await page.goto(TEST_URL);
    
    // First get a summary
    await page.evaluate(() => {
      const selection = window.getSelection();
      const range = document.createRange();
      const elements = document.evaluate(
        "//text()[contains(., 'technology')]",
        document,
        null,
        XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
        null
      );
      if (elements.snapshotLength > 0) {
        const element = elements.snapshotItem(0);
        range.selectNodeContents(element.parentNode);
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
    });

    await page.keyboard.press('ContextMenu');
    await page.getByText('Explain in Engineering Eras').click();
    
    // Wait for side panel and summary
    const sidePanel = page.frameLocator('iframe[name="side-panel"]');
    await sidePanel.locator('.prose').waitFor();
    
    // Clear the summary
    await sidePanel.locator('button[aria-label="Clear summary"]').click();
    
    // Verify summary is cleared
    const summaryText = await sidePanel.locator('.prose').textContent();
    expect(summaryText).toBe('Select text and use right-click menu to get a software engineering perspective');
  });
});