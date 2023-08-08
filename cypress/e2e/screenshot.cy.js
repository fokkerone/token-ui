/* eslint-disable no-undef */
describe('Button Component', () => {
    it('should compare screenshot of the entire page', () => {
        cy.visit('http://localhost:4400/iframe.html?id=button--primary');
        cy.wait(1200);
        cy.get('#storybook-root').compareSnapshot('button-primary');
        //cy.compareSnapshot('home-page');
    });

    it('should compare screenshot of the entire page  ghost', () => {
        cy.visit(
            'http://localhost:4400/iframe.html?args=size:large;color:primary;type:ghost&id=button--primary&viewMode=story'
        );
        cy.wait(1200);

        cy.compareSnapshot('home-page');
    });
});
