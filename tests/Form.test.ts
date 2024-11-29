import { test, expect } from '@playwright/test';

test('Forms', async ({ page }) => {
  // Navigate to the URL
  await page.goto('https://letcode.in/forms');

  // Fill out the form fields
  await page.fill('#firstname', 'John');
  await page.fill('#lasttname', 'Doe');
  await page.fill('#email', 'john.doe@google.com');
  const countryDropDown = 'select'
  await page.selectOption(countryDropDown, {value: '91'});

  await page.fill('#Phno','9876543210');
  await page.fill('#Addl1', 'abc colony');
  await page.fill('#Addl2','landmark stu pr village');
  await page.fill('#state','TS');
  await page.fill('#postalcode','12344');
  const countryDD = '//html/body/app-root/app-forms/section[1]/div/div/div[1]/div/div/form/div[5]/div[2]/div/div/div/select';
  await page.selectOption(countryDD, {label: 'India'});

  await page.fill('#Date', '2000-01-01');
  await page.check('#female');
  await page.check('[type=checkbox]');
  await page.locator('[type=submit]').click();
  await page.screenshot({path: 's1.png'});
  


});


