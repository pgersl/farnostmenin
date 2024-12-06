document.addEventListener('DOMContentLoaded', () => {
    const banners = document.querySelectorAll('.hero-banner');
    let currentIndex = 0;
    const displayTime = 8000;
    const transitionTime = 1000;

    function updateBanners() {
        const currentBanner = banners[currentIndex];
        const nextIndex = (currentIndex + 1) % banners.length;
        const nextBanner = banners[nextIndex];

        currentBanner.classList.remove('active');
        setTimeout(() => {
            currentBanner.style.zIndex = 0;
        }, transitionTime);

        nextBanner.style.zIndex = 1;
        nextBanner.classList.add('active');

        currentIndex = nextIndex;
    }

    banners.forEach((banner, index) => {
        banner.style.zIndex = index === 0 ? 1 : 0;
    });
    banners[0].classList.add('active');

    setInterval(updateBanners, displayTime);
});
