import puppeteer from 'puppeteer';
import faker from 'faker';

describe('E2E Tests', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false
    });
    page = await browser.newPage();

    await page.goto('http://localhost:3000');

    await page.waitForSelector('.App');
  })

  afterAll(() => {
    browser.close();
  })

  test('should say "Thank you!" when form is submitted', async () => {
    // given
    const creditCardNumber = faker.finance.creditCardNumber('mastercard').replace(/-/g, '');
    const expiryDate = faker.date.future();
    const expiryMonth = `${expiryDate.getMonth()}`.padStart(2, '0');
    const expriyYear = `${expiryDate.getFullYear()}`.substring(2);

    // when
    await page.type('input[name="name"]', faker.name.firstName() + ' ' + faker.name.lastName());
    await page.type('input[name="number"]', creditCardNumber);
    await page.type('input[name="cvc"]', faker.finance.creditCardCVV());
    await page.type('input[name="expiry"]', `${expiryMonth}${expriyYear}`);
    await page.type('input[name="zip"]', faker.address.zipCode());
    await submitForm();

    // then
    expect(await hasBeenSubmitted()).toBe(true);
  })

  test('should no be able to submit the form with blank fields', async () => {
    // when
    await submitForm();

    // then
    expect(await hasBeenSubmitted()).toBe(false);
  })

  const submitForm = async () => {
    await page.$eval('button', button => button.click() );
  }

  const hasBeenSubmitted = async () => {
    try {
      const html = await page.$eval('.Thanks', e => e.innerHTML)
      return html === 'Thank you!';
    } catch (_) {
      return false;
    }
  }
});