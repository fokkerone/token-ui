/* eslint-disable no-undef */
describe('Button Component', () => {
    it('should compare screenshot of the entire page', () => {
        cy.visit('http://localhost:4400/iframe.html?id=button--primary');
        cy.wait(1200);
        cy.get('#storybook-root').compareSnapshot('button-primary');
        //cy.compareSnapshot('home-page');
    });
});
