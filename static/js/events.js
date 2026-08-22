const eventContainers = [document.getElementById('events'), document.getElementById('events-section')]

eventContainers.forEach(container => {
    const eventCards = container.querySelectorAll('.event')
    const noEvents = container.querySelector('#no-events')
    if (eventCards.length > 0) {
        noEvents.style.display = "none"
    } else {
        noEvents.style.display = "block"
    }
})

