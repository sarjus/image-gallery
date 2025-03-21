let images = [
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&h=400&fit=crop'
];
let currentIndex = 0;
let largeImage = document.getElementById('largeImage');

function showImage(index) {
    currentIndex = index;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function updateImage() {
    let newImage = document.createElement('img');
    newImage.src = images[currentIndex];
    newImage.classList.add('active');

    let viewer = document.querySelector('.viewer');
    let currentImage = viewer.querySelector('img');

    viewer.appendChild(newImage);
    setTimeout(() => currentImage.remove(), 1000);
}

// Auto-slide every 3 seconds
setInterval(nextImage, 3000);
