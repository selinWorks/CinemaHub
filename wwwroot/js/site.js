// wwwroot/js/site.js

document.addEventListener('DOMContentLoaded', function () {
    // Scroll-to-top butonu işlevselliği
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) { // Null kontrolü ekledik
        window.addEventListener('scroll', function () {
            if (window.scrollY > 200) {
                scrollTopBtn.style.opacity = '1';
                scrollTopBtn.style.pointerEvents = 'auto';
            } else {
                scrollTopBtn.style.opacity = '0';
                scrollTopBtn.style.pointerEvents = 'none';
            }
        });

        scrollTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Buraya site genelinde kullanılabilecek diğer JavaScript kodlarınızı ekleyebilirsiniz.
    // Örneğin, genel menü işlevleri veya başka dinamik öğeler.
});