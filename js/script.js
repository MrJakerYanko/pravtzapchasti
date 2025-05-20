document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('nav');
    
    // Обработчик клика по бургеру
    burgerMenu.addEventListener('click', function() {
        menuToggle.checked = !menuToggle.checked;
        if (menuToggle.checked) {
            navMenu.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else {
            navMenu.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    
    // Закрытие меню при клике на ссылку
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.checked = false;
            navMenu.style.display = 'none';
            document.body.style.overflow = '';
        });
    });
    
    // Закрытие меню при клике вне его области
    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav') && !e.target.closest('.burger-menu') && menuToggle.checked) {
            menuToggle.checked = false;
            navMenu.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
});