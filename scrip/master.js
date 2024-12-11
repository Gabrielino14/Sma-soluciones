document.addEventListener('DOMContentLoaded', function() {
    // Carrusel de la sección hero
    const heroCarousel = document.querySelector('.carousel');
    const heroSlides = heroCarousel.querySelectorAll('.carousel-item');
    let currentHeroSlide = 0;

    function showNextHeroSlide() {
        heroSlides[currentHeroSlide].classList.remove('active');
        currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
        heroSlides[currentHeroSlide].classList.add('active');
    }

    setTimeout(() => {
        setInterval(showNextHeroSlide, 5000); 
    }, 100);

    // Carrusel de testimonios
    const testimoniosCarousel = document.querySelector('.testimonios-carousel');
    const testimonios = testimoniosCarousel.querySelectorAll('.testimonio');
    let currentTestimonio = 0;

    function showNextTestimonio() {
        testimonios[currentTestimonio].style.opacity = '0';
        setTimeout(() => {
            testimonios[currentTestimonio].style.display = 'none';
            currentTestimonio = (currentTestimonio + 1) % testimonios.length;
            testimonios[currentTestimonio].style.display = 'block';
            setTimeout(() => {
                testimonios[currentTestimonio].style.opacity = '1';
            }, 50);
        }, 500);
    }

    setInterval(showNextTestimonio, 5000); 

    // Animaciones de scroll para los servicios
    const servicios = document.querySelectorAll('.servicio');

    function checkScroll() {
        const triggerBottom = window.innerHeight / 5 * 4;

        servicios.forEach(servicio => {
            const servicioTop = servicio.getBoundingClientRect().top;

            if (servicioTop < triggerBottom) {
                servicio.style.opacity = '1';
                servicio.style.transform = 'translateY(0)';
            } else {
                servicio.style.opacity = '0';
                servicio.style.transform = 'translateY(20px)';
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
    checkScroll(); 

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});