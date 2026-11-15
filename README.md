# Part 2: Automated Testing (Playwright)

## Overview
A test automation for [Coffee Cart](https://coffee-cart.app/) using Playwright and TypeScript.

## Tech Stack
- Playwright
- TypeScript
- Node.js

## Project Structure
```text
├── pages/          # Page Object Models
├── components/     # Reusable components
├── fixtures/       # Playwright fixtures
├── test-data/      # Test data
├── tests/          # Test specifications
├── .github/        # GitHub Actions workflow
└── playwright.config.ts
```

## Setup

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Install Playwright browsers:
   ```sh
   npx playwright install
   ```

## Running Tests

Run all tests:
```sh
npx playwright test
```

View the HTML report:
```sh
npx playwright show-report
```

## Test Coverage
- Add coffee to cart
- Checkout and payment submission
- Successful purchase verification
- Double-click coffee title to translate it into Chinese
- Right-click coffee interaction (confirm/cancel)
- Promo popup appearing every third addition