$(function () { // jQB ///////////////////////////


    // 풀페이지 플러그인 호출
    $("#fullpage").fullpage({

        // 네비게이션옵션
        anchors: ['home', 'about', 'skill', 'portfolio', 'contact'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Page1', 'Page2', 'Page3', 'Page4', 'Page5'],
    });

    //
    //    $(".scrollIcon span").clcik(function () {
    //        location = "#sec2";
    //    });





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


        slidesPerView: 1, // 동시에 보여줄 슬라이드 갯수

        slidesPerGroup: 1, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음

        // 그룹수가 맞지 않을 경우 빈칸으로 메우기
        // 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
        loopFillGroupWithBlank: true,

        //블릿
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },



    }); /*swiper플러그인*/




}); //////////////// jQB ////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
