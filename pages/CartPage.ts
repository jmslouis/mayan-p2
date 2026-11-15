
import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  // Cart elements
  readonly cartItems: Locator;
  readonly totalPriceButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItems = page.locator('li.list-item');
    this.totalPriceButton = page.getByRole('button', { name: 'Proceed to checkout' });
  }

  // Navigate to cart
  async navigate() {
    await this.page.goto('/cart');
  }

  // Get a specific cart item
  getCartItem(index: number): Locator {
    return this.cartItems.nth(index);
  }

  // Increase coffee quantity
  async increaseQuantity(index: number) {
    const item = this.getCartItem(index);

    await item.getByRole('button', { name: /^Add one/ }).click();
  }

  // Decrease coffee quantity
  async decreaseQuantity(index: number) {
    const item = this.getCartItem(index);

    await item.getByRole('button', { name: /^Remove one/ }).click(); 
  }

  // Remove all quantities of a coffee
  async removeItem(index: number) {
    const item = this.getCartItem(index);

    await item.getByRole('button', { name: /^Remove all/ }).click(); 
  }

  // Open checkout
  async openCheckout() {
    await this.totalPriceButton.click();
  }
}
