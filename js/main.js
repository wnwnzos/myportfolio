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
            if (index == 1) { // 홈영역
                $(".toptit").stop().animate({
                    top: "0",
                }, 800);
                $(".bottomtit").stop().delay(500).animate({
                    bottom: "-4%"
                }, 700);
                $("nav>ul").stop().delay(1000).animate({
                    bottom: "5%"
                }, 600);
            }
            if (index !== 1) { // 해당영역아닐때 다시 밖으로빼놓기(원상복귀)
                $(".toptit").stop().animate({
                    top: "-90%",
                }, 100);
                $(".bottomtit").stop().animate({
                    bottom: "-50%"
                }, 100);
                $("nav>ul").stop().animate({
                    bottom: "-50px"
                }, 100);
            }
            if (index == 2) { // 어바웃영역
                $(".about_tit").stop().animate({
                    right: "0"
                }, 800);
                $(".topshow").delay(500).animate({
                    opacity: 1
                }, 800);
                $(".atit small").delay(1000).animate({
                    opacity: 1
                }, 800);
                $(".mypic").delay(1500).animate({
                    opacity: 1
                }, 800);
                $(".info i").delay(2000).animate({
                    opacity: 1
                }, 800);
                $(".info_tit").delay(2500).animate({
                    opacity: 1
                }, 800);
            }
            if (index !== 2) { //해당영역아닐때 다시 밖으로빼놓기(원상복귀)
                $(".about_tit").stop().animate({
                    right: "-70%"
                }, 100);
            }
            if (index == 3) { //스킬부분 그래프채우기
                $(".skill_tit").stop().animate({
                    right: "0"
                }, 800);
                $(".left_wrap").animate({
                    opacity: "1"
                }, 500);
                $(".right_wrap").delay(500).animate({
                    opacity: "1"
                }, 500);
                $('.graph span')
                    .addClass('active');
                $(".right_sub").delay(1000).animate({
                    opacity: "1"
                }, 500);
            }
            if (index !== 3) { //해당영역아닐때 다시 밖으로빼놓기(원상복귀)
                $(".skill_tit").stop().animate({
                    right: "-70%"
                }, 100);
            }
            if (index == 4) { //포트폴리오부분
        
                $(".portfolio_tit").stop().animate({
                    right: "0"
                }, 800);
                $(".port_wrap > big").delay(500).animate({
                    right: "0"
                }, 500);
                $(".slidewr .left").delay(1000).animate({
                    opacity: "1"
                }, 1000);

            }
            if (index !== 4) { //해당영역아닐때 다시 밖으로빼놓기(원상복귀)
                $(".portfolio_tit").stop().animate({
                    right: "-100%"
                }, 100);
            }
            if (index == 5) { //컨텍트부분
                $(".contact_tit").stop().animate({
                    right: "0"
                }, 800);
                $(".cont_img").delay(600).animate({
                    left: 0
                }, 800);
                $(".cont_wrap ul").delay(1200).animate({
                    opacity: 1
                }, 800);
                $(".dbtn").delay(1800).animate({
                    opacity: 1
                }, 800);
                $(".redtxt").delay(2000).animate({
                    opacity: 1
                }, 800);
                
            }
            if (index !== 5) { //해당영역아닐때 다시 밖으로빼놓기(원상복귀)
                $(".contact_tit").stop().animate({
                    right: "-80%"
                }, 100);
            }

        },


    });






    /*about영역*****************************/

    //클릭버튼 클릭시 스펙보이기 셋팅
    $(".plusbtn").click(function () {
        $(".infobox").animate({
            opacity: 1
        }, 500);
    });






    /********** 타이핑 효과 ********/

    var typed5 = new Typed('#typed5', {
        strings: ['이 사이트는 포트폴리오용으로 제작되었습니다.'],
        typeSpeed: 100,
        backSpeed: 0,
        cursorChar: '_',
        shuffle: true,
        smartBackspace: false,
        loop: true
    });







    /*포트폴리오 스와이퍼 영역************************************/


    new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 40,
        loop: true, // 무한반복
        pagination: { // 페이징

            el: '.swiper-pagination',

            clickable: true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동

        },

        navigation: { // 네비게이션

            nextEl: '.swiper-button-next', // 다음 버튼 클래스명

            prevEl: '.swiper-button-prev', // 이번 버튼 클래스명

        },


    }); /*swiper플러그인*/





    /*모바일일때*/
    $(".menu").click(function () {
        $(this).fadeOut(300);
        $(".menu_pop").fadeIn(800);
        $(".menu_list").animate({
            left: "50%"
        }, 500);
    });

    $(".m_cbtn").click(function () {
        $(".menu").fadeIn(300);
        $(".menu_pop").fadeOut(800);
        $(".menu_list").stop().animate({
            left: "100%"
        }, 500);

    });


    $(".menu_list ul li").click(function () {
        $(".menu").fadeIn(300);
        $(".menu_pop").fadeOut(800);
        $(".menu_list").stop().animate({
            left: "100%"
        }, 600);
    });


    // 모달창 스크롤막기
    $(document).on('click', '.menu', function () {
        $.fn.fullpage.setAllowScrolling(false);
        $.fn.fullpage.setKeyboardScrolling(false);
    });

    $(document).on('click', '.m_cbtn', function () {
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true);
    });
    $(document).on('click', '.menu_list ul li', function () {
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true);
    });

}); //////////////// jQB ////////////////////////
///////////////////////////////////////////////
