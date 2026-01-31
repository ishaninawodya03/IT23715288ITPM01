import { test, expect } from '@playwright/test';

test('Pos_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('mama pansal yanavaa.');
  await expect(outputbox).toContainText('මම පන්සල් යනවා.');

});

test('Pos_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('oyaata dhaen saniipadha?');
  await expect(outputbox).toContainText('ඔයාට දැන් සනීපද?');

});

test('Pos_Fun_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('eyaa vaedata giyaa.');
  await expect(outputbox).toContainText('එයා වැඩට ගියා.');

});

test('Pos_Fun_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('api kaeema kanna yanavaa saha passe sellam karanavaa.');
  await expect(outputbox).toContainText('අපි කෑම කන්න යනවා සහ පස්සෙ සෙල්ලම් කරනවා.');

});

test('Pos_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('oyaa yanavaanam mamath enavaa.');
  await expect(outputbox).toContainText('ඔයා යනවානම් මමත් එනවා.');

});

test('Pos_Fun_0006', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('mama dhaen paadam karanavaa.');
  await expect(outputbox).toContainText('මම දැන් පාඩම් කරනවා.');

});

test('Pos_Fun_0007', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('karuNaakaralaa mata meeka karalaa dhenna puLuvandha?');
  await expect(outputbox).toContainText('කරුණාකරලා මට මේක කරලා දෙන්න පුළුවන්ද?');

});

test('Pos_Fun_0008', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('documents tika attach karalaa eyaata email ekak yavanna.');
  await expect(outputbox).toContainText('documents ටික attach කරලා එයාට email එකක් යවන්න.');

});

test('Pos_Fun_0009', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('apiaevidhinnayanavaa.');
  await expect(outputbox).toContainText('අපිඇවිදින්නයනවා.');

});

test('Pos_Fun_0010', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('ikmanta enna');
  await expect(outputbox).toContainText('ඉක්මන්ට එන්න');

});

test('Pos_Fun_0011', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('api heta yanavaa.');
  await expect(outputbox).toContainText('අපි හෙට යනවා.');

});

test('Pos_Fun_0012', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('mama enna hadhannee.');
  await expect(outputbox).toContainText('මම එන්න හදන්නේ.');

});


test('Pos_Fun_0013', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('api school yannee bus ekee.');
  await expect(outputbox).toContainText('අපි school යන්නේ bus එකේ.');

});


test('Pos_Fun_0014', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('api pQQthi yanavaa, oyath enavadha apith ekka yanna?');
  await expect(outputbox).toContainText('අපි පංති යනවා, ඔයත් එනවද අපිත් එක්ක යන්න?');

});


test('Pos_Fun_0015', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('api trip ekak yanavaa.');
  await expect(outputbox).toContainText('අපි trip එකක් යනවා.');

});

test('Pos_Fun_0016', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('eeka Rs. 7000 venavaa.');
  await expect(outputbox).toContainText('ඒක Rs. 7000 වෙනවා.');

});

test('Pos_Fun_0017', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('hari, mama balannam.');
  await expect(outputbox).toContainText('හරි, මම බලන්නම්.');

});

test('Pos_Fun_0018', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('mama iiyee pansal giyaa.');
  await expect(outputbox).toContainText('මම ඊයේ පන්සල් ගියා.');

});

test('Pos_Fun_0019', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('api gedhara yamu.');
  await expect(outputbox).toContainText('අපි ගෙදර යමු.');

});

test('Pos_Fun_0020', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('oyaa enavaanam api methana innavaa.');
  await expect(outputbox).toContainText('ඔයා එනවානම් අපි මෙතන ඉන්නවා.');

});

test('Pos_Fun_0021', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('puLuvannam karuNaakara meeka balanna.');
  await expect(outputbox).toContainText('පුළුවන්නම් කරුණාකර මේක බලන්න.');

});

test('Pos_Fun_0022', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('08/02/2026 mama eeka karanavaa.');
  await expect(outputbox).toContainText('08/02/2026 මම ඒක කරනවා.');

});

test('Pos_Fun_0023', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('siraavata, ela kolloo!');
  await expect(outputbox).toContainText('සිරාවට, එල කොල්ලෝ!');

});

test('Pos_Fun_0024', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputbox = page.locator('textarea');
  const outputbox = page.locator('div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputbox.fill('paasal aDhYAapana kramaveedha navathama thaakShaNaya samaGa ekathu karamin, online saha direct panthi athara samanvitha vaeda piLiveLa kriyaathmaka kiriima sadhahaa niyoojitha vaeda satahanak aaramBha kara aethi athara, dharuvan haa guruvarun athara sambanDha vaedi kiriima, aDhYAapana guNayen saha dhaenumen idhiriyata gena yaama mehi pramuKa raajakaariya vii aetha.');
  await expect(outputbox).toContainText('පාසල් අධ්‍යාපන ක්‍රමවේද නවතම තාක්ෂණය සමඟ එකතු කරමින්, online සහ direct පන්ති අතර සමන්විත වැඩ පිළිවෙළ ක්‍රියාත්මක කිරීම සදහා නියෝජිත වැඩ සටහනක් ආරම්භ කර ඇති අතර, දරුවන් හා ගුරුවරුන් අතර සම්බන්ධ වැඩි කිරීම, අධ්‍යාපන ගුණයෙන් සහ දැනුමෙන් ඉදිරියට ගෙන යාම මෙහි ප්‍රමුඛ රාජකාරිය වී ඇත.');

});









