# puppeteerdemo

## Install Puppeteer
- npm install  puppeteer

## Install playwright
- https://playwright.dev/docs/intro#installation
- https://playwright.dev/docs/cli
# Running without arguments will install default browsers
- npx playwright install
- npx playwright codegen --save-storage=auth.json  wikipedia.org

- npm i -D @playwright/test

Just save this as filename.spec.js in a /tests directory in your project and then run:
- npx playwright test --browser=firefox
- npx playwright test --browser=all

to run all tests in /tests or run:

- npx playwright test --headed

- npx playwright test --browser=chromium --headed

- npx playwright test filename.spec.js

#  Chrome addon "Headless Recorder" ( playwright  and Puppeteer)

- https://chrome.google.com/webstore/detail/headless-recorder/djeegiggegleadkkbgopoonhjimgehda