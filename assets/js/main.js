/**
 * Bind menu behaviour, which is based on recommendations from:
 * https://www.w3.org/TR/wai-aria-practices/examples/menu-button/menu-button-links.html
 */
var menu = {
    trigger: null,
    elem: null,
    keyCodes: Object.freeze({
        'RETURN': 13,
        'ESC': 27,
        'SPACE': 32,
        'END': 35,
        'HOME': 36,
        'UP': 38,
        'DOWN': 40
    }),   

    /**
     * Get element references and bind event handlers if the page has a menu.
     */
    init: function(){
        this.trigger = document.querySelector('#main-menu-trigger');
        this.elem = document.querySelector('#main-menu');
        if(this.isValid()){
            this.bindEvents();
        }
    },
    /**
     * Do we have the elments we need to make it so?
     */
    isValid: function(){
        return this.trigger && this.elem;
    },
    /**
     * Binds all the event handlers to make the magic happen.
     */
    bindEvents: function(){
        this.trigger.addEventListener('click', this.open);    
        this.elem.addEventListener('focusin', this.open);    
        this.elem.addEventListener('focusout', this.close); 
        this.elem.addEventListener('keydown', this.keyEvents)
        window.addEventListener('click', this.close); 
    },
    /**
     * Open the menu.
     * @param {Event} event The Event object from the handler.
     */
    open: function(event){
        event.stopPropagation();
        menu.elem.classList.add('active');
        menu.trigger.setAttribute('aria-expanded', 'true');

        // Focus first menu element when the menu is triggered by the menu button
        if(this === menu.trigger){
            menu.elem.querySelector('ul li:first-child a').focus();            
        }       
    },
    /**
     * Close the menu
     */
    close: function(){
        menu.elem.classList.remove('active');
        menu.trigger.setAttribute('aria-expanded', 'false');
    },
    /**
     * Keyboard events on the menu. 
     * @param {Event} event The Event object from the handler.
     */
    keyEvents: function(event){
        if(event.keyCode === menu.keyCodes.ESC){
            menu.close();
            menu.trigger.focus();

        } else if(event.keyCode === menu.keyCodes.UP || event.keyCode === menu.keyCodes.DOWN){
            var sibling = event.keyCode === menu.keyCodes.UP ? 'previousElementSibling' : 'nextElementSibling';
            var link = document.activeElement.parentElement[sibling];
            if(link){
                link.querySelector('a').focus();
            } else {
                menu.close();
                menu.trigger.focus();
            }      
        
        } else if(event.keyCode === menu.keyCodes.HOME){
            menu.elem.querySelector('ul li:first-child a').focus();
        
        } else if(event.keyCode === menu.keyCodes.END){
            menu.elem.querySelector('ul li:last-child a').focus();
        }
    }
};

// Create the menu
menu.init();

// Update the header menu based on window width
window.addEventListener('resize', function() {
    const langSwapElem = document.querySelector('#lang-swap-link');
    if(langSwapElem){
        const targetElem = window.innerWidth > 576 ? '#lang-swap' : '#main-menu ul';
        document.querySelector(targetElem).appendChild(langSwapElem);
    } 
});

window.dispatchEvent(new Event('resize'));