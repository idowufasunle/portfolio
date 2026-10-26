const galleryImages = document.querySelectorAll('#galleryImages');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('closeBtn');

galleryImages.forEach((image) => {
  image.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = image.querySelector('img').src;
  });
});

closeBtn.addEventListener('click', () => { 
  lightbox.style.display = 'none';
  lightboxImg.src = './Images/erlingHaaland.jpg'; 
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
        
        lightboxImg.src = './Images/erlingHaaland.jpg';
    }
});