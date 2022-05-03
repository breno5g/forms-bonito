import puppeteer from 'puppeteer';

const URL =
  'https://be-trybe.typeform.com/to/NXygjr?typeform-source=playbook.betrybe.com#cohort_name=Turma%2017';

const textArray = ['Bot bonito', 'Meireles é feio', 'Pedro cabeça de bilhar'];

const type = async (page, text) => {
  await page.waitForTimeout(1000);
  await page.keyboard.type(text);
  await page.waitForTimeout(5000);
  await page.keyboard.press('Enter');
};

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(URL);
  await page.keyboard.press('Enter');
  await page.keyboard.press('Enter');
  for (let text of textArray) {
    await type(page, text);
  }
  await browser.close();
})();
