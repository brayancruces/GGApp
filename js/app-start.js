/**
 * app-start.js
 *
 * Author: Brayan Cruces, Diego Jara
 * 
 * Project: Magical Hasse Flow v1
 *
 * JS de inicialización de Framework7
 *
 */

// Iniciamos el app
var myApp = new Framework7({
    animateNavBackIcon:true,
    swipePanel: 'left',

    // Habilitar Material Design
    material: true,
});

// Expose Internal DOM library
var $$ = Dom7;


// Add main view
var mainView = myApp.addView('.view-main', {
});



// Show/hide preloader for remote ajax loaded pages
// Probably should be removed on a production/local app
/*$$(document).on('ajaxStart', function (e) {
    myApp.showIndicator();
});
$$(document).on('ajaxComplete', function () {
    myApp.hideIndicator();
});
*/


/* PANELES */ 



$$('.open-left-panel').on('click', function (e) {
        // 'left' position to open Left panel
        myApp.openPanel('left');
    });

$$('.open-right-panel').on('click', function (e) {
        // 'right' position to open Right panel
        myApp.openPanel('right');
    });

$$('.panel-close').on('click', function (e) {
	myApp.closePanel();
});



/* Sliders */
// 1 Slide Per View, 50px Between
var mySwiper1 = myApp.swiper('.swiper-1', {
  pagination:'.swiper-1 .swiper-pagination',
  spaceBetween: 50
});


// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
    // Enable Dom Cache so we can use all inline pages
    domCache: true
});




