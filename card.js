function prevOnibus(button) {
    const card = button.closest('.transporte');
    const images = card.querySelectorAll('.img-carousel img');
    let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));

    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].classList.add('active');
}

function nextOnibus(button) {
    const card = button.closest('.transporte');
    const images = card.querySelectorAll('.img-carousel img');
    let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));

    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}