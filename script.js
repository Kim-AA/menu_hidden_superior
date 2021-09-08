let menu_top = document.querySelector('.menu_top');
let menu_bottom = document.querySelector('.menu_bottom');

let lastScrollY = window.scrollY
window.addEventListener('scroll', function(){
    if(lastScrollY < window.scrollY){
        menu_bottom.classList.add('hide_down');
        menu_bottom.classList.remove('hide_up')
    }
    else{menu_bottom.classList.remove('hide_down')
         menu_top.classList.add('hide_up');
    }
});

