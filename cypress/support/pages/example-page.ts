import { BasePage } from "./base-page";

export class ExamplePage extends BasePage {

    public navigateToExamplePage() {
        super.navigateToPage("https://example.cypress.io/");
    }

}