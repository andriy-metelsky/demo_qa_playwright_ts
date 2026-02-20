# DemoQA Playwright TypeScript Framework

Playwright + TypeScript test automation framework for [demoqa.com](https://demoqa.com).

## Architecture Decisions

- **Page Object Model (POM):** Focused on action-oriented methods. Thin and free of assertions to maintain a clear separation of concerns.
- **Custom Fixtures:** Extends Playwright's `test` to provide pre-instantiated Page Objects and navigation helpers, reducing boilerplate in tests.
- **Data Factory:** Provides typed, reusable test data, ensuring consistency and making tests more readable.
- **Deterministic Async:** Strictly follows Playwright's best practices (e.g., `Promise.all` for event handling) to ensure stability and avoid flakiness.
- **Type Safety:** Comprehensive TypeScript interfaces and union types for all data models and controlled values.

## Requirements

- Node.js (v18+)
- NPM

## Installation

```bash
npm install
npx playwright install chromium
```

## Running Tests

Run all tests:
```bash
npx playwright test
```

Run tests with UI mode:
```bash
npx playwright test --ui
```

## Project Structure

- `src/pages/`: Action-oriented Page Objects.
- `src/fixtures/`: Custom Playwright fixtures.
- `src/utils/`: Data factories and utility functions.
- `src/types/`: TypeScript definitions.
- `tests/`: Intent-focused test specifications.
