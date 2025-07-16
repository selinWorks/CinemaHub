

document.addEventListener('DOMContentLoaded', function () {
  
    const accountBtn = document.getElementById('account-toggle');
    const accountMenu = document.getElementById('account-menu');
    if (accountBtn && accountMenu) {
        accountBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            accountMenu.classList.toggle('show');
            accountBtn.classList.toggle('active');
        });
        document.addEventListener('click', function (e) {
            if (!accountMenu.contains(e.target) && !accountBtn.contains(e.target)) {
                accountMenu.classList.remove('show');
                accountBtn.classList.remove('active');
            }
        });
    }

   
    const mobileBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('show');
        });
        mobileMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                mobileMenu.classList.remove('show');
            });
        });
    }

    const searchToggle = document.getElementById('search-toggle');
    const searchInput = document.getElementById('search-input-navbar');
    if (searchToggle && searchInput) {
        searchToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            searchInput.classList.toggle('show');
            if (searchInput.classList.contains('show')) {
                searchInput.focus();
            }
        });
        document.addEventListener('click', function (e) {
            if (!searchInput.contains(e.target) && !searchToggle.contains(e.target)) {
                searchInput.classList.remove('show');
            }
        });
    }
});
