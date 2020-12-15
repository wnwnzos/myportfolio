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
            if (index == 1) {// 홈영역

                $(".toptit").animate({
                    top: "1.9%"
                }, 800);
                $(".bottomtit").delay(500).animate({
                    bottom: "-2.5%"
                }, 700);
                $("nav>ul").delay(1000).animate({
                    bottom: "5%"
                }, 600);
            } else if (index == 2) {// 어바웃영역
                $(".about_tit").animate({
                    right: "0"
                }, 500);
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
            } else if (index == 3) { //스킬부분 그래프채우기
                $(".skill_tit").animate({
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
            } else if (index == 4) { //포트폴리오부분
                $(".portfolio_tit").animate({
                    right: "0"
                }, 800);
                $(".slidewr .left").delay(800).animate({
                    opacity: "1"
                }, 800);
                $(".port_wrap > big").delay(1000).animate({
                    right: "0"
                }, 800);
                $(".detailTxt_box svg").delay(1500).animate({
                     width: "10vw"
                }, 800);
            } else if (index == 5) { //컨텍트부분
                $(".contact_tit").animate({
                    right: "0"
                }, 800);
                $(".cont_wrap").delay(600).animate({
                    left: 0
                }, 800);
            }

        },




    });



    /*about영역*****************************/


    $(".plusbtn").click(function () {
        $(".infobox").animate({
            opacity: 1
        }, 500);
    });






    /********** 타이핑 효과 ********/

    var typed5 = new Typed('#typed5', {
        strings: ['이 사이트는 포트폴리오용으로 제작되었습니다.'],
        typeSpeed: 65,
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


    // 사이트보기 버튼 마우스 오버/아웃시 class넣기/빼기
    
    
    $(".detail_btn").mouseenter(function () {
        $(this).addClass("on");
         $(this).removeClass("off");
    });
    
    $(".detail_btn").mouseleave(function () {
        console.log("아웃");
         $(this).removeClass("on");
         $(this).addClass("off");
    });








}); //////////////// jQB ////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
