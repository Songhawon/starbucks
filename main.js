const inner=document.querySelector('header .ranking');

window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY>500){
        gsap.to(inner,.6,{
            opacity:0,
            display:'none'
        });
    }else{
        gsap.to(inner,.6,{
            opacity:1,
            display:'block'
        
        });
    }
},300));

const fadeEl=document.querySelectorAll('.notice .faidin');

fadeEl.forEach(function(fade, index){
    gsap.to(fade,1.,{
        delay:(index+1)*.7,
        opacity: 1
    });

});
// new siper(선택자 옵션)
new Swiper('header .swiper-container',{
    direction: 'vertical',
    delay:.7,
    loop:true,
    autoplay:true
});

new Swiper('.promotion .swiper-container',{
    direction:'horizontal',
    slidesPerView:3, //한번에 보여줄 슬라이드개수
    spaceBetween:10,// 슬라이드 사이여백
    centeredSlides: true, //1번슬라이드가 가운데로 보이기
    loop:true,
     autoplay:{
      delay:700
    },
    pagination:{
        el:'.promotion .swiper-pagination',
        clickable:true //사용자 페이지 번호 요소 제어

    },
    navigation:{
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next'
    }
});

new Swiper('.awards .swiper-container', {
    direction:'horizontal',
    autoplay:true,
    loop:true,
    spaceBetween:30,
    slidesPerView:5,
    navigation:{
        prevEl:'.awards .swiper-prev',
        nextEl:'.awards .swiper-next'
    }
});


const promotionEl=document.querySelector('.promotion');//숨김
const promotionToggleBtn=document.querySelector('.toggle-promotion');
let isHidePromotion=false;
promotionToggleBtn.addEventListener('click',function(){
isHidePromotion=!isHidePromotion;
if(isHidePromotion)
{
//숨김처리!
promotionEl.classList.add('hide');
}else{
    //보임처리 
    promotionEl.classList.remove('hide');
}
});

function floatingObject(selector,delay,size){
    // gsap.to(요소,시간,옵션);
    gsap.to(selector,1,{
        y:size,
        repeat:-1,
        yoyo:true,
        ease:Power1.easeInOut,
        delay:2 
    });
}
floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);


const spyEls=document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
        .Scene({
            triggerElement:spyEl, //보여짐 여부를 감시할 요소를 지정
            triggerHook:.8, //뷰포트 기준 위0 아래 1 0.8높이까지
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());

})