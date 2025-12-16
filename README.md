# Test_Playwright_exempel

Modern end-to-end testing project using Playwright and TypeScript. Includes cross-browser testing, mock server support, advanced reporting, and CI-friendly settings.

## About
- Cross-browser tests (currently WebKit enabled; others commented)
- Offline-friendly mock server at http://localhost:4173
- Smart reporting with history, stability scoring, and notifications
- CI-focused retries and single-worker mode; parallel locally

## Quick Start
Prerequisites: Node.js 18+, npm or yarn

Setup
```bash
git clone <repository-url>
cd Test_Playwright_exempel
npm install
```

Run tests
```bash
npx playwright test            # all tests
npx playwright test --ui       # interactive UI
npx playwright test --debug    # debug mode
npx playwright test tests/tmdb.spec.ts   # single file
npx playwright test --headed   # show browser
```

Start mock server
```bash
npm run dev   # serves on http://localhost:4173
```

View reports
```bash
npx playwright show-report
```

## Project Structure
```
Test_Playwright_exempel/
├── tests/                      # Test suites
│   ├── example.spec.ts         # Basic Playwright examples
│   ├── tmdb.spec.ts            # TMDB mock app tests
│   └── test-agent.spec.ts      # Agent functionality tests
├── public/                     # Mock application files
│   └── tmdb-mock1.html         # Movie database mock UI
├── playwright.config.ts        # Playwright configuration
├── package.json                # Project dependencies
└── README.md                   # This file
```

## Test Suites
example.spec.ts
- Navigation and title checks
- Link clicks and visibility assertions

tmdb.spec.ts
- Page layout verification
- 18 movie cards rendered and counted
- Search button visibility and click
- Poster load and src validation
- Bounding box and dimension checks

test-agent.spec.ts
- Agent-focused scenarios (placeholder)

## Technologies
- @playwright/test
- TypeScript
- playwright-smart-reporter
- serve

## Configuration
Browser setup
- Active: WebKit (Desktop)
- Available (commented): Chromium, Firefox, mobile, Edge, Chrome

Reporter features
- Performance monitoring (threshold 0.2)
- History (10 runs), retry analysis, failure clustering
- Stability scoring (threshold 70%)
- AI recommendations
- Slack / Teams webhooks

CI/CD settings
- Local: parallel, no retries, reuse server
- CI: 1 worker, 2 retries

## Mock Application
- Static TMDB mock with 18 movie cards, posters, titles
- Search button for interaction tests
- Image assets for visual checks

## Advanced Usage
```bash
npx playwright test --debug --headed      # debug failing tests
npx playwright test -g "pattern"          # run matching tests
npx playwright test --trace on            # capture traces
npx playwright test --list                # list tests/config
```

## Performance Tips
- Reuse server locally for speed
- Parallel execution locally
- Trace collection on first retry only

## Useful Links
- https://playwright.dev
- https://playwright.dev/docs/test-configuration
- https://github.com/playwright-community/playwright-smart-reporter

## License
ISC

---
Project: Test_Playwright_exempel
Version: 1.0.0
Last Updated: December 16, 2025
