describe('Test the home page', function() {

    it('loads the home page with expected links', function() {
        cy.visit(`${Cypress.env('host')}/home`);

        cy.injectAxe();
        cy.checkA11y();   

        cy.get('title').should('contain', 'Home - Digital Task Force');
        cy.get('.call-out .button').should('have.attr', 'href').and('eq', 'https://github.com/orgs/dtf-ein/projects/1');
        cy.get('.site-footer a').should('have.attr', 'href').and('eq', 'https://github.com/dtf-ein/dtf-ein.github.io/issues');
        cy.get('footer .fip-bar a:nth-child(1)').should('have.attr', 'href').and('eq', 'https://github.com/dtf-ein/dtf-ein.github.io');
        cy.get('footer .fip-bar a:nth-child(2)').should('have.attr', 'href').and('eq', 'https://canada.ca/en');           
    });

    it('matches the reference snapshot on desktop in English', () => {
        cy.visit(`${Cypress.env('host')}/home`)
            .then(() => {
                cy.get('header').toMatchImageSnapshot();
                cy.wait(500);
                cy.get('footer').toMatchImageSnapshot();
            });
    });
    
    it('matches the reference snapshot on mobile devices in English', () => {
        cy.viewport('iphone-6');
        cy.visit(`${Cypress.env('host')}/home`)
            .then(() => {
                cy.get('header').toMatchImageSnapshot();
                cy.wait(500);
                cy.get('footer').toMatchImageSnapshot();
            });
    });
    
    it('matches the reference snapshot on desktop in French', () => {
        cy.visit(`${Cypress.env('host')}/accueil`)
            .then(() => {
                cy.get('header').toMatchImageSnapshot();
                cy.wait(500);
                cy.get('footer').toMatchImageSnapshot();
            });
    });
    
    it('matches the reference snapshot on mobile devices in French', () => {
        cy.viewport('iphone-6');
        cy.visit(`${Cypress.env('host')}/accueil`)
            .then(() => {
                cy.get('header').toMatchImageSnapshot();
                cy.wait(500);
                cy.get('footer').toMatchImageSnapshot();
            });
    });    

    it('changes language to French and has expected links', function() {
        cy.visit(`${Cypress.env('host')}/home`);
        cy.get('#lang-swap a[lang="fr"]').click();

        cy.injectAxe();
        cy.checkA11y();  

        cy.url().should('eq', `${Cypress.env('host')}/accueil/`);
        cy.get('html').should('have.attr', 'lang').and('eq', 'fr');
        cy.get('title').should('contain', 'Accueil - L’Équipe d’intervention numérique');
        cy.get('.call-out .button').should('have.attr', 'href').and('eq', 'https://github.com/orgs/dtf-ein/projects/1');
        cy.get('.site-footer a').should('have.attr', 'href').and('eq', 'https://github.com/dtf-ein/dtf-ein.github.io/issues');
        cy.get('footer .fip-bar a:nth-child(1)').should('have.attr', 'href').and('eq', 'https://github.com/dtf-ein/dtf-ein.github.io');
        cy.get('footer .fip-bar a:nth-child(2)').should('have.attr', 'href').and('eq', 'https://canada.ca/fr');              
    });
    
    it('changes language to English from French', function() {
        cy.visit(`${Cypress.env('host')}/accueil`);
        cy.get('#lang-swap a[lang="en"]').click();
        
        cy.url().should('eq', `${Cypress.env('host')}/home/`);
        cy.get('html').should('have.attr', 'lang').and('eq', 'en');           
        cy.get('title').should('contain', 'Home - Digital Task Force');
    }); 
 
});