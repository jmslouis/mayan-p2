
import { test as base, expect } from '@playwright/test';

import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';
import { CheckoutComponent } from '../components/CheckoutComponent';

// Define the fixtures available to our tests
type AppFixtures = {
  homePage: HomePage;
  cartPage: CartPage;
  checkoutComponent: CheckoutComponent;
};

export const test = base.extend<AppFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },

  checkoutComponent: async ({ page }, use) => {
    const checkoutComponent = new CheckoutComponent(page);
    await use(checkoutComponent);
  },
});

export { expect };
