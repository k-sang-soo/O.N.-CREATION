'use strict';
window.addEventListener('load', () => {
    const changeLogo = document.querySelector('.logo_img_container > img');
    const header = document.querySelector('.header');
    const headerHeight = header.offsetHeight;

    const midLine = document.querySelector('.mid_line');
    const midLineTop = midLine.offsetTop;
    let midLineAnimation = false;

    const mobileNav = document.querySelector('.mobile_nav_icon');
    const mobileNavAni = document.querySelectorAll('.mobile_nav_icon div');
    const navList = document.querySelector('.nav');
    const navListAni = document.querySelectorAll('.nav > li');

    const aboutTitle = document.querySelector('.about-title');
    const aboutTitleStandard = document.querySelector('.about-article');
    const aboutTitleLeft = aboutTitleStandard.offsetWidth;

    console.dir(aboutTitleStandard);
    console.log(midLineTop - headerHeight);
    aboutTitle.style.width = `${aboutTitleLeft}px`;
    window.addEventListener('scroll', () => {
        let winY = window.pageYOffset;
        console.log(winY);
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

    mobileNav.addEventListener('click', () => {
        mobileNavAni.forEach((el) => {
            el.classList.toggle('nav_ani');
        });
        navList.classList.toggle('nav_ani');
        navListAni.forEach((el) => {
            el.classList.toggle('nav_ani');
        });
    });
});
