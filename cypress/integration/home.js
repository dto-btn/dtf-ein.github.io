describe('Test the home page', function() {

    it('loads the splash page with expected links', function() {
        cy.visit(`${Cypress.env('host')}/home`);

        cy.get('title').should('contain', 'Home - Digital Task Force');
        cy.get('.call-out .button').should('have.attr', 'href').and('eq', 'https://github.com/orgs/dtf-ein/projects/1');
        cy.get('.site-footer p:nth-child(1) a').should('have.attr', 'href').and('eq', 'https://github.com/dtf-ein/dtf-ein.github.io'); 
        cy.get('.site-footer p:nth-child(2) a').should('have.attr', 'href').and('eq', 'https://github.com/dtf-ein/dtf-ein.github.io/issues');
        cy.get('.fip-bar a:nth-child(1)').should('have.attr', 'href').and('eq', 'https://www.canada.ca/en/shared-services.html');
        cy.get('.fip-bar a:nth-child(2)').should('have.attr', 'href').and('eq', 'https://canada.ca/en');           
    });

    it('changes language to French and has expected links', function() {
        cy.get('.site-nav a[lang="fr"]').click();

        cy.url().should('eq', `${Cypress.env('host')}/accueil/`);
        cy.get('html').should('have.attr', 'lang').and('eq', 'fr');
        cy.get('title').should('contain', 'Accueil - L’Équipe d’intervention numérique');
        cy.get('.call-out .button').should('have.attr', 'href').and('eq', 'https://github.com/orgs/dtf-ein/projects/1');
        cy.get('.site-footer p:nth-child(1) a').should('have.attr', 'href').and('eq', 'https://github.com/dtf-ein/dtf-ein.github.io'); 
        cy.get('.site-footer p:nth-child(2) a').should('have.attr', 'href').and('eq', 'https://github.com/dtf-ein/dtf-ein.github.io/issues');
        cy.get('.fip-bar a:nth-child(1)').should('have.attr', 'href').and('eq', 'https://www.canada.ca/fr/services-partages.html');
        cy.get('.fip-bar a:nth-child(2)').should('have.attr', 'href').and('eq', 'https://canada.ca/fr');              
    });
    
    it('changes language back to English', function() {
        cy.get('.site-nav a[lang="en"]').click();
        
        cy.url().should('eq', `${Cypress.env('host')}/home/`);
        cy.get('html').should('have.attr', 'lang').and('eq', 'en');           
        cy.get('title').should('contain', 'Home - Digital Task Force');
    }); 
 
});