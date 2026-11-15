import { test, expect } from '../fixtures/test-fixtures';
import { checkoutData } from '../test-data/checkout-data';

test('should complete a coffee purchase', async ({
  homePage,
  checkoutComponent
}) => {
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

test('should add coffee through the right-click confirmation dialog', async ({
  homePage,
  cartPage
}) => {
  await homePage.navigate();

  // Right-click the first coffee item
  await homePage.openAddCoffeeDialog();

  // Confirm adding the coffee
  await homePage.confirmAddCoffee();

  // Navigate to cart through navbar
  await homePage.openCart();

  // Verify that one coffee was added
  await expect(cartPage.cartItems).toHaveCount(1);
});

test('should display promo after adding every third item', async ({
  homePage
}) => {
  await homePage.navigate();

  // Add 9 coffee items and check for popup after every third item
  for (let i = 1; i <= 9; i++) {
    await homePage.addCoffee();

    if (i % 3 === 0) await expect(homePage.promoPopup).toBeVisible();
  }
});

test('should translate Mocha title to Chinese on double-click', async ({
  homePage
}) => {
  await homePage.navigate();

  // Double-click the first coffee title to translate
  await homePage.translateCoffee();

  // Verify that the title has been translated to Chinese
  await expect(homePage.coffeeTitles.first()).toContainText('特浓咖啡');
});