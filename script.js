let menu_top = document.querySelector('.menu_top')

document.addEventListener('scroll', function(){
    menu_top.classList.add('transform')
});

document.addEventListener('scrollTop', function(){
    menu_top.classList.remove('transform')
})