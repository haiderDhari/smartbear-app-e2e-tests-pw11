import { test as base, expect } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

type PageObject = {
  basePage: BasePage,
  loginPage: LoginPage,
  homePage: HomePage,
  orderData: {
    productinfo: {
      name: string,
      quantity: number
    },
    addressInfo: {

    },
    paymentInfo: {

    }
  }
}

export const test = base.extend<PageObject>({
  basePage: async ({ page }, use) => {
    await page.goto('');
    const basePage = new BasePage(page);
    // actions
    await use(basePage);
  },

  loginPage: async ({ page }, use) => {
    await page.goto('');
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },

  homePage: async ({ page }, use) => {
    await page.goto('');
    const homePage = new HomePage(page);

    await use(homePage);
  }
});

export { expect };



