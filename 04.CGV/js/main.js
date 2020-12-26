/////// CGV PJ 메인페이지 JS - main.js   ////////

//window.addEventListener(이벤트명,함수)
//window객체(브라우저 최상위 객체)
//addEventListener는 이벤트와 함수를 묶어주는 메서드
//메서드는 브라우저 내장함수 라고도 하며
//조직화된 함수라고 보면 된다.

///로딩구역(html로딩후 실행구역)///////////
//load 이벤트: html이 모두 로딩된 후 발생하는 이벤트
// load발생후 함수구역 실행!
// function(){코드} - 코드를 보관하는 저장소!
window.addEventListener("load", function () {
    console.log("로딩완료!");
    // 콘솔은 브라우저 내장 엔진
    //F12 - console 탭을 클릭!
}); /////////////// load ////////////////////
///////////////////////////////////////////
///////////////////////////////////////////


/*//////////////////////////////////
    함수명: 멍멍
    기능: 동영상 변경하기
*/ //////////////////////////////////
function 멍멍(먹이) { //먹이 - 전달변수(함수호출시 값전달!)
    //alert(먹이); 
    //전체 document 객체
    document
        //그밑에 있는 id 요소 불러오기
        .getElementById("mv")
        // src속성값 넣기
        .src =
        "https://www.youtube.com/embed/" + 먹이 +
        "?autoplay=1&loop=1&playlist=" + 먹이 +
        "&controls=1&iv_load_policy=3&showinfo=0";



} /////////////////멍멍함수///////////

//세미콜론 안하는것들!......
// 1.함수 2.제어문(if,for,while,switch,case등)
/*//////////////////////////////////

    함수명: show
    기능 : 미리셋팅된 class를 제작노트 박스에 넣고 뺌
    
*/ //////////////////////////////////
function show(seq) {
    // seq - 전달값변수(공통순번)
    
    //1.호출확인!
    console.log("보여줘!"+seq);

    //2.변경대상 : .pnt(제작노트박스)
    var tg =
        document.getElementsByClassName("pnt")[seq];
    
    
    // 여기서 내용에 따라 높이값이 달라지므로 높이값을 별도 셋팅함!
    // 높이값을 읽어와라!(높이값이 0인 p태그 내부의 span태그의 높이값!)
    var tgh = tg.getElementsByTagName("span")[0].offsetHeight;
    // offsetHeight는 선택요소의 높이값읽기(패딩,보더 포함)
    // clientHeight는 선택요소의 높이값읽기(패딩값만포함)
    console.log("높이값:"+tgh);
    
        
    //3.변경내용 : 기존class에 "on"을 추가한다!
    tg.classList.toggle("on");
    //tg.classList.remove("bline");
    //tg.classList.add("on");
    console.log(tg.classList.contains("on"));

    // 만약 "on" 클래스가 있으면 버튼부호를 "－"
    // 없으면 버튼부호를 "＋"로 변경하기
    // 대상: .sbtn
    var sbtn =
        document.getElementsByClassName("sbtn")[seq];
    // "on"이 클래스에 있으면 if문 안으로 들어감!!
    if (tg.classList.contains("on")) {
        sbtn.innerText = "－";
        // 높이값이 다르므로 별도 설정(특정높이 만들기)
        tg.style.height = tgh + "px";
    } /////////////if//////////////////////
    else { // "on"이 클래스에 없는경우
        sbtn.innerText = "＋";
        // 높이값이 다르므로 별도 설정(0만들기)
        tg.style.height = "0px";
    } //////////////else////////////////////
    /*
        선택요소의 class 더하기/지우기/토글
        1. 더하기
        classList.add(클래스명)
        2. 지우기
        classList.remove(클래스명)
        3. 토글 - 넣을 클래스가 없으면 넣고 있으면 지운다.
        classList.toggle(클래스명)
        
        -> 클래스가 있는지 없는지 여부 확인은?
        classList.contains(클래스명)
        - 클래스가 있으면 ture, 없으면 false
        
    */


} ////////////show함수//////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

/*//////////////////////////////////////////
    함수명: view
    기능: 상세보기 버튼 클릭시 상세보기박스 오른쪽에서 등장
*/ //////////////////////////////////////////
function view(e, seq, btn) {
    //e - 전달변수(이벤트객체를 받는다.)
    //seq - 전달변수(시놉박스 순번)
    //btn - 전달변수(버튼종류:1-열기버튼, 0-닫기버튼)

    //1.호출여부 확인!
    console.log("보여요!" + seq + "/버튼:" + btn);
    //2.이벤트 버블링 막기
    //이벤트 버블링은 자식요소의 이벤트가 부모요소들로 전달됨
    //이것을 stopPropoagation()메서드로 막는다!
    //stop - 멈춰!
    //propoation - 전달(전파)
    e.stopPropagation();

    //3. 클래스"on"넣기
    //대상: .synop
    var syn =
        document.getElementsByClassName("synop");

    // 초기화 하기(모두"on"빼기)
    // 클래스 개수구하기 -> length
    console.log("개수:" + syn.length);
    // 개수만큼 for문으로 모든 시놉박스 초기화하기
    //for(시;한;증){}
    //시-시작값; 한 - 한계값; 증 -증감
    for (var i = 0; i < syn.length; i++) {
        // 각 해당요소를 모두 class없애기!
        syn[i].classList.remove("on");
        console.log("나,아이!+i")
    } ////////////////for//////////////////////

    // 열기버튼일때 
    if (btn) { // 1이면 true
        // 클래스 넣기
        syn[seq].classList.add("on");

    } ////////////////if/////////////////////////////

    // 닫기버튼일때
    else { // 0이면 
        // 클래스 빼기
        syn[seq].classList.remove("on");
    } ////////////////else//////////////////////////////


} ////////////////view함수//////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
