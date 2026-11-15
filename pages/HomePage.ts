import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  // Coffee items
  readonly coffeeItems: Locator;

  // Right-click confirmation dialog
  readonly dialogYesButton: Locator;
  readonly dialogNoButton: Locator;

  // Promo popup
  readonly promoPopup: Locator;
  readonly promoYesButton: Locator;
  readonly promoNoButton: Locator;

  // Checkout
  readonly totalPriceButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.coffeeItems = page.locator('ul li .cup');

    this.dialogYesButton = page.getByRole('button', { name: 'Yes' });
    this.dialogNoButton = page.getByRole('button', { name: "No" });

    this.promoPopup = page.locator('.promo');
    this.promoYesButton = page.getByRole('button', { name: 'Yes, of course!' });
    this.promoNoButton = page.getByRole('button', { name: "Nah, I'll skip." });

    this.totalPriceButton = page.getByRole('button', { name: 'Proceed to checkout' });
  }

  // Navigate to homepage
  async navigate() {
    await this.page.goto('/');
  }

  // Add coffee using left-click
  async addCoffee(index: number = 0) {
    await this.coffeeItems.nth(index).click();
  }

  // Open add-to-cart dialog using right-click
  async openAddCoffeeDialog(index: number = 0) {
    await this.coffeeItems.nth(index).click({ button: 'right' });
  }

  // Confirm adding coffee through the dialog
  async confirmAddCoffee() {
    await this.promoYesButton.click();
  }

  // Cancel adding coffee through the dialog
  async cancelAddCoffee() {
    await this.promoNoButton.click();
  }

  // Open checkout
  async openCheckout() {
    await this.totalPriceButton.click();
  }
}