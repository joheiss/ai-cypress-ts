export abstract class BasePage {

    navigateToPage(url: string) {
        cy.visit(url);
    }

    checkTitle(title: string) {
        cy.title().should("contain", title);
    }

}