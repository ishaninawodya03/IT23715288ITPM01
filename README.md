# IT23715288ITPM01 - Swift Translator Test Suite

## Project Description

This project is a comprehensive test suite built with Playwright for testing the functionality and user interface of the Swift Translator web application. The Swift Translator is an online tool that converts Sinhala transliteration (Romanized Sinhala) into proper Sinhala Unicode text.

The test suite includes:
- **Positive Functional Tests** (24 tests): Verifying correct translation of various Sinhala phrases and sentences
- **Negative Functional Tests** (10 tests): Testing edge cases, incorrect inputs, and error handling
- **UI Functional Tests** (1 test): Ensuring the user interface elements work correctly
- **Example Tests**: Basic Playwright demonstration tests

## Features Tested

- Translation accuracy for Sinhala transliteration to Unicode
- Handling of various input formats (lowercase, mixed case, with numbers, special characters)
- UI responsiveness and element interactions
- Error handling for malformed inputs

## Prerequisites

Before running the tests, ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** or **yarn** package manager
- **Git** for cloning the repository

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ishaninawodya03/IT23715288ITPM01.git
   cd IT23715288ITPM01
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

### Run All Tests
```bash
npx playwright test
```

### Run Tests in Headed Mode (visible browser)
```bash
npx playwright test --headed
```

### Run Specific Test File
```bash
npx playwright test tests/pos_test.spec.js
npx playwright test tests/neg_test.spec.js
npx playwright test tests/ui_test.spec.js
```

### Run Tests for Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Generate and View Test Report
After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Project Structure

```
IT23715288ITPM01/
├── tests/
│   ├── example.spec.js      # Basic Playwright example tests
│   ├── pos_test.spec.js     # Positive functional tests (24 tests)
│   ├── neg_test.spec.js     # Negative functional tests (10 tests)
│   └── ui_test.spec.js      # UI functional tests (1 test)
├── playwright-report/       # Generated test reports
├── test-results/            # Test execution results and traces
├── package.json             # Project dependencies and scripts
├── playwright.config.js     # Playwright configuration
└── README.md                # This file
```

## Test Categories

### Positive Tests (pos_test.spec.js)
These tests verify that the translator correctly converts various Sinhala transliterations to Unicode. Examples include:
- Simple phrases: "mama pansal yanavaa." → "මම පන්සල් යනවා."
- Complex sentences with multiple words
- Sentences with numbers and special characters
- Long paragraphs

### Negative Tests (neg_test.spec.js)
These tests check how the translator handles edge cases and potentially incorrect inputs:
- Typos and misspellings
- Mixed case inputs
- Inputs with extra characters or numbers
- Unusual spacing

### UI Tests (ui_test.spec.js)
These tests ensure the web interface elements function properly:
- Input textarea responsiveness
- Output display area
- Overall page layout and interaction

## Configuration

The project uses Playwright's default configuration with the following settings:
- **Test Directory**: `./tests`
- **Browsers**: Chromium, Firefox, WebKit
- **Parallel Execution**: Enabled
- **Retries**: 2 on CI, 0 locally
- **Reporter**: HTML report
- **Tracing**: Enabled on first retry

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-test-case`
3. Add your test cases following the existing naming convention
4. Run tests to ensure they pass: `npx playwright test`
5. Commit your changes: `git commit -am 'Add new test case'`
6. Push to the branch: `git push origin feature/new-test-case`
7. Submit a pull request

## License

This project is licensed under the ISC License.

## Repository

- **GitHub**: [https://github.com/ishaninawodya03/IT23715288ITPM01](https://github.com/ishaninawodya03/IT23715288ITPM01)
- **Issues**: [https://github.com/ishaninawodya03/IT23715288ITPM01/issues](https://github.com/ishaninawodya03/IT23715288ITPM01/issues)

## Author

W.S.I.Nawodya (IT23715288)