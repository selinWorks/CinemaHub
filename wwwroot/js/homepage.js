console.log("homepage.js yüklendi ve çalışıyor!");

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elementlerini Seçme
    const movieStripContainer = document.getElementById('movieStripContainer');
    const categoryButtons = document.querySelectorAll('.cat-btn');
    const searchInput = document.getElementById('searchInput');

    // Yeni Slider Elementleri
    const sliderTrack = document.querySelector('.slider-track');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const highlightTitleElement = document.querySelector('.highlight-title');
    const highlightDescriptionElement = document.querySelector('.highlight-description');
    const weeklyHighlightMainTitle = document.querySelector('.weekly-highlight-main-title');
    const highlightContent = document.querySelector('.highlight-content');

    // highlightAddToListBtn değişkenini seçiyoruz
    const highlightAddToListBtn = document.querySelector('.highlight-actions .add-to-list-btn');

    // highlightMovies dizisi (değişmedi)
    const highlightMovies = [
        { title: "Percy Jackson and the Olympians", image: "percyJackson.jpeg", description: "A teenager discovers he's the son of a Greek god and sets out on an adventure to prevent a war among the gods.", details: "A teenager discovers he's the son of a Greek god and sets out on an adventure to prevent a war among the gods." },
        { title: "Harry Potter", image: "harry-potter.jpg", description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.", details: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world." },
        { title: "Avatar", image: "avatar.jpg", description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following orders and protecting the world he feels is his home.", details: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following orders and protecting the world he feels is his home." },
        { title: "Blade Runner 2049", image: "bladeRunner.jpg", description: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for 30 years.", details: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing in 30 years." },
        { title: "Dune: Part Two", image: "dune-part-two.jpg", description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.", details: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family." },
        { title: "Guardians Of Galaxy", image: "guardiansOfGalaxy.jpg", description: "A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.", details: "A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe." },
        { title: "The Conjuring", image: "theConjuring.jpg", description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.", details: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse." }
    ];

    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 7000; // 7 saniye

    // Yardımcı fonksiyon: LocalStorage'dan listeyi alır
    function getMyList() {
        return JSON.parse(localStorage.getItem('myList')) || [];
    }

    // *** updateButtonState FONKSİYONU BURADA TANIMLANIYOR ***
    // Yardımcı fonksiyon: Butonun durumunu günceller (toggle işlevi için)
    function updateButtonState(button, filmTitle) {
        const myList = getMyList();
        const isInList = myList.some(f => f.title === filmTitle); // Filmin listede olup olmadığını kontrol et

        if (isInList) {
            // Film listedeyse 'added' sınıfını ekle, metni değiştir ve butonu etkin tut
            button.classList.add('added'); // CSS'deki .add-to-list-btn.added sınıfını kullanacak
            button.innerHTML = '<i class="fas fa-check-circle"></i> Added to List';
            button.disabled = false; // Butonu listeden çıkarmak için tıklanabilir tutuyoruz
        } else {
            // Film listede değilse 'added' sınıfını kaldır, metni değiştir
            button.classList.remove('added');
            button.innerHTML = '<i class="fas fa-plus-circle"></i> Add to List';
            button.disabled = false; // Buton zaten tıklanabilir olmalı
        }
    }
    // *** updateButtonState FONKSİYON TANIMLAMASI BURADA BİTİYOR ***


    // Slider'ı belirli bir slayta kaydırma
    function goToSlide(index) {
        if (!sliderTrack) {
            console.warn("sliderTrack elementi bulunamadı. Slider fonksiyonu devre dışı.");
            return;
        }

        if (index >= highlightMovies.length) {
            index = 0; // Başa dön
        } else if (index < 0) {
            index = highlightMovies.length - 1; // Sona dön
        }
        currentSlide = index;
        const offset = -currentSlide * 100;
        sliderTrack.style.transform = `translateX(${offset}%)`;

        // İçeriği güncelle
        const movie = highlightMovies[currentSlide];
        if (highlightTitleElement) {
            highlightTitleElement.textContent = movie.title;
        }
        if (highlightDescriptionElement) {
            highlightDescriptionElement.textContent = movie.details;
        }

        // Slider'daki "Add to List" butonunun durumunu güncelle
        // Bu kısım, slider her değiştiğinde butonun doğru durumu göstermesini sağlar.
        if (highlightAddToListBtn) {
            updateButtonState(highlightAddToListBtn, movie.title);
        }

        // Slide info'nun görünürlüğünü güncelle
        const allSlides = document.querySelectorAll('.highlight-slide');
        allSlides.forEach((slide, idx) => {
            const slideInfo = slide.querySelector('.slide-info');
            if (slideInfo) {
                if (idx === currentSlide) {
                    slideInfo.classList.add('active');
                } else {
                    slideInfo.classList.remove('active');
                }
            }
        });
    }

    // Otomatik kaydırmayı başlat
    function startAutoSlide() {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            goToSlide(currentSlide + 1);
        }, slideDuration);
    }

    // Otomatik kaydırmayı durdur ve tekrar başlat (manuel geçişlerde)
    function resetAutoSlide() {
        startAutoSlide();
    }

    // Buton tıklama olayları
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            goToSlide(currentSlide - 1);
            resetAutoSlide();
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            goToSlide(currentSlide + 1);
            resetAutoSlide();
        });
    }

    // İlk slaytı göster ve otomatik kaydırmayı başlat
    goToSlide(0);
    startAutoSlide();

    // "This Week's Top Picks" başlığını ve genel içerik alanını görünür yap
    if (weeklyHighlightMainTitle) {
        weeklyHighlightMainTitle.classList.add('loaded');
    }
    if (highlightContent) {
        highlightContent.classList.add('loaded');
    }

    // API'den film verilerini çeken fonksiyon (placeholder)
    async function fetchMovies(filters = {}) {
        console.log("Filmler API'den çekiliyor, filtreler:", filters);

        const allMovies = [
            { title: "Inception", src: "https://via.placeholder.com/200x280?text=Inception", category: "Bilim Kurgu", imdbRating: 8.8, releaseYear: 2010, actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"], directors: ["Christopher Nolan"] },
            { title: "The Dark Knight", src: "https://via.placeholder.com/200x280?text=Dark+Knight", category: "Aksiyon", imdbRating: 9.0, releaseYear: 2008, actors: ["Christian Bale", "Heath Ledger"], directors: ["Christopher Nolan"] },
            { title: "Interstellar", src: "https://via.placeholder.com/200x280?text=Interstellar", category: "Bilim Kurgu", imdbRating: 8.6, releaseYear: 2014, actors: ["Matthew McConaughey", "Anne Hathaway"], directors: ["Christopher Nolan"] },
            { title: "Pulp Fiction", src: "https://via.placeholder.com/200x280?text=Pulp+Fiction", category: "Dram", imdbRating: 8.9, releaseYear: 1994, actors: ["John Travolta", "Uma Thurman"], directors: ["Quentin Tarantino"] },
            { title: "The Shawshank Redemption", src: "https://via.placeholder.com/200x280?text=Shawshank", category: "Dram", imdbRating: 9.3, releaseYear: 1994, actors: ["Tim Robbins", "Morgan Freeman"], directors: ["Frank Darabont"] },
            { title: "Forrest Gump", src: "https://via.placeholder.com/200x280?text=Forrest+Gump", category: "Komedi", imdbRating: 8.8, releaseYear: 1994, actors: ["Tom Hanks", "Robin Wright"], directors: ["Robert Zemeckis"] },
            { title: "The Matrix", src: "https://via.placeholder.com/200x280?text=The+Matrix", category: "Bilim Kurgu", imdbRating: 8.7, releaseYear: 1999, actors: ["Keanu Reeves", "Laurence Fishburne"], directors: ["Lana Wachowski", "Lilly Wachowski"] },
            { title: "Fight Club", src: "https://via.placeholder.com/200x280?text=Fight+Club", category: "Dram", imdbRating: 8.8, releaseYear: 1999, actors: ["Brad Pitt", "Edward Norton"], directors: ["David Fincher"] },
            { title: "Gladiator", src: "https://via.placeholder.com/200x280?text=Gladiator", category: "Aksiyon", imdbRating: 8.5, releaseYear: 2000, actors: ["Russell Crowe", "Joaquin Phoenix"], directors: ["Ridley Scott"] },
            { title: "Spirited Away", src: "https://via.placeholder.com/200x280?text=Spirited+Away", category: "Animasyon", imdbRating: 8.6, releaseYear: 2001, actors: ["Rumi Hiiragi", "Miyu Irino"], directors: ["Hayao Miyazaki"] },
            { title: "The Lord of the Rings: The Fellowship of the Ring", src: "https://via.placeholder.com/200x280?text=LOTR", category: "Fantastik", imdbRating: 8.8, releaseYear: 2001, actors: ["Elijah Wood", "Ian McKellen"], directors: ["Peter Jackson"] },
            { title: "The Lion King", src: "https://via.placeholder.com/200x280?text=Lion+King", category: "Animasyon", imdbRating: 8.5, releaseYear: 1994, actors: ["Matthew Broderick", "Jeremy Irons"], directors: ["Roger Allers", "Rob Minkoff"] },
            { title: "Parasite", src: "https://via.placeholder.com/200x280?text=Parasite", category: "Gerilim", imdbRating: 8.5, releaseYear: 2019, actors: ["Song Kang-ho", "Choi Woo-shik"], directors: ["Bong Joon-ho"] },
            { title: "Whiplash", src: "https://via.placeholder.com/200x280?text=Whiplash", category: "Dram", imdbRating: 8.5, releaseYear: 2014, actors: ["Miles Teller", "J.K. Simmons"], directors: ["Damien Chazelle"] },
            { title: "Joker", src: "https://via.placeholder.com/200x280?text=Joker", category: "Dram", imdbRating: 8.4, releaseYear: 2019, actors: ["Joaquin Phoenix", "Robert De Niro"], directors: ["Todd Phillips"] },
            { title: "Coco", src: "https://via.placeholder.com/200x280?text=Coco", category: "Animasyon", imdbRating: 8.4, releaseYear: 2017, actors: ["Anthony Gonzalez", "Gael García Bernal"], directors: ["Lee Unkrich", "Adrian Molina"] },
            { title: "Spider-Man: Into the Spider-Verse", src: "https://via.placeholder.com/200x280?text=Spider-Verse", category: "Animasyon", imdbRating: 8.4, releaseYear: 2018, actors: ["Shameik Moore", "Jake Johnson"], directors: ["Bob Persichetti", "Peter Ramsey", "Rodney Rothman"] }
        ];

        return allMovies.filter(movie => {
            const matchCategory = (!filters.category || filters.category === 'Tümü') || (movie.category === filters.category);
            const matchSearch = (!filters.searchTerm || movie.title.toLowerCase().includes(filters.searchTerm.toLowerCase()));
            const matchImdb = (!filters.imdbMin || movie.imdbRating >= filters.imdbMin);
            const matchYear = (!filters.releaseYear || movie.releaseYear === filters.releaseYear);
            const matchActors = (!filters.actors || filters.actors.length === 0 || filters.actors.every(a => movie.actors.map(x => x.toLowerCase()).includes(a.toLowerCase())));
            const matchDirectors = (!filters.directors || filters.directors.length === 0 || filters.directors.every(d => movie.directors.map(x => x.toLowerCase()).includes(d.toLowerCase())));

            return matchCategory && matchSearch && matchImdb && matchYear && matchActors && matchDirectors;
        });
    }

    // Film kartı oluşturma
    function createMovieCard(movie) {
        const card = document.createElement('div');
        card.className = 'movie-card relative';
        card.title = `${movie.title} - IMDb: ${movie.imdbRating}`;
        card.innerHTML = `
            <img src="${movie.src}" alt="${movie.title}" class="w-full h-40 object-cover rounded-t-md" />
            <div class="p-2">
                <h3 class="font-semibold truncate">${movie.title}</h3>
                <p class="text-sm opacity-80 truncate">${movie.category} | IMDb: ${movie.imdbRating} | ${movie.releaseYear}</p>
                <button class="add-to-list-btn mt-2 w-full text-white py-1 rounded-md text-sm">
                    <i class="fas fa-plus-circle"></i> Add to List
                </button>
            </div>
        `;

        const addButton = card.querySelector('.add-to-list-btn');

        // Butonun başlangıç durumunu ayarla
        updateButtonState(addButton, movie.title);

        // Film kartındaki Add to List butonu olay dinleyicisi
        addButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Kart tıklamasına yayılmasını engelle

            let myList = getMyList();
            const filmTitle = movie.title; // Filmin başlığını al
            const isInList = myList.some(f => f.title === filmTitle); // Filmin listede olup olmadığını kontrol et

            if (isInList) {
                // Film zaten listede ise: listeden kaldır
                myList = myList.filter(f => f.title !== filmTitle);
                console.log(`'${filmTitle}' listeden kaldırıldı.`);
            } else {
                // Film listede değil ise: listeye ekle
                myList.push({ title: filmTitle });
                console.log(`'${filmTitle}' listeye eklendi.`);
            }
            localStorage.setItem('myList', JSON.stringify(myList)); // Güncel listeyi kaydet

            // Butonun durumunu güncelle (toggle mantığına göre çalışacak)
            updateButtonState(addButton, filmTitle);
        });

        return card;
    }

    // Filmleri şerit şeklinde gösterme fonksiyonu
    async function renderMovieStrips(filters = {}) {
        movieStripContainer.innerHTML = ''; // Mevcut şeritleri temizle
        const filteredMovies = await fetchMovies(filters); // Filmleri API'den çek ve filtrele

        if (filteredMovies.length === 0) {
            movieStripContainer.innerHTML = '<p class="text-center text-gray-500 text-lg mt-10">Film bulunamadı. Lütfen arama kriterlerinizi değiştirin.</p>';
            return;
        }

        const firstStrip = document.createElement('div');
        firstStrip.className = 'movie-strip';
        firstStrip.style.setProperty('--scroll-duration', '30s'); // Kaydırma süresi

        const firstStripInner = document.createElement('div');
        firstStripInner.className = 'movie-strip-inner';

        // Tüm filtrelenmiş filmleri tek bir şeride ekle
        for (let i = 0; i < 3; i++) {
            filteredMovies.forEach(movie => {
                firstStripInner.appendChild(createMovieCard(movie));
            });
        }

        firstStrip.appendChild(firstStripInner);
        movieStripContainer.appendChild(firstStrip);
    }

    // İlk render (sayfa yüklendiğinde tüm filmleri getir)
    renderMovieStrips();

    // Kategori butonları tıklama olayı
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');
            const searchTerm = searchInput.value.trim();
            renderMovieStrips({ category, searchTerm });
        });
    });

    // Arama input değiştiğinde filtreleme
    searchInput.addEventListener('input', () => {
        const activeCategoryBtn = document.querySelector('.cat-btn.active');
        const category = activeCategoryBtn ? activeCategoryBtn.getAttribute('data-category') : 'Tümü';
        const searchTerm = searchInput.value.trim();

        renderMovieStrips({ category, searchTerm });
    });

    // Slider'daki "Add to List" butonu için olay dinleyicisi
    if (highlightAddToListBtn) {
        // Konsola, butonun seçilip seçilmediğini kontrol etmek için bir mesaj ekleyelim
        console.log('highlightAddToListBtn elementi:', highlightAddToListBtn);

        highlightAddToListBtn.addEventListener('click', (e) => {
            // Butona tıklandığında bu mesaj konsolda görünmeli
            console.log('Highlight Add to List button clicked!');

            e.preventDefault();
            e.stopPropagation();

            const currentHighlightedMovie = highlightMovies[currentSlide];
            const filmTitle = currentHighlightedMovie ? currentHighlightedMovie.title : '';

            if (!filmTitle) {
                console.warn('Slider film başlığı alınamadı!');
                return;
            }

            let myList = getMyList();
            const isInList = myList.some(f => f.title === filmTitle); // Filmin listede olup olmadığını kontrol et

            if (isInList) {
                // Film zaten listede ise: listeden kaldır
                myList = myList.filter(f => f.title !== filmTitle);
                console.log(`'${filmTitle}' listeden kaldırıldı (Slider).`);
            } else {
                // Film listede değil ise: listeye ekle
                myList.push({ title: filmTitle });
                console.log(`'${filmTitle}' listeye eklendi (Slider).`);
            }
            localStorage.setItem('myList', JSON.stringify(myList)); // Güncel listeyi kaydet

            // Butonun durumunu güncelle (toggle mantığına göre çalışacak)
            updateButtonState(highlightAddToListBtn, filmTitle);
        });
    }

}); // DOMContentLoaded'in kapanış parantezi
