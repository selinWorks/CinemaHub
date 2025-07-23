document.addEventListener('DOMContentLoaded', function () {
    const movieSearchInput = document.getElementById('movieSearchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const movieGrid = document.getElementById('movieGrid');
    const movieCards = document.querySelectorAll('.movie-card'); // Tüm kartları başta al
    const noResultsMessage = document.getElementById('noResultsMessage');
    const pageTitle = document.querySelector('.movies-page-title');

    // Sayfa başlığı animasyonu için "loaded" sınıfını ekle
    if (pageTitle) {
        pageTitle.classList.add('loaded');
    }

    // Film kartları için giriş animasyonu gecikmesini ayarla
    movieCards.forEach((card, index) => {
        // CSS'teki animation-delay zaten bunu yapıyor, bu satır opsiyoneldir
        // card.style.animationDelay = `${index * 0.1}s`;
    });

    // Arama ve Filtreleme İşlevi
    function filterMovies() {
        const searchTerm = movieSearchInput.value.toLowerCase();
        const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
        let visibleMoviesCount = 0;

        movieCards.forEach(card => {
            const title = card.dataset.title || ''; // data-title'dan al
            const category = card.dataset.category || ''; // data-category'den al
            const actors = card.dataset.actors || ''; // data-actors'tan al
            const directors = card.dataset.directors || ''; // data-directors'tan al

            // Arama teriminin başlık, aktörler veya yönetmenlerde eşleşip eşleşmediğini kontrol et
            const matchesSearch = title.includes(searchTerm) ||
                actors.includes(searchTerm) ||
                directors.includes(searchTerm);

            // Aktif kategoriye göre filtrele
            const matchesCategory = (activeCategory === 'all' || category === activeCategory.toLowerCase());

            if (matchesSearch && matchesCategory) {
                card.style.display = 'flex'; // Göster
                visibleMoviesCount++;
            } else {
                card.style.display = 'none'; // Gizle
            }
        });

        // Sonuç mesajını göster/gizle
        if (visibleMoviesCount === 0) {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
        }
    }

    // Arama kutusu olay dinleyicisi
    movieSearchInput.addEventListener('keyup', filterMovies);

    // Kategori butonları olay dinleyicileri
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Tüm butonlardaki 'active' sınıfını kaldır
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Tıklanan butona 'active' sınıfını ekle
            this.classList.add('active');
            // Filmleri filtrele
            filterMovies();
        });
    });

    // Sayfa yüklendiğinde ilk filtrelemeyi çalıştır
    filterMovies();

    // Detay butonu tıklamalarını yakala (şimdilik sadece console.log)
    const detailButtons = document.querySelectorAll('.movie-details-btn');
    detailButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault(); // Varsayılan link davranışını engelle
            const movieId = this.dataset.movieId;
            console.log(`View Details clicked for Movie ID: ${movieId}`);
            // Buraya gerçek bir yönlendirme veya modal açma kodu eklenebilir
            // window.location.href = `/Movies/Details/${movieId}`;
        });
    });

    // Font Awesome ikonları için dinamik yükleyici (eğer CDN kullanıyorsanız ve manuel yükleme gerekiyorsa)
    // Bu kısım genellikle _Layout.cshtml'de Font Awesome script'i ile halledilir.
    // Eğer ikonlar görünmezse, Font Awesome kitinizin doğru yüklendiğinden emin olun.
});