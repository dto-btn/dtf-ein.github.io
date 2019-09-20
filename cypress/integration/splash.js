describe('Test the splash page', function() {

    it('loads the splash page', function() {
        cy.visit(Cypress.env('host'));
        cy.screenshot();

        cy.injectAxe();
        cy.checkA11y();  

        cy.get('title').should('contain', 'Digital Task Force - L’Équipe d’intervention numérique');
    });

    it('matches the reference snapshot on desktop', () => {
        cy.visit(Cypress.env('host'))
          .then(() => {
            cy.document()
              .toMatchImageSnapshot();
          });
    });
    
    it('matches the reference snapshot on mobile devices', () => {
        cy.viewport('iphone-6');
        cy.visit(Cypress.env('host'))
          .then(() => {
            cy.document()
              .toMatchImageSnapshot();
          });
    });    

    it('visits the English home page', function() {
        cy.visit(Cypress.env('host'));
        cy.get('main .list-inline a[lang="en"]').click();
        cy.screenshot();

        cy.url().should('eq', `${Cypress.env('host')}/home/`);
        cy.get('html').should('have.attr', 'lang').and('eq', 'en');           
        cy.get('title').should('contain', 'Home - Digital Task Force');
    });

    it('visits the French home page', function() {
        cy.visit(Cypress.env('host'));
        cy.get('main .list-inline a[lang="fr"]').click();
        cy.screenshot();

        cy.url().should('eq', `${Cypress.env('host')}/accueil/`);
        cy.get('html').should('have.attr', 'lang').and('eq', 'fr');
        cy.get('title').should('contain', 'Accueil - L’Équipe d’intervention numérique');
    });    
});