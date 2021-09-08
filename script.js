let menu_top = document.querySelector('.menu_top');
let menu_bottom = document.querySelector('.menu_bottom');

let anything = window.scrollY
window.addEventListener('scroll', function(){
    if(anything < window.scrollY){
        menu_bottom.classList.add('hide_down');
        menu_bottom.classList.remove('hide_up')
    }
    else{ menu_top.classList.add('hide_up');
          menu_bottom.classList.remove('hide_down')
    }
});

