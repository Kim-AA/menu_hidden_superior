let menu_top = document.querySelector('.menu_top');
let menu_bottom = document.querySelector('.menu_bottom');

document.addEventListener('scroll', function(){
    menu_top.classList.add('transform')
});

document.addEventListener('scroll', function(){
    menu_bottom.classList.add('hide')
});