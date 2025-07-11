const movies = [
    { id: 1, src: "https://placehold.co/400x300/1E3A8A/BFDBFE?text=Aksiyon+Filmi+1", title: "Görev Tehlike", category: "Aksiyon", imdbRating: 7.8, releaseYear: 1996, actors: ["Tom Cruise", "Jon Voight"], directors: ["Brian De Palma"] },
    { id: 2, src: "https://placehold.co/400x300/065F46/D1FAE5?text=Komedi+Filmi+1", title: "Çok Komik Bir Film", category: "Komedi", imdbRating: 7.2, releaseYear: 2006, actors: ["Cem Yılmaz", "Şahan Gökbakar"], directors: ["Yönetmen Adı"] },
    { id: 3, src: "https://placehold.co/400x300/7F1D1D/FECACA?text=Dram+Filmi+1", title: "Umutsuz Yıllar", category: "Dram", imdbRating: 8.5, releaseYear: 1994, actors: ["Tim Robbins", "Morgan Freeman"], directors: ["Frank Darabont"] },
    { id: 4, src: "https://placehold.co/400x300/4C0519/FBCFE8?text=Bilim+Kurgu+1", title: "Yıldızlararası Yolculuk", category: "Bilim Kurgu", imdbRating: 8.6, releaseYear: 2014, actors: ["Matthew McConaughey", "Anne Hathaway"], directors: ["Christopher Nolan"] },
    { id: 5, src: "https://placehold.co/400x300/1A202C/A0AEC0?text=Gerilim+Filmi+1", title: "Gizemli Cinayet", category: "Gerilim", imdbRating: 7.5, releaseYear: 2019, actors: ["Daniel Craig", "Ana de Armas"], directors: ["Rian Johnson"] },
    { id: 6, src: "https://placehold.co/400x300/1E3A8A/93C5FD?text=Aksiyon+Filmi+2", title: "Hızlı ve Öfkeli", category: "Aksiyon", imdbRating: 6.0, releaseYear: 2001, actors: ["Vin Diesel", "Paul Walker"], directors: ["Rob Cohen"] },
    { id: 7, src: "https://placehold.co/400x300/065F46/6EE7B7?text=Komedi+Filmi+2", title: "Hangover", category: "Komedi", imdbRating: 7.7, releaseYear: 2009, actors: ["Bradley Cooper", "Zach Galifianakis"], directors: ["Todd Phillips"] },
    { id: 8, src: "https://placehold.co/400x300/7F1D1D/FCA5A5?text=Dram+Filmi+2", title: "Esaretin Bedeli", category: "Dram", imdbRating: 9.3, releaseYear: 1994, actors: ["Tim Robbins", "Morgan Freeman"], directors: ["Frank Darabont"] },
    { id: 9, src: "https://placehold.co/400x300/4C0519/F472B6?text=Bilim+Kurgu+2", title: "Inception", category: "Bilim Kurgu", imdbRating: 8.8, releaseYear: 2010, actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"], directors: ["Christopher Nolan"] },
    { id: 10, src: "https://placehold.co/400x300/1A202C/718096?text=Gerilim+Filmi+2", title: "Zindan Adası", category: "Gerilim", imdbRating: 8.2, releaseYear: 2010, actors: ["Leonardo DiCaprio", "Mark Ruffalo"], directors: ["Martin Scorsese"] },
    { id: 11, src: "https://placehold.co/400x300/1E3A8A/3B82F6?text=Aksiyon+Filmi+3", title: "John Wick", category: "Aksiyon", imdbRating: 7.4, releaseYear: 2014, actors: ["Keanu Reeves", "Michael Nyqvist"], directors: ["Chad Stahelski"] },
    { id: 12, src: "https://placehold.co/400x300/065F46/059669?text=Komedi+Filmi+3", title: "Maske", category: "Komedi", imdbRating: 6.9, releaseYear: 1994, actors: ["Jim Carrey", "Cameron Diaz"], directors: ["Chuck Russell"] },
    { id: 13, src: "https://placehold.co/400x300/7F1D1D/DC2626?text=Dram+Filmi+3", title: "Yeşil Yol", category: "Dram", imdbRating: 8.6, releaseYear: 1999, actors: ["Tom Hanks", "Michael Clarke Duncan"], directors: ["Frank Darabont"] },
    { id: 14, src: "https://placehold.co/400x300/4C0519/C026D3?text=Bilim+Kurgu+3", title: "Matrix", category: "Bilim Kurgu", imdbRating: 8.7, releaseYear: 1999, actors: ["Keanu Reeves", "Laurence Fishburne"], directors: ["The Wachowskis"] },
    { id: 15, src: "https://placehold.co/400x300/1A202C/4B5563?text=Gerilim+Filmi+3", title: "Kuzuların Sessizliği", category: "Gerilim", imdbRating: 8.6, releaseYear: 1991, actors: ["Jodie Foster", "Anthony Hopkins"], directors: ["Jonathan Demme"] },
    { id: 16, src: "https://placehold.co/400x300/8B0000/FFD700?text=Aksiyon+Filmi+4", title: "Mad Max: Fury Road", category: "Aksiyon", imdbRating: 8.1, releaseYear: 2015, actors: ["Tom Hardy", "Charlize Theron"], directors: ["George Miller"] },
    { id: 17, src: "https://placehold.co/400x300/006400/90EE90?text=Komedi+Filmi+4", title: "Felekten Bir Gece", category: "Komedi", imdbRating: 7.7, releaseYear: 2009, actors: ["Bradley Cooper", "Ed Helms"], directors: ["Todd Phillips"] },
    { id: 18, src: "https://placehold.co/400x300/4B0082/E6E6FA?text=Dram+Filmi+4", title: "Forrest Gump", category: "Dram", imdbRating: 8.8, releaseYear: 1994, actors: ["Tom Hanks", "Robin Wright"], directors: ["Robert Zemeckis"] },
    { id: 19, src: "https://placehold.co/400x300/5F9EA0/F0F8FF?text=Bilim+Kurgu+4", title: "Blade Runner 2049", category: "Bilim Kurgu", imdbRating: 8.0, releaseYear: 2017, actors: ["Ryan Gosling", "Harrison Ford"], directors: ["Denis Villeneuve"] },
    { id: 20, src: "https://placehold.co/400x300/800000/FFC0CB?text=Gerilim+Filmi+4", title: "Seven", category: "Gerilim", imdbRating: 8.6, releaseYear: 1995, actors: ["Brad Pitt", "Morgan Freeman"], directors: ["David Fincher"] }
];

document.addEventListener('DOMContentLoaded', () => {
    const movieStripContainer = document.getElementById('movieStripContainer');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const searchInput = document.getElementById('searchInput');

    // Arama modal öğeleri
    const searchModalOverlay = document.getElementById('searchModalOverlay');
    const closeSearchModalBtn = document.getElementById('closeSearchModal');
    const modalSearchTerm = document.getElementById('modalSearchTerm');
    const modalCategoryButtons = document.querySelectorAll('.modal-category-btn');
    const modalImdbRating = document.getElementById('modalImdbRating');
    const modalReleaseYear = document.getElementById('modalReleaseYear');
    const modalActors = document.getElementById('modalActors');
    const modalDirectors = document.getElementById('modalDirectors');
    const performDetailedSearchBtn = document.getElementById('performDetailedSearch');
    const mainContentWrapper = document.getElementById('mainContentWrapper');

    // Film kartı oluşturma fonksiyonu
    function createMovieCard(movie) {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.title = `${movie.title} - IMDb: ${movie.imdbRating}`;
        card.innerHTML = `
            <img src="${movie.src}" alt="${movie.title}" class="w-full h-40 object-cover rounded-t-md" />
            <div class="p-2">
                <h3 class="font-semibold truncate">${movie.title}</h3>
                <p class="text-sm opacity-80 truncate">${movie.category} | IMDb: ${movie.imdbRating} | ${movie.releaseYear}</p>
            </div>
        `;
        return card;
    }

    // Film listesini filtreleyen fonksiyon
    function filterMovies(category = 'Tümü', searchTerm = '', imdbMin = 0, releaseYear = null, actors = [], directors = []) {
        return movies.filter(movie => {
            const matchCategory = (category === 'Tümü') || (movie.category === category);
            const matchSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
            const matchImdb = movie.imdbRating >= imdbMin;
            const matchYear = !releaseYear || movie.releaseYear === releaseYear;
            const matchActors = actors.length === 0 || actors.every(a => movie.actors.map(x => x.toLowerCase()).includes(a.toLowerCase()));
            const matchDirectors = directors.length === 0 || directors.every(d => movie.directors.map(x => x.toLowerCase()).includes(d.toLowerCase()));
            return matchCategory && matchSearch && matchImdb && matchYear && matchActors && matchDirectors;
        });
    }

    // Film şeritlerini oluşturma fonksiyonu (iki satır sağdan sola kayan)
    function renderMovieStrips(filteredMovies) {
        movieStripContainer.innerHTML = '';

        // İki satıra ayırmak için filmleri iki gruba böl
        const half = Math.ceil(filteredMovies.length / 2);
        const firstRowMovies = filteredMovies.slice(0, half);
        const secondRowMovies = filteredMovies.slice(half);

        // İlk şerit
        const firstStrip = document.createElement('div');
        firstStrip.className = 'movie-strip';
        firstStrip.style.setProperty('--scroll-duration', '30s');

        const firstStripInner = document.createElement('div');
        firstStripInner.className = 'movie-strip-inner';

        firstRowMovies.forEach(movie => {
            firstStripInner.appendChild(createMovieCard(movie));
        });

        // Filmleri tekrar ettir (sonsuz kaydırma için)
        firstRowMovies.forEach(movie => {
            firstStripInner.appendChild(createMovieCard(movie));
        });

        firstStrip.appendChild(firstStripInner);
        movieStripContainer.appendChild(firstStrip);

        // İkinci şerit (soldan sağa kayacak)
        const secondStrip = document.createElement('div');
        secondStrip.className = 'movie-strip';
        secondStrip.style.setProperty('--scroll-duration', '30s');

        const secondStripInner = document.createElement('div');
        secondStripInner.className = 'movie-strip-inner';
        secondStripInner.style.animationName = 'scroll-left'; // Soldan sağa animasyon

        secondRowMovies.forEach(movie => {
            secondStripInner.appendChild(createMovieCard(movie));
        });

        secondRowMovies.forEach(movie => {
            secondStripInner.appendChild(createMovieCard(movie));
        });

        secondStrip.appendChild(secondStripInner);
        movieStripContainer.appendChild(secondStrip);
    }

    // Başlangıçta tüm filmleri göster
    renderMovieStrips(movies);

    // Kategori butonları olayları
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Aktif butonu değiştir
            categoryButtons.forEach(b => b.classList.remove('active', 'bg-blue-600', 'text-white'));
            btn.classList.add('active', 'bg-blue-600', 'text-white');

            // Filtreyi uygula
            const category = btn.getAttribute('data-category');
            const filtered = filterMovies(category, searchInput.value.trim());
            renderMovieStrips(filtered);
        });
    });

    // Arama kutusu olayları (basit)
    searchInput.addEventListener('input', () => {
        const activeCategoryBtn = document.querySelector('.category-btn.active');
        const category = activeCategoryBtn ? activeCategoryBtn.getAttribute('data-category') : 'Tümü';
        const searchTerm = searchInput.value.trim();

        const filtered = filterMovies(category, searchTerm);
        renderMovieStrips(filtered);
    });

    // Modal açma ve kapatma
    searchInput.addEventListener('focus', () => {
        openSearchModal();
    });

    function openSearchModal() {
        searchModalOverlay.classList.remove('hidden');
        searchModalOverlay.classList.add('flex');
        mainContentWrapper.classList.add('blurred');
        modalSearchTerm.value = searchInput.value;
    }


    function closeSearchModal() {
        searchModalOverlay.classList.add('hidden');
        searchModalOverlay.classList.remove('flex'); // BUNU EKLE!
        mainContentWrapper.classList.remove('blurred');
    }

    closeSearchModalBtn.addEventListener('click', () => {
        closeSearchModal();
    });

    // Modal kategori butonları
    modalCategoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            modalCategoryButtons.forEach(b => b.classList.remove('active', 'bg-blue-600', 'text-white'));
            btn.classList.add('active', 'bg-blue-600', 'text-white');
        });
    });

    // Modal detaylı arama butonu
    performDetailedSearchBtn.addEventListener('click', () => {
        const categoryBtn = document.querySelector('.modal-category-btn.active');
        const category = categoryBtn ? categoryBtn.getAttribute('data-category') : 'Tümü';

        const searchTerm = modalSearchTerm.value.trim();
        const imdbMin = Number(modalImdbRating.value);
        const releaseYear = modalReleaseYear.value ? parseInt(modalReleaseYear.value) : null;

        const actors = modalActors.value
            ? modalActors.value.split(',').map(s => s.trim()).filter(Boolean)
            : [];

        const directors = modalDirectors.value
            ? modalDirectors.value.split(',').map(s => s.trim()).filter(Boolean)
            : [];

        const filtered = filterMovies(category, searchTerm, imdbMin, releaseYear, actors, directors);
        renderMovieStrips(filtered);

        // Modal kapat ve ana arama kutusuna filtreyi yansıt
        closeSearchModal();
        searchInput.value = searchTerm;
    });
});
