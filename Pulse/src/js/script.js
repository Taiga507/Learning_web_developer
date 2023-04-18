$('.owl-carousel').owlCarousel({
    speed:1200,
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    autoHeight: true,
    responsive: {
        0:{
            items:1,
            nav:false
        },
        1024:{
            items:1,
        }
    }
})