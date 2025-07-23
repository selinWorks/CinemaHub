// wwwroot/js/modal-details.js

document.addEventListener('DOMContentLoaded', function () {
    const movieDetailModal = document.getElementById('movieDetailModal');
    const closeButton = movieDetailModal.querySelector('.close-button');
    const modalContentInner = document.getElementById('modalContentInner');

    // My List'i localStorage'dan yükle
    let myList = JSON.parse(localStorage.getItem('myList')) || [];

    // Detay Butonlarına Tıklama Olayı Dinleyicisi
    document.querySelectorAll('.movie-details-btn').forEach(button => {
        button.addEventListener('click', async function (event) {
            event.preventDefault(); // Varsayılan link davranışını engelle

            const card = this.closest('.movie-card');
            if (!card) return;

            // data-movie-id, data-series-id veya data-list-item-id'den uygun ID'yi al
            const itemId = parseInt(this.getAttribute('data-movie-id') ||
                this.getAttribute('data-series-id') ||
                this.getAttribute('data-list-item-id'));

            if (isNaN(itemId)) {
                console.error("Item ID is not valid:", this.outerHTML);
                return;
            }

            try {
                // HomeController'daki GetMovieDetailsPartial Action metodunu çağırıyoruz
                // Bu metod, MovieDetailsModal View Component'ini render edip HTML'i geri dönecek
                const response = await fetch(`/Home/GetMovieDetailsPartial?itemId=${itemId}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const htmlContent = await response.text();
                modalContentInner.innerHTML = htmlContent;

                // Modaldaki butonlara event listener'ları tekrar ekle
                // View Component'ten dönen HTML içinde oldukları için yeni referanslar almalıyız
                const addToListBtn = modalContentInner.querySelector('.add-to-list-btn');

                if (addToListBtn) {
                    // Butonun durumunu güncelle (Added/Add to List)
                    updateAddToListButton(addToListBtn, itemId);
                    // Add to List butonuna tıklama olayı ekle
                    addToListBtn.addEventListener('click', toggleMyListItem);
                }

                // Modalı göster
                movieDetailModal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Sayfa kaydırmasını engelle

            } catch (error) {
                console.error("Error loading modal content:", error);
                modalContentInner.innerHTML = `<p style="color:red; text-align:center; padding: 20px;">Failed to load details. Please try again.</p>`;
                movieDetailModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Modalı kapatma işlevselliği
    closeButton.addEventListener('click', function () {
        movieDetailModal.style.display = 'none';
        document.body.style.overflow = ''; // Sayfa kaydırmasını geri aç
        modalContentInner.innerHTML = ''; // Modalı kapatırken içeriği temizle
    });

    // Modal dışına tıklayınca kapat
    window.addEventListener('click', function (event) {
        if (event.target === movieDetailModal) {
            movieDetailModal.style.display = 'none';
            document.body.style.overflow = '';
            modalContentInner.innerHTML = ''; // Modalı kapatırken içeriği temizle
        }
    });

    // "Add to List" butonunun durumunu güncelleyen fonksiyon
    function updateAddToListButton(buttonElement, itemId) {
        if (myList.includes(itemId)) {
            buttonElement.classList.add('added');
            buttonElement.innerHTML = '<i class="fas fa-check"></i> Added to List';
        } else {
            buttonElement.classList.remove('added');
            buttonElement.innerHTML = '<i class="fas fa-plus"></i> Add to List';
        }
    }

    // Listeye Ekle/Kaldır İşlevselliği
    function toggleMyListItem(event) {
        const button = event.currentTarget;
        const itemId = parseInt(button.getAttribute('data-item-id'));

        // Modalın içindeki başlıktan öğe adını al
        const modalTitleElement = modalContentInner.querySelector('.modal-details h2');
        const itemTitle = modalTitleElement ? modalTitleElement.textContent : `Item ${itemId}`;

        const index = myList.indexOf(itemId);

        if (index === -1) {
            // Ekle: Eğer listede yoksa ekle
            myList.push(itemId);
            button.classList.add('added');
            button.innerHTML = '<i class="fas fa-check"></i> Added to List';
            // alert(`${itemTitle} added to your list!`); // Alert yerine daha şık bir bildirim kullanılabilir
        } else {
            // Kaldır: Eğer listede varsa kaldır
            myList.splice(index, 1);
            button.classList.remove('added');
            button.innerHTML = '<i class="fas fa-plus"></i> Add to List';
            // alert(`${itemTitle} removed from your list!`); // Alert yerine daha şık bir bildirim kullanılabilir
        }

        localStorage.setItem('myList', JSON.stringify(myList)); // localStorage'ı güncelle

        // My List sayfasının güncellenmesi gerektiğini bildiren bir CustomEvent tetikle
        // Bu olay, My List sayfasına özel JS'te dinlenip listeyi yeniden render edebilir.
        document.dispatchEvent(new CustomEvent('myListUpdated'));
    }
});