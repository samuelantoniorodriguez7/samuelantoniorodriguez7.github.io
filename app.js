
// Connect css elements to javascript variables so we can manipulate them as we need to. 
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
// Add a listener to the "menu" item defined above
menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})
//Connect abother css element to some more JS 
const get_started_button = document.querySelector('.main__btn');
function get_started_click(){
    window.location.href('/');
}
get_started_button.addEventListener('click', get_started_click);



document.addEventListener('DOMContentLoaded', function() {
    let textItems = [
        { text: "Programming", url: "index.html" },
        { text: "Politics", url: "page2.html" },
        { text: "Fitness", url: "page3.html" }
    ];

    let index = 0;
    const textElement = document.getElementById('rotatingLink');
    function rotateText() {
        textElement.classList.add('slideIn');
        setTimeout(function() {
            textElement.classList.remove('slideIn');
            textElement.classList.add('slideOut');
    
            setTimeout(function() {
                textElement.classList.remove('slideOut');
                textElement.classList.add('restart_loop');
                textElement.textContent = textItems[index].text;
                textElement.href = textItems[index].url;
                index = (index + 1) % textItems.length;
    
                setTimeout(function() {
                    textElement.classList.remove('restart_loop');
                }, 200); 
            }, 1000); 
        }, 10000); 
    }

    rotateText();
    setInterval(rotateText, 11200);
    });
