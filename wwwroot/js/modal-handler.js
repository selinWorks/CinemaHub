// wwwroot/js/modal-handler.js

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('movieDetailsModal');
    const closeButton = document.querySelector('.modal .close-button');
    const modalContentInner = document.getElementById('modalContentInner');

    // Modalı açma fonksiyonu
    window.openMovieDetailsModal = function (movieId) {
        if (!modal) {
            console.error('Modal element not found!');
            return;
        }

        // AJAX çağrısı ile film detaylarını yükle
        fetch(`/MyList/GetMovieDetails?id=${movieId}`) // Controller'ınızın yolunuza göre düzenleyin
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text(); // HTML içeriği olarak alıyoruz
            })
            .then(html => {
                modalContentInner.innerHTML = html; // Modalin içeriğini doldur
                modal.style.display = 'block'; // Modalı görünür yap
                document.body.classList.add('modal-open'); // Scrollbar'ı gizlemek için body'ye sınıf ekle

                // Add to list butonu için event listener (modal yüklendikten sonra)
                const addToListBtn = modalContentInner.querySelector('.add-to-list-btn');
                if (addToListBtn) {
                    addToListBtn.onclick = function () {
                        const currentMovieId = this.dataset.movieId;
                        const isAdded = this.classList.contains('added');
                        if (isAdded) {
                            // Listeden çıkarma işlemi (örneğin)
                            alert('Film zaten listenizde. Çıkarma işlevi eklenecek.');
                            // fetch('/api/mylist/remove', { method: 'POST', body: JSON.stringify({ movieId: currentMovieId }) })
                        } else {
                            // Listeye ekleme işlemi
                            alert('Film listeye eklendi (simülasyon).');
                            this.classList.add('added');
                            this.innerHTML = '<i class="fas fa-check"></i> Listemde';
                            // fetch('/api/mylist/add', { method: 'POST', body: JSON.stringify({ movieId: currentMovieId }) })
                        }
                    };
                }
            })
            .catch(error => {
                console.error('Error fetching movie details:', error);
                modalContentInner.innerHTML = '<p style="text-align: center; color: #B0B0B0; font-size: 1.2rem;">Film detayları yüklenirken bir hata oluştu.</p>';
                modal.style.display = 'block';
                document.body.classList.add('modal-open');
            });
    };

    // Modalı kapatma fonksiyonu
    const closeModal = function () {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        modalContentInner.innerHTML = ''; // İçeriği temizle
    };

    // Kapanış butonuna tıklama olayı
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    // Modal dışına tıklayarak kapatma
    if (modal) {
        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    // ESC tuşu ile kapatma
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});