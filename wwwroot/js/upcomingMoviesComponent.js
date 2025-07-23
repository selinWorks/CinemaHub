document.addEventListener('DOMContentLoaded', function () {
    // "Coming Soon" başlığı ve "The Cinema" başlıklarını içeren kapsayıcının yükleme animasyonunu tetikle
    const comingSoonHeader = document.querySelector('.coming-soon-header'); // Değişiklik burada
    if (comingSoonHeader) {
        comingSoonHeader.classList.add('loaded'); // Değişiklik burada
    }

    // --- Film Kartları Animasyon Kodu ---
    const movieCards = document.querySelectorAll('.upcoming-movie-card');

    if (movieCards.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        const movieCardObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        movieCards.forEach(card => {
            movieCardObserver.observe(card);
        });
    }

    // --- Kaydırma Butonları Kodu ---
    const upcomingStrip = document.querySelector('.upcoming-movies-strip');
    const prevButton = document.querySelector('.prev-upcoming-button');
    const nextButton = document.querySelector('.next-upcoming-button');

    if (prevButton && nextButton && upcomingStrip) {
        nextButton.addEventListener('click', () => {
            const scrollAmount = 236; // Bir kartın genişliği + boşluk
            upcomingStrip.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        prevButton.addEventListener('click', () => {
            const scrollAmount = 236; // Bir kartın genişliği + boşluk
            upcomingStrip.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    }
});