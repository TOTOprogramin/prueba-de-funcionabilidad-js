var swiper = new Swiper(".mySwiper-1", {
    slidesPeview:1,
    spaceBetween:30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable:true,
        
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }   
});

var swiper = new Swiper(".mySwiper-2", {
    slidesPeview:3,
    spaceBetween:20,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints :{
        0: {
            slidesPeview:1,    
        },    
        520: {
            slidesPeview:2,    
        },
        950: {
            slidesPeview:3,    
        }

    }    
});

let tapInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach(function(input) {

    input.addEventListener('change', function() {
        let id = input.ariaValueMax;
        let thisSwiper = document.getElementsById('swiper' + id);
        thisSwiper.swiper.update();
  })

})