$(function () { // jQB ///////////////////////////


    // 풀페이지 플러그인 호출
    $("#fullpage").fullpage({

        // 네비게이션옵션
        anchors: ['home', 'about', 'skill', 'portfolio', 'contact'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['home', 'about', 'skill', 'portfolio', 'contact'],
        'afterLoad': function (anchorLink, index) {
            if (index == 3) {
                $('.graph span')
                    .addClass('active');
            }
         
        },

    });


    
    /*about영역*****************************/
    var aboutbtn = $(".licencse").find(".detail_btn")
    
    aboutbtn.click(function(e){
       e.preventDefault();
        $(".licencse").hide();
        $(".lishow").stop().fadeIn(1000);
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
    
    /*mbti클릭시 보이기*/
    $(".show").click(function(){
        $(this).next(".bottom").animate({
            left:"0"
        },500)
    });// click /////////////////////
    
    $(".cbtn").click(function(){
        $(this).parent(".bottom").animate({
            left:"200%"
        },500)
    });// click /////////////////////
    
    
    


    /*포트폴리오 스와이퍼 영역************************************/


    new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 40,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable:true,

        },



    }); /*swiper플러그인*/








}); //////////////// jQB ////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////



