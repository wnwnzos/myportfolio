$(function () { // jQB ///////////////////////////



    // 풀페이지 플러그인 호출
    $("#fullpage").fullpage({

        // 네비게이션옵션
        anchors: ['home', 'about', 'skill', 'portfolio', 'contact'],
        navigation: true,
        navigationPosition: 'right',
        /*네비블릿 오버시 나타나는 글씨*/
        navigationTooltips: ['home', 'about', 'skill', 'portfolio', 'contact'],

        'afterLoad': function (anchorLink, index) {
            if (index == 2) {
                $('.about_wrap').fadeIn(300);
            } else if (index == 3) { //스킬부분 그래프채우기
                $(".sec3").animate({
                    opacity: "1"
                }, 500);
                $('.graph span')
                    .addClass('active');
            } else if (index == 4) { //포트폴리오부분
                $(".port_wrap").animate({
                    opacity: "1"
                }, 500);
            } else if (index == 5) { //컨텍트부분
                $(".cont_wrap").animate({
                    opacity: "1"
                }, 500);
            }

        },




    });
    // 모달창 스크롤막기
    $(document).on('click', '.show', function () {
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);
    });

    $(document).on('click', '.cbtn', function () {
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true);
    });



    /*about영역*****************************/
    var aboutbtn = $(".licencse").find(".detail_btn")

    aboutbtn.click(function (e) {
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
    $(".modal_overlay").hide();
    $(".show").click(function () {


        $(".modal_overlay").fadeIn(500);
    });

    $(".cbtn").click(function () {
        $(".modal_overlay").fadeOut(500);
    });







    /*포트폴리오 스와이퍼 영역************************************/


    new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 40,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,

        },



    }); /*swiper플러그인*/








}); //////////////// jQB ////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
