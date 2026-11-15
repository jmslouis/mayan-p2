import { test, expect } from '../fixtures/test-fixtures';
import { checkoutData } from '../test-data/checkout-data';


test('complete a coffee purchase', async ({
  homePage,
  checkoutComponent
}) => {

  // Homepage
  await homePage.navigate();

  // Add a coffee product
  await homePage.addCoffee();

  // Open checkout
  await homePage.openCheckout();

  // Fill in customer details
  await checkoutComponent.fillPaymentDetails(
    checkoutData.validCustomer.name,
    checkoutData.validCustomer.email
  );

  // Set promotion preference
  await checkoutComponent.setPromotionPreference(
    checkoutData.validCustomer.receivePromotions
  );

  // Submit payment details
  await checkoutComponent.submitPayment();

  // Verify checkout redirects to homepage
  await expect(homePage.page).toHaveURL('/');

  // Verify cart is empty after checkout
  await expect(homePage.totalPriceButton).toContainText('$0.00');

  // Verify successful purchase
  await expect(checkoutComponent.confirmDialog).toBeVisible();
});
