const eventContainer = document.getElementById('events')
const eventCards = eventContainer.querySelectorAll('.event')
const noEvents = eventContainer.querySelector('#no-events')

if (eventCards.length > 0) {
    noEvents.style.display = "none"
} else {
    noEvents.style.display = "block"
}