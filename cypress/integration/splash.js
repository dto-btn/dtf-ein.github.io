describe('Test the splash page', function() {

    it('loads the splash page', function() {
        cy.visit(Cypress.env('host'));

        cy.get('title').should('contain', 'Digital Task Force - L’Équipe d’intervention numérique');
    });

    it('visits the English home page', function() {
        cy.visit(Cypress.env('host'));
        cy.get('main .list-inline a[lang="en"]').click();

        cy.url().should('eq', `${Cypress.env('host')}/home/`);
        cy.get('html').should('have.attr', 'lang').and('eq', 'en');           
        cy.get('title').should('contain', 'Home - Digital Task Force');
    });

    it('visits the French home page', function() {
        cy.visit(Cypress.env('host'));
        cy.get('main .list-inline a[lang="fr"]').click();

        cy.url().should('eq', `${Cypress.env('host')}/accueil/`);
        cy.get('html').should('have.attr', 'lang').and('eq', 'fr');
        cy.get('title').should('contain', 'Accueil - L’Équipe d’intervention numérique');
    });    
});