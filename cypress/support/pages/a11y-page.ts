import { terminalLog } from "../utilities/a11y-console-logs";
import { BasePage } from "./base-page";

export class A11yPage extends BasePage {
  public init() {
    cy.injectAxe();
    cy.configureAxe({
      rules: [
        { id: "landmark-one-main", enabled: false },
        { id: "color-contrast", enabled: false },
      ],
      impact: [],
    });
  }

  public checkAllIncludedA11yViolations() {
    cy.checkA11y(null, null, terminalLog);
  }

  public checkCriticalA11yViolations() {
    this.checkA11yViolationsByImpacts("critical");
  }

  public checkSeriousA11yViolations() {
    this.checkA11yViolationsByImpacts("critical", "serious");
  }

  private checkA11yViolationsByImpacts(...impacts: string[]) {
    cy.checkA11y(null, { includedImpacts: impacts }, terminalLog);
  }
}
