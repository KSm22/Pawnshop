$('.carousel').slick({
    arrows:true,
    dots:false,
    infinite:false,
    slidesToShow:1
});

/*Tab*/
let tab = function () {
    let tabNav = document.querySelectorAll('.tabs__item'),
        tabContent = document.querySelectorAll('.tabs__content'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
        })
    }
};

let menu = function() {
    let menuBtn = document.querySelector('.header__btn'),
        menuCloseBtn = document.querySelector('.header__btn-close'),
        menu = document.querySelector('.header__contacts');

    menuBtn.addEventListener('click', function () {
        menu.classList.add('active');
    });

    menuCloseBtn.addEventListener('click', function () {
        menu.classList.remove('active')
    });

};

menu();
tab();
