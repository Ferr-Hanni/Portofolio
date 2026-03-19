document.addEventListener('DOMContentLoaded', function() {

    // ===== EMAILJS INIT =====
    emailjs.init("Nz7EQLCcWn0ujcsin");

    // ===== ALERT PLACEHOLDER =====
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    const appendAlert = (message, type) => {
        if (!alertPlaceholder) return;
        const wrapper = document.createElement('div');
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('');
        alertPlaceholder.append(wrapper);
    };

    const alertTrigger = document.getElementById('liveAlertBtn');
    if (alertTrigger) {
        alertTrigger.addEventListener('click', () => {
            appendAlert('Nice, you triggered this alert message!', 'success');
        });
    }

    // ===== EMAILJS CONTACT FORM =====
    // index.html pakai id="contact-Form", index2.html pakai id="contactForm"
    const contactForm = document.getElementById('contact-Form') || document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const alertMessage = document.getElementById('alertMessage');

    if (contactForm && submitBtn && alertMessage) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Mengirim...';

            const formData = {
                user_name: document.getElementById('user_name')?.value || '',
                user_email: document.getElementById('user_email')?.value || '',
                message: document.getElementById('message')?.value || ''
            };

            emailjs.send('service_jikxbjd', 'template_beqfhmy', formData)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alertMessage.className = 'alert alert-success mt-3';
                    alertMessage.style.display = 'block';
                    alertMessage.innerHTML = '<strong>Berhasil!</strong> Pesan Anda telah terkirim. Terima kasih!';
                    contactForm.reset();
                    setTimeout(() => { alertMessage.style.display = 'none'; }, 5000);
                }, function(error) {
                    console.log('FAILED...', error);
                    alertMessage.className = 'alert alert-danger mt-3';
                    alertMessage.style.display = 'block';
                    alertMessage.innerHTML = '<strong>Gagal!</strong> Error: ' + JSON.stringify(error);
                    setTimeout(() => { alertMessage.style.display = 'none'; }, 7000);
                })
                .finally(function() {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'Kirim';
                });
        });
    }

});

// ===== FUNGSI NAVIGASI PROJEK =====
function changeWeb(type) {
    switch (type) {
        case "cppkalku":
            window.location.replace("http://103.186.167.18:8002/rpl3/game/rocket_league/");
            break;
        case "webku":
            window.location.replace("http://103.186.167.18:8002/rpl3/laravel/kaggleFeri/");
            break;
        default:
            window.location.replace("http://103.186.167.18:8002/rpl3/laravel/pengepul-meme/public/memes");
    }
}

// ===== DROPDOWN ICON ANIMATION =====
let isClicked = false;
function omkeGasm() {
    const icon = document.getElementById("ikondrop");
    if (!icon) return;
    if (isClicked) {
        isClicked = false;
        icon.style.transform = "rotate(0deg)";
        icon.style.transition = "ease-in 0.2s";
    } else {
        isClicked = true;
        icon.style.transform = "rotate(180deg)";
        icon.style.transition = "ease-out 0.2s";
    }
}

// ===== TRANSLATE TOGGLE =====
let isTranslateClicked = true;
function translate() {
    const el_anu = document.getElementById("translate");
    if (!el_anu) return;
    if (isTranslateClicked) {
        isTranslateClicked = false;
        el_anu.innerHTML = "<img src='https://hatscripts.github.io/circle-flags/flags/id.svg' width='20' />";
    } else {
        isTranslateClicked = true;
        el_anu.innerHTML = "<img src='https://hatscripts.github.io/circle-flags/flags/us.svg' width='20' />";
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Initialize Particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ff6b6b'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ff6b6b',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
    
    // Hover effect on links
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        
        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });

    // Typed.js
    new Typed('.typed-text', {
        strings: [
            'Feri Ferdianto',
            'Pemula Web Developer',
            'PPLG Student',
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        showCursor: false
    });

    // Navbar scroll effect
    const navbar = document.getElementById('dramaticNavbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Back to top button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link-dramatic');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Parallax effect on hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const hero = document.querySelector('.hero-dramatic');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Form submission with EmailJS
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const alertMessage = document.getElementById('alertMessage');

    if (contactForm && submitBtn && alertMessage) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Sending...';

            const formData = {
                user_name: document.getElementById('user_name')?.value || '',
                user_email: document.getElementById('user_email')?.value || '',
                message: document.getElementById('message')?.value || ''
            };

            // Simulate sending (replace with actual EmailJS)
            setTimeout(() => {
                alertMessage.className = 'alert alert-success mt-3';
                alertMessage.style.display = 'block';
                alertMessage.innerHTML = '<strong>Success!</strong> Your message has been sent. Thank you!';
                contactForm.reset();
                
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane ms-2"></i>';
                
                setTimeout(() => { 
                    alertMessage.style.display = 'none'; 
                }, 5000);
            }, 1500);
        });
    }

    // Project navigation
    window.changeWeb = function(type) {
        const urls = {
            cppkalku: "http://103.186.167.18:8002/rpl3/game/rocket_league/",
            webku: "http://103.186.167.18:8002/rpl3/laravel/kaggleFeri/",
            trim: "http://103.186.167.18:8002/rpl3/laravel/pengepul-meme/public/memes"
        };
        
        window.location.href = urls[type] || urls.trim;
    };

    // Skill bars animation on scroll
    const skillCards = document.querySelectorAll('.skill-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                if (progressBar) {
                    progressBar.style.width = progressBar.style.width;
                }
            }
        });
    }, { threshold: 0.5 });

    skillCards.forEach(card => observer.observe(card));

    // 3D tilt effect on project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // Loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
});

// ===== ADDITIONAL ANIMATIONS =====

// Mouse move parallax for hero
document.addEventListener('mousemove', (e) => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        const moveX = (e.clientX - window.innerWidth / 2) / 50;
        const moveY = (e.clientY - window.innerHeight / 2) / 50;
        heroContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
});

// Counter animation for stats
function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerText = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Trigger counter when stats come into view
const statusNumbers = document.querySelectorAll('.status-number');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const number = entry.target;
            const targetNumber = parseInt(number.innerText);
            animateCounter(number, 0, targetNumber, 2000);
            counterObserver.unobserve(number);
        }
    });
}, { threshold: 0.5 });

statusNumbers.forEach(num => counterObserver.observe(num));