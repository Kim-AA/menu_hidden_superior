let menu_top = document.querySelector('.menu_top');
let menu_bottom = document.querySelector('.menu_bottom');

document.addEventListener('scroll', function(){
    menu_top.classList.add('transform_down')
});

document.addEventListener('scroll', function(){
    menu_bottom.classList.add('hide_down')
});


document.addEventListener('scroll', function(){
    menu_top.classList.add('transform_up')
});

document.addEventListener('scroll', function(){
    menu_bottom.classList.add('hide_up')
});


