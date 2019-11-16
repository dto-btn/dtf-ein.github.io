describe('Test the main menu', function() {

    it('loads the home page and checks the menu has no accessibility errors', function() {
        cy.visit(`${Cypress.env('host')}/home`);
        cy.get('#main-menu-trigger').click();

        cy.injectAxe();
        cy.checkA11y();
        
        cy.get('#main-menu .close').click();
    });

    it('has a hidden menu that appears and hides on click', function() {
        cy.get('#main-menu').should('not.be.visible');

        cy.get('#main-menu-trigger').click();
        cy.get('#main-menu').should('be.visible'); 
        
        cy.get('#main-menu .close').click();
        cy.get('#main-menu').should('not.be.visible'); 
        
        cy.get('#main-menu-trigger').click();
        cy.get('#main-menu').should('be.visible'); 
        
        cy.get('h1.site-title').click();
        cy.get('#main-menu').should('not.be.visible');        
    }); 
    
    it('has a hidden menu that appears and hides on focus', function() {
        cy.get('#main-menu').should('not.be.visible');

        cy.get('#main-menu ul li:first-child a').focus();
        cy.get('#main-menu').should('be.visible'); 

        cy.get('#main-menu ul li:first-child a').blur();
        cy.get('#main-menu').should('not.be.visible');         
    });
    
    it('should support arrow keys to navigate menu', function() {
        cy.get('#main-menu-trigger').click();  
        cy.get('#main-menu ul li:nth-child(1) a').should('have.focus');

        cy.get('#main-menu').trigger('keydown', { keyCode: 40, which: 40 });
        cy.get('#main-menu ul li:nth-child(2) a').should('have.focus');

        cy.get('#main-menu').trigger('keydown', { keyCode: 38, which: 38 });
        cy.get('#main-menu ul li:nth-child(1) a').should('have.focus');        

        cy.get('#main-menu').trigger('keydown', { keyCode: 38, which: 38 });
        cy.get('#main-menu-trigger').should('have.focus');
        cy.get('#main-menu').should('not.be.visible'); 
    });

    it('should go to first and last items with Home and End keypress, close with Escape keypress', function() {
        cy.get('#main-menu-trigger').click();
        cy.get('#main-menu').should('be.visible');
        cy.get('#main-menu ul li:first-child a').should('have.focus');
        
        // End
        cy.get('#main-menu').trigger('keydown', { keyCode: 35, which: 35 });
        cy.get('#main-menu ul li:last-child a').should('have.focus'); 
        
        // Home
        cy.get('#main-menu').trigger('keydown', { keyCode: 36, which: 36 });
        cy.get('#main-menu ul li:first-child a').should('have.focus');
        
        // Escape
        cy.get('#main-menu').trigger('keydown', { keyCode: 27, which: 27 });
        cy.get('#main-menu-trigger').should('have.focus');
        cy.get('#main-menu').should('not.be.visible');          
    });
    
    it('should not have a language swap link on desktop', function() {
        cy.get('#main-menu .lang-swap-link').should('not.exist');         
    });
    
    it('should have a language swap link on mobile', function() {
        cy.viewport('iphone-6');
        cy.get('#main-menu .lang-swap-link').should('exist');         
    });    
 
});