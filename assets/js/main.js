// Update the header menu based on window width
window.addEventListener('resize', () => {
    const langSwapElem = document.getElementById('lang-swap');
    if(langSwapElem){
        const targetElem = window.innerWidth > 576 ? '.fip-bar' : '.branding';
        document.querySelector(targetElem).appendChild(langSwapElem);
    } 
});

window.dispatchEvent(new Event('resize'));