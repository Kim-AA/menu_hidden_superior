let menu_top = document.querySelector('.menu_top');
let menu_bottom = document.querySelector('.menu_bottom');

//para que menu_top se muestre al bajar es "show_down"
document.addEventListener('scroll', function(){
    menu_top.classList.add('show_down')
});


//para que menu_bottom desaparezca al bajar es "hide_down"
document.addEventListener('scroll', function(){
    menu_bottom.classList.add('hide_down')
});

/*
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop < 633 {
    menu_top.classList.add('menu_bottom.hide_down')
  })
}
*/

//para que menu_top desaparezca  al subir es "hide_up"
/*
document.addEventListener('scroll', function(){
    menu_top.classList.add('transform_up')
});
*/


//para que menu_bottom se muestre al subir es "show_up"
/*
document.addEventListener('scroll', function(){
    menu_bottom.classList.add('hide_up')
});
*/

//para saber el orden del scroll, número
/*
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    console.log(scrolled);
})
*/
//bottom = 633

