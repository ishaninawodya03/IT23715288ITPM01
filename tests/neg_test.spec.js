import { test, expect } from '@playwright/test';

test('Neg_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('mama wedata yanawa.');
  await expect(outputbox).toContainText('මම වැඩට යනවා.');

});

test('Neg_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('api het gedara enava.');
  await expect(outputbox).toContainText('අපි හෙට ගෙදර එනවා.');

});

test('Neg_Fun_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('MaMa gEDhaRa yAnaVaA.');
  await expect(outputbox).toContainText('මම ගෙදර යනවා.');

});

test('Neg_Fun_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('mamaaaaa paansaal yanavaaaa.');
  await expect(outputbox).toContainText('මම පන්සල් යනවා.');

});

test('Neg_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('ma ta RAM ek ak gan  na oona, eth mee dha vas val  a m  ila vaediyi');
  await expect(outputbox).toContainText('මට RAM එකක් ගන්න ඕන, ඒත් මේ දවස් වල මිල වැඩියි');

});

test('Neg_Fun_0006', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('api hetha enava.');
  await expect(outputbox).toContainText('අපි හෙට එනවා.');

});

test('Neg_Fun_0007', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('ma1ma ge2dha3ra enavaa.');
  await expect(outputbox).toContainText('මම ගෙදර එනවා.');

});

test('Neg_Fun_0008', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('mama ### yanawaa.');
  await expect(outputbox).toContainText('මම යනවා.');

});

test('Neg_Fun_0009', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('api paasal yanawaa!!!!!!');
  await expect(outputbox).toContainText('අපි පාසල් යනවා.');

});

test('Neg_Fun_0010', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('mama daen padam karanavaa.');
  await expect(outputbox).toContainText('මම දැන් පාඩම් කරනවා.');

});