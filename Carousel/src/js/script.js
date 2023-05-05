$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        speed:1200,
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        items:3,
        // responsive: {
        //     0:{
        //         items:2,
        //         nav:false
        //     },
        //     1024:{
        //         items:3,
        //     }
        // }
    });
    
    new WOW().init();
});