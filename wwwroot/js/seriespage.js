document.addEventListener('DOMContentLoaded', function () {
    const seriesSearchInput = document.getElementById('seriesSearchInput'); // ID değişti
    const filterButtons = document.querySelectorAll('.filter-btn');
    const seriesGrid = document.getElementById('seriesGrid'); // ID değişti
    const seriesCards = document.querySelectorAll('.movie-card'); // Sınıf aynı kaldı
    const noResultsMessage = document.getElementById('noResultsMessageSeries'); // ID değişti
    const pageTitle = document.querySelector('.series-page-title'); // Sınıf değişti

    // Sayfa başlığı animasyonu için "loaded" sınıfını ekle
    if (pageTitle) {
        pageTitle.classList.add('loaded');
    }

    // Arama ve Filtreleme İşlevi
    function filterSeries() { // Fonksiyon adı değişti
        const searchTerm = seriesSearchInput.value.toLowerCase();
        const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
        let visibleSeriesCount = 0; // Değişken adı değişti

        seriesCards.forEach(card => { // seriesCards kullanıldı
            const title = card.dataset.title || '';
            const category = card.dataset.category || '';
            const actors = card.dataset.actors || '';
            const directors = card.dataset.directors || '';

            const matchesSearch = title.includes(searchTerm) ||
                actors.includes(searchTerm) ||
                directors.includes(searchTerm);

            const matchesCategory = (activeCategory === 'all' || category === activeCategory.toLowerCase());

            if (matchesSearch && matchesCategory) {
                card.style.display = 'flex';
                visibleSeriesCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Sonuç mesajını göster/gizle
        if (visibleSeriesCount === 0) {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
        }
    }

    // Arama kutusu olay dinleyicisi
    seriesSearchInput.addEventListener('keyup', filterSeries); // Fonksiyon adı değişti

    // Kategori butonları olay dinleyicileri
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterSeries(); // Fonksiyon adı değişti
        });
    });

    // Sayfa yüklendiğinde ilk filtrelemeyi çalıştır
    filterSeries(); // Fonksiyon adı değişti

    // Detay butonu tıklamalarını yakala (şimdilik sadece console.log)
    const detailButtons = document.querySelectorAll('.movie-details-btn'); // Sınıf aynı kaldı
    detailButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const seriesId = this.dataset.seriesId; // data-series-id kullanıldı
            console.log(`View Details clicked for Series ID: ${seriesId}`);
            // Buraya gerçek bir yönlendirme veya modal açma kodu eklenebilir
            // window.location.href = `/Series/Details/${seriesId}`;
        });
    });
});