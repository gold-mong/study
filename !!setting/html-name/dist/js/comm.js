$(function(){

    // header sticky
    // window를 스크롤 했을 때
    // 만약 스크롤 값이 50보다 커질 경우
    // #header에게 sticky 클래스 추가
    // 스크롤 값이 50보다 작을 경우
    // #header에 붙어있던 sticky 클래스를 삭제

    $(window).scroll(function(){
        if($(this).scrollTop()>50){
            $('#header').addClass('sticky')
        }else{
            $('#header').removeClass('sticky')
        }
    })

    // 메뉴 클릭시 해당 해시태그로 애니메이션 되면서 이동
    // #collapsibleNavbar .nav-link 를 클릭했을때
    // a링크 기능 없애고
    // 만약 링크에 해시태그가 비어있지 않다면... (있다면)
    // html, body 태그를 animate 시켜줘
    // scrollTop() : $(hash).offset().top

    $('#collapsibleNavbar .nav-link').click(function(event){
        event.preventDefault()
        if(this.hash !== ""){

            let hash = this.hash;
            $('html, body').animate({
                scrollTop : $(hash).offset().top - 56
            },800)
        }
    })



})