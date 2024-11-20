// const hamburger = document.querySelector('#hamburger');
// const navMenu = document.querySelector('#nav-menu');

// hamburger.addEventListener('click', function() {
//     hamburger.classList.toggle('hamburger-active');
//     navMenu.classList.toggle('hidden');
// })


// // klik diluar hamburger
// window.addEventListener('click', function(e){
//     if (e.target != hamburger && e.target != navMenu) {
//         hamburger.classList.remove('hamburger-active');
//         navMenu.classList.add('hidden');
//     }
// });

var typed = new Typed('#element', {
    strings: ['Want to be part of us?', 'Book Now and get other interesting benefits!'],
    typeSpeed: 50,
    backSpeed: 30,
    delaySpeed: 100,
    loop: true,
    cursorChar: '|'
  });

//   Slider
// let sliderContainer = document.getElementById('sliderContainer');
// let slider = document.getElementById('slider');
// let cards = slider.getElementsByTagName('li');
// let nextBtn = document.getElementById('nextBtn');
// let prevBtn = document.getElementById('prevBtn');

// let elementsToShow = 3;
// if(document.body.clientWidth<1000) {
//     elementsToShow = 1;
// } else if(document.body.clientWidth<1500) {
//     elementsToShow = 3;
// }

// let sliderContainerWidth = sliderContainer.clientWidth;

// let cardWidth = sliderContainerWidth / elementsToShow;

// slider.style.width = cards.length * cardWidth + 'px';
// slider.style.transition = 'margin';
// slider.style.transitionDuration = '1s';

// for (let index = 0; index < cards.length; index++) {
//     const element = cards[index];
//     element.style.width = cardWidth + 'px';
// }

// function prev() {
//     if (+slider.style.marginLeft.slice(0, -2) != -cardWidth*(cards.length-elementsToShow)) {
//         slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2)) - cardWidth) + 'px'; // 100px
//     }
// }

// function next() {
//     if (+slider.style.marginLeft.slice(0,-2) != 0) {
//         slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2)) + cardWidth) + 'px'; // 100px
//     }
// }

let currentSlide = 0;
let autoSlideInterval; // Variabel untuk menyimpan interval auto-slide

function changeSlide(direction) {
    const slides = document.querySelectorAll('#slider > li');
    const totalSlides = slides.length;

    // Calculate the new slide index
    const newSlideIndex = currentSlide + direction;

    // Check if the new slide index is valid
    if (newSlideIndex < 0 || newSlideIndex >= totalSlides) {
        return; // Do nothing if out of bounds
    }

    // Update current slide index
    currentSlide = newSlideIndex;

    // Calculate the new translate value
    const newTranslateX = -currentSlide * 100;

    // Apply the translation
    document.querySelector('#slider').style.transform = `translateX(${newTranslateX}%)`;

    // Update button states
    updateButtonStates();
}

// Initialize button states on page load
updateButtonStates();
startAutoSlide(); // Mulai auto-slide saat halaman dimuat

function updateButtonStates() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const totalSlides = document.querySelectorAll('#slider > li').length;

    // Atur tombol sebelumnya
    if (currentSlide === 0) {
        prevBtn.disabled = true;
        prevBtn.style.opacity = 0.2; // Kurangi opacity
    } else {
        prevBtn.disabled = false;
        prevBtn.style.opacity = 1; // Pulihkan opacity
    }

    // Atur tombol berikutnya
    if (currentSlide >= totalSlides - 1) {
        nextBtn.disabled = true;
        nextBtn.style.opacity = 0.2; // Kurangi opacity
    } else {
        nextBtn.disabled = false;
        nextBtn.style.opacity = 1; // Pulihkan opacity
    }
}

// Fungsi untuk memulai auto-slide
function startAutoSlide() {
    const slides = document.querySelectorAll('#slider > li');
    const totalSlides = slides.length;

    autoSlideInterval = setInterval(() => {
        const nextSlideIndex = (currentSlide + 1) % totalSlides; // Loop kembali ke awal jika di akhir
        changeSlide(nextSlideIndex - currentSlide); // Pindah ke slide berikutnya
    }, 4000); // Geser setiap 3,5 detik
}

// Fungsi untuk menghentikan auto-slide
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Tambahkan event listener untuk menghentikan auto-slide saat hover (opsional)
document.querySelector('#sliderContainer').addEventListener('mouseover', stopAutoSlide);
document.querySelector('#sliderContainer').addEventListener('mouseout', startAutoSlide);

// Button go to Home
function scrollToHome() {
    const homeSection = document.getElementById('Home');
    homeSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Show/Hide Button on Scroll
  const backToHomeBtn = document.getElementById('backToHomeBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      backToHomeBtn.classList.remove('hidden');
      backToHomeBtn.classList.add('show transition-all duration-300');
    } else {
      backToHomeBtn.classList.remove('show');
      backToHomeBtn.classList.add('hidden');
    }
  });

//   untuk blur background navbar klo lg di scroll
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const nav = document.getElementById('Nav')
    if (window.scrollY > 10) {
        navbar.classList.add('backdrop-blur', 'bg-transparant', 'bg-opacity-70');
        nav.classList.add('text-yellow-500')
    } else {
        navbar.classList.remove('backdrop-blur', 'bg-transparant', 'bg-opacity-70');
        nav.classList.remove('text-yellow-500')
    }
});

