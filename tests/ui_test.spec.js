import { test, expect } from '@playwright/test';

test('UI_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('mama yaaLuvath samaGA aevidhinna yanavaa');
  await expect(outputbox).toContainText('මම යාළුවත් සමඟ ඇවිදින්න යනවා');

});