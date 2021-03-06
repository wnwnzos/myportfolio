$(function () { // jQB ///////////////////////////



    // 풀페이지 플러그인 호출
    $("#fullpage").fullpage({

        // 네비게이션옵션
        anchors: ['home', 'about', 'skill', 'portfolio', 'joint', 'contact'],
        navigation: true,
        navigationPosition: 'right',
        /*네비블릿 오버시 나타나는 글씨*/
        navigationTooltips: ['home', 'about', 'skill', 'portfolio', 'joint', 'contact'],
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
                $(".info_tit_m").delay(2500).animate({
                    opacity: 1
                }, 800);
                $(".aboutline").delay(3000).animate({
                    width: "100%"
                }, 950);
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
                $(".right_sub").delay(1000).stop().animate({
                    opacity: "1"
                }, 500);
            }
            if (index !== 3) { //해당영역아닐때 다시 밖으로빼놓기(원상복귀)
                $(".skill_tit").stop().animate({
                    right: "-70%"
                }, 100);

                $('.graph span')
                    .removeClass('active');
                $(".right_sub").delay(1000).stop().animate({
                    opacity: "0"
                }, 500);
            }
            if (index == 4) { //포트폴리오부분

                $(".portfolio_tit").stop().animate({
                    right: "0"
                }, 800);
                $(".slidewr .left img").delay(500).animate({
                    opacity: "1"
                }, 1000);
                $(".detailTxt_box").delay(1000).animate({
                    opacity: "1"
                }, 1000);

            }
            if (index !== 4) { //해당영역아닐때 다시 밖으로빼놓기(원상복귀)
                $(".portfolio_tit").stop().animate({
                    right: "-100%"
                }, 100);
            }
            if (index == 5) { //공동프로젝트 영역

                $(".joint_tit").stop().animate({
                    right: "0"
                }, 800);
                $(".left_pj").delay(500).animate({
                    left: "50%"
                }, 800);
                $(".joint_right_wrap").delay(1000).animate({
                    left: "0"
                }, 800);


            }
            if (index !== 5) { //공동크로젝트 영역

                $(".joint_tit").stop().animate({
                    right: "-100%"
                }, 800);


            }
            if (index == 6) { //컨텍트부분

                $(".contact_tit").stop().animate({
                    right: "0"
                }, 800);
                $(".cont_img").delay(800).animate({
                    opacity: 1
                }, 800);

                $(".cont_wrap ul").delay(1200).animate({
                    opacity: 1
                }, 800);
                $(".dbtn").delay(1800).animate({
                    opacity: 1
                }, 800);
                $(".notice").delay(2000).animate({
                    opacity: 1
                }, 800);
                $(".redtxt ").delay(2500).fadeIn(500);
                $("#btn_top").delay(3000).animate({
                    opacity: 1
                }, 800);



            }
            if (index !== 6) { //해당영역아닐때 다시 밖으로빼놓기(원상복귀)

                $(".contact_tit").stop().animate({
                    right: "-80%"
                }, 100);
            }

        },


    });


    /********** 타이핑 효과 ********/

    var typed5 = new Typed('#typed5', {
        strings: ['끝까지 봐주셔서 감사합니다:-)'],
        typeSpeed: 150,
        backSpeed: 0,
        cursorChar: '_',
        shuffle: true,
        smartBackspace: false,
        loop: true,
    });




    /*about영역*****************************/

    //클릭버튼 클릭시 스펙보이기 셋팅
    $(".plusbtn").click(function () {
        $(".infobox").animate({
            opacity: 1
        }, 500);
    });









    /*포트폴리오 스와이퍼 영역************************************/


    new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 40,
        speed: 600, // 넘기는속도
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



    /*공동 프로젝트 영역************************************/

    /*li호버시 왼쪽영역 배경 썸네일 바뀌게*/
    var bgi = [
        "images/joint1.png",
        "images/joint2.png",
        "images/joint3.png",
        "images/joint4.png",
        "images/joint5.png"
    ];


    ///////////// each ///////////////
    $(".left_pj li").each(function (idx, ele) {
        $(ele).css({
            background: "url(" + bgi[idx] + ") no-repeat",
            backgroundSize: "cover",

        });
    }); ///////////// each ///////////////



    //// mouseenter ///////////////////////////////////////////////
    $(".joint_right_wrap ul li").mouseenter(function () {
        //li호버시 li왼쪽으로 밀기
        $(this).stop().animate({
            right: "10%"
        }, 500);

        // li호버시 해당 썸네일 보이기
        var idx = $(this).index();

        $(".left_pj li").eq(idx).addClass("on").siblings().removeClass("on");


    }); //// mouseenter ///////////////////////////////////////////////
    

    //// mouseeleave ///////////////////////////////////////////////
    $(".joint_right_wrap ul li").mouseleave(function () {
        $(this).stop().animate({
            right: "0"
        }, 500);
    }); //// mouseeleave ///////////////////////////////////////////////



    /*모바일일때 메뉴창옵션*******************************/
    $(".menu").click(function () {
        $(this).fadeOut(300);
        $(".menu_pop").fadeIn(800);
        $(".menu_list").animate({
            left: "30%"
        }, 500);
    });

    /*닫기버튼 클릭시 메뉴창 닫기*/
    $(".m_cbtn").click(function () {
        $(".menu").fadeIn(300);
        $(".menu_pop").fadeOut(800);
        $(".menu_list").stop().animate({
            left: "170%"
        }, 500);

    });

    /*메뉴 타이틀 클릭시 메뉴창 닫기*/
    $(".menu_list ul li").click(function () {
        $(".menu").fadeIn(300);
        $(".menu_pop").fadeOut(800);
        $(".menu_list").stop().animate({
            left: "170%"
        }, 600);
    });

    /*메뉴창 외 바깥 클릭시 메뉴창 닫기*/
    $(".menu_pop").click(function () {
        $(".menu").fadeIn(300);
        $(".menu_pop").fadeOut(800);
        $(".menu_list").animate({
            left: "170%"
        }, 500);
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

    $(document).on('click', '.menu_pop', function () {
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true);
    });






    // 모바일일때(화면375이하)
    if ($(window).width() <= 375) {
         $(".mypic").animate({
                    opacity: 1
                }, 800);
        
                $(".info_tit_m").delay(3500).animate({
                    opacity: "1"
                }, 800);
        $(".infobox").delay(4000).animate({
                    opacity: "1"
                }, 800);
        
                $(".click").delay(3000).animate({
                    left: "0"
                }, 800);
        
        
        $('.joint_right_wrap ul li').mouseenter(function (e) { //호버시
            e.preventDefault();
            //li 왼쪽으로밀기 없애기
            $(this).stop().animate({
                right: "0"
            }, 300);
        });



        $('.joint_right_wrap li').mouseleave(function () { //아웃시
            //li 왼쪽으로밀기 없애기
            $(this).stop().animate({
                right: "0"
            }, 300);

        });



    }
    // 태블릿일때(화면1024이하)
    else if ($(window).width() <= 1024) {
        //        console.log("1024");




        $('.joint_right_wrap ul li').mouseenter(function () { //호버시

            //li 왼쪽으로밀기 없애기
            $(this).stop().animate({
                right: "0"
            }, 300);
        });



        $('.joint_right_wrap li').mouseleave(function () { //아웃시
            //li 왼쪽으로밀기 없애기
            $(this).stop().animate({
                right: "0"
            }, 300);

        });

    }
    // 화면1980이하일때
    else if ($(window).width() <= 1980) {
        //            console.log("1980");
        $('.joint_right_wrap ul li').mouseenter(function () {
            $(this).stop().animate({
                right: "5%"
            }, 500);
        });

    }


}); //////////////// jQB ////////////////////////
///////////////////////////////////////////////
