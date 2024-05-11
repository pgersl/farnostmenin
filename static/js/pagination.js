const items = document.querySelectorAll(".page-card")
const itemsPerPage = 5
const totalPages = Math.ceil(items.length / itemsPerPage)

items.forEach((item, index) => {
    const pageNumber = Math.floor(index / itemsPerPage) + 1
    item.classList.add('page-' + pageNumber)
})

const paginationContainer = document.querySelector('.pagination-buttons');
for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.classList.add('continue-button')
    button.classList.add('pages-' + i)
    button.textContent = i;
    button.addEventListener('click', () => {
        showPage(i)
        selectButton(button)
    });
    paginationContainer.appendChild(button);
}

function selectButton(selectedButton) {
    const buttons = paginationContainer.querySelectorAll('.continue-button');
    buttons.forEach(button => {
        button.classList.remove('selected');
    });
    selectedButton.classList.add('selected');
}

function showPage(pageNumber) {
    items.forEach(item => {
        if (item.classList.contains('page-' + pageNumber)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

showPage(1)
selectButton(paginationContainer.querySelector('.pages-1'))