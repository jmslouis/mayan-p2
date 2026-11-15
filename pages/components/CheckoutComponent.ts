import { Page, Locator } from '@playwright/test';

export class CheckoutComponent {
  readonly page: Page;

  // Checkout form
  readonly paymentForm: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly promotionCheckbox: Locator;
  readonly submitButton: Locator;
  readonly closeButton: Locator;

  // Confirmation dialog
  readonly confirmDialog: Locator;

  constructor(page: Page) {
    this.page = page;

    this.paymentForm = page.getByRole('form', { name: 'Payment form' });

    this.nameInput = page.getByLabel('Name');
    this.emailInput = page.getByLabel('Email');
    this.promotionCheckbox = page.getByRole('checkbox', { name: 'Promotion checkbox' });
    
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.closeButton = page.getByRole('button', { name: '×' });

    this.confirmDialog = page.getByRole('button', { name: 'Thanks for your purchase. Please check your email for payment.' });
  }

  // Fill in customer details
  async fillPaymentDetails(name: string, email: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
  }

  // Select or deselect promotion checkbox
  async setPromotionPreference(accept: boolean) {
    if (accept) {
      await this.promotionCheckbox.check();
    } else {
      await this.promotionCheckbox.uncheck();
    }
  }

  // Submit payment details
  async submitPayment() {
    await this.submitButton.click();
  }

  // Close checkout popup
  async closeCheckout() {
    await this.closeButton.click();
  }
}
