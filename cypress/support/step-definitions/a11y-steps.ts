import { Before, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { terminalLog } from "../utilities/a11y-console-logs";
import { A11yPage } from "../pages/a11y-page";

const a11y = new A11yPage();

When(`I initialize the accessibility checks`, () => {
  a11y.init();
});

Then(`I see a page which fully conforms with accessibility rules`, () => {
  a11y.checkAllIncludedA11yViolations();
});

Then(`I find no critical accessibility violations`, () => {
  a11y.checkCriticalA11yViolations();
});

Then(`I find no serious accessibility violations`, () => {
  a11y.checkSeriousA11yViolations();
});
