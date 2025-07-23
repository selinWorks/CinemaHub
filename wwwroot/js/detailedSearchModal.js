

document.addEventListener('DOMContentLoaded', () => {
    // DOM elemanlarını burada alın
    const openDetailedSearchBtn = document.getElementById('openDetailedSearch');
    const newSearchModalOverlay = document.getElementById('newSearchModalOverlay');
    const newCloseModalBtn = document.getElementById('newCloseModalBtn');

    const newModalSearchTerm = document.getElementById('newModalSearchTerm');
    const newModalCategoryButtons = document.querySelectorAll('#newModalCategoryButtons .modal-category-btn');
    const newModalImdbRating = document.getElementById('newModalImdbRating');
    const newModalReleaseYear = document.getElementById('newModalReleaseYear');
    const newModalActors = document.getElementById('newModalActors');
    const newModalDirectors = document.getElementById('newModalDirectors');
    const newPerformDetailedSearchBtn = document.getElementById('newPerformDetailedSearchBtn');

    // Modalı aç
    if (openDetailedSearchBtn) {
        openDetailedSearchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            newSearchModalOverlay.classList.add('active');

            // Mevcut ana arama terimini modala aktar
            const mainSearchInput = document.getElementById('searchInput');
            if (mainSearchInput) {
                newModalSearchTerm.value = mainSearchInput.value;
            }

            // Kategori butonlarını sıfırla ve "Tümü" aktif yap
            newModalCategoryButtons.forEach(btn => btn.classList.remove('active'));
            const currentCategory = document.querySelector('.category-btn.active')?.getAttribute('data-category') || 'Tümü';
            const modalBtnToActivate = Array.from(newModalCategoryButtons).find(btn => btn.getAttribute('data-category') === currentCategory);
            if (modalBtnToActivate) {
                modalBtnToActivate.classList.add('active');
            } else {
                newModalCategoryButtons[0]?.classList.add('active');
            }

            // Diğer modal alanlarını varsayılan değerlere ayarla
            newModalImdbRating.value = '0';
            newModalReleaseYear.value = '';
            newModalActors.value = '';
            newModalDirectors.value = '';
        });
    } else {
        console.error("Hata: 'openDetailedSearch' ID'li öğe bulunamadı. Lütfen HTML'inizi kontrol edin.");
    }

    // Modalı kapat
    if (newCloseModalBtn) {
        newCloseModalBtn.addEventListener('click', () => {
            newSearchModalOverlay.classList.remove('active');
        });
    } else {
        console.error("Hata: 'newCloseModalBtn' ID'li öğe bulunamadı. Lütfen HTML'inizi kontrol edin.");
    }

    // Kategori butonları tıklanma olayı (modal içinde)
    newModalCategoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            newModalCategoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Detaylı arama yap butonu tıklama olayı
    if (newPerformDetailedSearchBtn) {
        newPerformDetailedSearchBtn.addEventListener('click', () => {
            const categoryBtn = document.querySelector('#newModalCategoryButtons .modal-category-btn.active');
            const category = categoryBtn ? categoryBtn.getAttribute('data-category') : 'Tümü';
            const searchTerm = newModalSearchTerm.value.trim();
            const imdbMin = Number(newModalImdbRating.value);
            const releaseYear = newModalReleaseYear.value ? parseInt(newModalReleaseYear.value) : null;

            const actors = newModalActors.value
                ? newModalActors.value.split(',').map(s => s.trim()).filter(Boolean)
                : [];

            const directors = newModalDirectors.value
                ? newModalDirectors.value.split(',').map(s => s.trim()).filter(Boolean)
                : [];

            const filters = {
                category,
                searchTerm,
                imdbMin,
                releaseYear,
                actors,
                directors
            };

            // Ana sayfadaki renderMovieStrips fonksiyonunu çağırıyoruz
            // Bu kısım, homepage.js'deki renderMovieStrips fonksiyonunun global veya erişilebilir olmasını gerektirir.
            // En basit yol, renderMovieStrips'i global yapmak veya bir olay sistemi kullanmaktır.
            // Şimdilik, renderMovieStrips'i DOMContentLoaded scope'u dışına taşıyarak global erişilebilir yapalım.
            // Veya daha iyi: custom event fırlatıp homepage.js'de dinleyelim.
            if (typeof renderMovieStrips === 'function') { // Check if renderMovieStrips is available globally
                renderMovieStrips(filters);
            } else {
                console.error("renderMovieStrips fonksiyonu bulunamadı. Lütfen homepage.js'deki tanımını kontrol edin.");
                // Alternatif olarak, burada bir custom event fırlatabilirsiniz:
                // const event = new CustomEvent('detailedSearchPerformed', { detail: filters });
                // document.dispatchEvent(event);
            }


            newSearchModalOverlay.classList.remove('active');
            const mainSearchInput = document.getElementById('searchInput');
            if (mainSearchInput) {
                mainSearchInput.value = searchTerm; // Ana arama kutusunu modal arama terimiyle güncelle
            }
        });
    } else {
        console.error("Hata: 'newPerformDetailedSearchBtn' ID'li öğe bulunamadı. Lütfen HTML'inizi kontrol edin.");
    }
});