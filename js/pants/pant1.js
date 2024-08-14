let currentIndex = 0;

const images = [
    'photo/Picture1.png',
    'photo/Picture2.png',
    'photo/Picture3.png',
    'photo/Picture4.png'
];

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    document.getElementById('slide-image').src = images[currentIndex];
}
