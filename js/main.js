$(function () { // jQB ///////////////////////////


    // 풀페이지 플러그인 호출
    $("#fullpage").fullpage({

        // 네비게이션옵션
        anchors: ['home', 'about', 'skill', 'portfolio', 'contact'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Page1', 'Page2', 'Page3', 'Page4', 'Page5'],
    });

   





    /********** 타이핑 효과 ********/

    var typed5 = new Typed('#typed5', {
        strings: ['안녕하세요.  웹세상에서 소통할수 있는 웹 퍼블리셔, 박혜주입니다.'],
        typeSpeed: 50,
        backSpeed: 0,
        cursorChar: '_',
        shuffle: true,
        smartBackspace: false,
        loop: true
    });


    /*포트폴리오 스와이퍼 영역************************************/


    new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',

        },



    }); /*swiper플러그인*/

    
    
    
     /*스크롤액션 텍스트보이기*****************************/
    var tpos = [];
    var tg = $(".sec3");
   

    console.log("타겟위치:" + tpos);


/// 스크롤 액션 타겟 셋팅 ///
    tg.find("#bar1 span").animate({
        width:"90%",
        opacity:"1"
        
    },3000);
    
    tg.find("#bar2 span").animate({
        width:"30%",
        opacity:"1"
    },3000);
    
    tg.find("#bar3 span").animate({
        width:"50%",
        opacity:"1"
    },3000);
    
    tg.find("#bar4 span").animate({
        width:"70%",
        opacity:"1"
    },3000);
    
    tg.find("#bar5 span").animate({
        width:"40%",
        opacity:"1"
    },3000);
    
    tg.find("#bar6 span").animate({
        width:"80%",
        opacity:"1"
    },3000);
    
    



  



}); //////////////// jQB ////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
