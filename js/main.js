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


    // 탑버튼아이콘 클릭시 맨위 상단으로 이동시키기






}); //////////////// jQB ////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
