window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax-bg');
    let scrollPosition = window.scrollY;
    parallax.style.transform = 'translateY(' + scrollPosition * -0.2 + 'px)';
});

document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.nav-item a');
    const sections = document.querySelectorAll('section');
    let isScrolling = false;

    // Функция для удаления класса 'active' у всех пунктов меню
    function removeActiveClass() {
        menuItems.forEach(item => item.parentElement.classList.remove('active'));
    }

    // Функция для добавления класса 'active' к пункту меню, соответствующему текущему разделу
    function addActiveClass(id) {
        removeActiveClass();
        const activeMenuItem = document.querySelector(`.nav-item a[href="${id}"]`);
        if (activeMenuItem) {
            activeMenuItem.parentElement.classList.add('active');
        }
    }
    
    // Обработчик события прокрутки
    window.addEventListener('scroll', function() {
        let currentSection = '';
    
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
    
            if (scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = '#' + section.getAttribute('id');
            }
        });
    
        addActiveClass(currentSection);
    });
});

