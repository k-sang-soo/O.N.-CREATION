function scrollIndicator() {
    const scrollIndicatorLine = document.querySelector('.scroll_indicator');
    const scrollIndicatorEffect = document.querySelector('.scroll_indicator_effect');
    const maxHeight = window.document.body.scrollHeight - window.innerHeight;
    const percentage = (window.pageYOffset / maxHeight) * 100;

    scrollIndicatorLine.style.width = percentage + '%';
    scrollIndicatorEffect.style.left = percentage + '%';
    if (scrollIndicatorEffect.style.left <= '0.5%') {
        scrollIndicatorEffect.style.left = '-15px';
    }

    if (scrollIndicatorEffect.style.left >= '99.4%') {
        scrollIndicatorEffect.style.display = 'none';
    }

    if (scrollIndicatorEffect.style.left <= '99.9%' && scrollIndicatorEffect.style.display == 'none') {
        scrollIndicatorEffect.style.display = 'block';
    }
}

function imgChange() {
    const workImgChangeStandard = document.body.clientWidth;
    const responsiveTablet = 800;
    const responsiveMobile = 640;
    let imgBox = document.querySelector('.graphic_design img');
    // if (workImgChangeStandard <= responsiveTablet) {
    //     imgBox.setAttribute('src', 'img/Work-graphic_design_800px.jpg');
    // }

    if (workImgChangeStandard <= responsiveMobile) {
        imgBox.setAttribute('src', 'img/Work-graphic_design_640px.jpg');
    }
}

function slider() {
    $('.slide').slick({
        slide: 'div', //슬라이드 되어야 할 태그 ex) div, li
        infinite: true, //무한 반복 옵션
        slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
        speed: 200, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows: false, // 옆으로 이동하는 화살표 표시 여부
        dots: false, // 스크롤바 아래 점으로 페이지네이션 여부
        autoplay: true, // 자동 스크롤 사용 여부
        autoplaySpeed: 2000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover: false, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
        vertical: false, // 세로 방향 슬라이드 옵션
        prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
        nextArrow: "<button type='button' class='slick-next'>Next</button>", // 다음 화살표 모양 설정
        dotsClass: 'slick-dots', //아래 나오는 페이지네이션(점) css class 지정
        draggable: false, //드래그 가능 여부

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
}

function navScrollEffect(target) {
    const targetTop = document.querySelector(target).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetTop - startPosition;
    const duration = 500;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutQuad(progress, startPosition, distance, duration));
        if (progress < duration) {
            window.requestAnimationFrame(step);
            console.log(startPosition);
        }
    }
}

function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
}

function naviScrollAnimation() {
    const scrollNav = document.querySelectorAll('.nav li a');

    [].forEach.call(scrollNav, function (el, index) {
        el.addEventListener('click', function () {
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
}

function mobileClickEvent() {
    const mobileNav = document.querySelector('.mobile_nav_icon');
    const mobileNavAni = document.querySelectorAll('.mobile_nav_icon div');
    const navList = document.querySelector('.nav');
    const navListAni = document.querySelectorAll('.nav > li');

    mobileNav.addEventListener('click', function () {
        [].forEach.call(mobileNavAni, function (el) {
            el.classList.toggle('nav_ani');
        });
        navList.classList.toggle('nav_ani');
        [].forEach.call(navListAni, function (el) {
            el.classList.toggle('nav_ani');
        });
    });
}

function midLineAnimation() {
    const changeLogo = document.querySelector('.logo_img_container > img');
    const header = document.querySelector('.header');
    let headerHeight = header.offsetHeight;

    const midLine = document.querySelector('.mid_line');
    let midLineTop = midLine.offsetTop;
    let midLineAnimation = false;

    window.addEventListener('scroll', function () {
        let winY = window.pageYOffset;
        // scroll 이 중간을 넘었을 때
        if (midLineAnimation && winY >= midLineTop - headerHeight) {
            changeLogo.setAttribute('src', 'img/Logo.svg');
            midLine.style.position = 'fixed';
            midLine.style.top = headerHeight + 'px';
            midLine.style.left = '0'; //IE 오류 해결
            midLineAnimation = false;
        }
        // scroll 이 중간을 안 넘었을 때
        if (!midLineAnimation && winY < midLineTop - headerHeight) {
            changeLogo.setAttribute('src', 'img/Logo-change.svg');
            midLine.style.position = 'relative';
            midLine.style.top = '0';
            midLineAnimation = true;
        }
    });
}
