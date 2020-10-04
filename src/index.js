'use strict';
window.addEventListener('load', () => {
    const changeLogo = document.querySelector('.logo_img_container > img');
    const header = document.querySelector('.header');
    let headerHeight = header.offsetHeight;

    const midLine = document.querySelector('.mid_line');
    let midLineTop = midLine.offsetTop;
    let midLineAnimation = false;

    const mobileNav = document.querySelector('.mobile_nav_icon');
    const mobileNavAni = document.querySelectorAll('.mobile_nav_icon div');
    const navList = document.querySelector('.nav');
    const navListAni = document.querySelectorAll('.nav > li');
    const scrollNav = document.querySelectorAll('.nav li a');

    scrollNav.forEach((el, index) => {
        el.addEventListener('click', () => {
            switch (index) {
                case 0:
                    navScrollEffect('.home_wrapper');
                    break;
                case 1:
                    navScrollEffect('.about_wrapper');
                    break;
                case 2:
                    navScrollEffect('.work_wrapper');
                    break;
                case 3:
                    navScrollEffect('.contact_wrapper');
                    break;
                default:
                    break;
            }
        });
    });

    window.addEventListener('scroll', () => {
        let winY = window.pageYOffset;
        // scroll 이 중간을 넘었을 때
        if (midLineAnimation && winY >= midLineTop - headerHeight) {
            changeLogo.setAttribute('src', 'img/Logo.svg');
            midLine.style.position = 'fixed';
            midLine.style.top = `${headerHeight}px`;
            midLineAnimation = false;
            console.log('아');
        }
        // scroll 이 중간을 안 넘었을 때
        if (!midLineAnimation && winY < midLineTop - headerHeight) {
            changeLogo.setAttribute('src', 'img/Logo-change.svg');
            midLine.style.position = 'relative';
            midLine.style.top = `0`;
            midLineAnimation = true;
            console.log('dh');
        }
    });

    window.addEventListener('scroll', scrollIndicator);

    mobileNav.addEventListener('click', () => {
        mobileNavAni.forEach((el) => {
            el.classList.toggle('nav_ani');
        });
        navList.classList.toggle('nav_ani');
        navListAni.forEach((el) => {
            el.classList.toggle('nav_ani');
        });
    });

    $('.slide').slick({
        slide: 'div', //슬라이드 되어야 할 태그 ex) div, li
        infinite: true, //무한 반복 옵션
        slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
        speed: 200, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows: false, // 옆으로 이동하는 화살표 표시 여부
        dots: false, // 스크롤바 아래 점으로 페이지네이션 여부
        autoplay: false, // 자동 스크롤 사용 여부
        autoplaySpeed: 2000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover: false, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
        vertical: false, // 세로 방향 슬라이드 옵션
        prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
        nextArrow: "<button type='button' class='slick-next'>Next</button>", // 다음 화살표 모양 설정
        dotsClass: 'slick-dots', //아래 나오는 페이지네이션(점) css class 지정
        draggable: true, //드래그 가능 여부

        responsive: [
            // 반응형 웹 구현 옵션
            {
                breakpoint: 960, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768, //화면 사이즈 768px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow: 1,
                },
            },
        ],
    });
});

function scrollMidLineEffect() {}

function scrollIndicator(e) {
    const scrollIndicatorLine = document.querySelector('.scroll_indicator');
    const scrollIndicatorEffect = document.querySelector(
        '.scroll_indicator_effect',
    );
    const maxHeight = window.document.body.scrollHeight - window.innerHeight;
    const percentage = (window.pageYOffset / maxHeight) * 100;

    scrollIndicatorLine.style.width = `${percentage}%`;
    scrollIndicatorEffect.style.left = `${percentage}%`;
    if (scrollIndicatorEffect.style.left <= '0.5%') {
        scrollIndicatorEffect.style.left = '-15px';
    }
}

function navScrollEffect(target) {
    const targetTop = document.querySelector(target).offsetTop;

    window.scrollTo({
        top: targetTop,
        behavior: 'smooth',
    });
}
