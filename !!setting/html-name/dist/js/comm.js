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
    .trigger('scroll')

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

    // scrollup
    $.scrollUp({
        scrollText : '페이지 위로' ,  // 요소의 텍스트, HTML을 포함 할 수 있습니다. 
    });

    // wow.js
    new WOW().init();

    // 오브젝트 애니메이션
    // 윈도우를 스크롤 했을 때
    // .ani-slide를 각각 잡아서...
    // 만약 스크롤 값보다 (각각의).ani-slide 위치값이 크다면...
    // (.ani-slide가 화면 안으로 들어왔을 때...)
    // ani-top 클래스 추가

    $(window).scroll(function(){
        $('.ani-slide').each(function(){

            let winscroll = $(window).scrollTop(),
            pos = $(this).offset().top

            if(winscroll +700 > pos){
                $(this).addClass('ani-top')

            }
        })
    })

    // slide-top
    var swiper = new Swiper('.slide-top', {
        loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
    });

    // slide sns
    var swiper = new Swiper('.slide-sns', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      });

})