const galleries = document.querySelectorAll(".gallery-card")
const paginationContainer = document.querySelector('.pagination-buttons');
const paginationButtons = paginationContainer.querySelectorAll('.continue-button')

paginationButtons.forEach(button => {
    const imgSeries = button.id.split('-')[1]
    button.addEventListener('click', () => {
        showGalleries(imgSeries)
        selectButton(button)
    })
})

function selectButton(selectedButton) {
    const buttons = paginationContainer.querySelectorAll('.continue-button');
    buttons.forEach(button => {
        button.classList.remove('selected');
    });
    selectedButton.classList.add('selected');
}

function showGalleries(imgSeries) {
    galleries.forEach(gallery => {
        if (gallery.classList.contains('imgseries-' + imgSeries)) {
            gallery.style.display = 'flex';
        } else {
            gallery.style.display = 'none';
        }
    });
}

showGalleries(2023)
selectButton(paginationContainer.querySelector('#galleries-2023'))