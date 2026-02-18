function changeWeb(type) {
    if (type === Number) {
        window.location.href = "404.php"
    }
    /*
    * ada 3 pilihan coi
    * - trim (default)
    * - cppkalku
    * - webku
    * */
    switch (type) {
        case "cppkalku":
            window.location.replace("http://103.186.167.18:8002/rpl3/game/rocket_league/")
            break
        case "webku":
            window.location.replace("http://103.186.167.18:8002/rpl3/laravel/kaggleFeri/")
            break
        default:
            window.location.replace("http://103.186.167.18:8002/rpl3/laravel/pengepul-meme/public/memes")
    }
}

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        appendAlert('Nice, you triggered this alert message!', 'success')
    })
}

let isClicked = false
function omkeGasm() {
    const icon = document.getElementById("ikondrop")
    if (isClicked) {
        isClicked = false
        icon.style.transform = "rotate(0deg)"
        icon.style.transition = "ease-in 0.2s"
    } else {
        isClicked = true
        icon.style.transform = "rotate(180deg)"
        icon.style.transition = "ease-out 0.2s"
    }
}

let isTranslateClicked = true
function translate() {
    const el_anu = document.getElementById("translate")
    if (isTranslateClicked) {
        isTranslateClicked = false
        el_anu.write("<img src='https://hatscripts.github.io/circle-flags/flags/id.svg' width='20' />")
    } else {
        isTranslateClicked = true
        el_anu.write("<img src='https://hatscripts.github.io/circle-flags/flags/us.svg' width='20' />")
    }
}

function setTranslateEnabled() {
    isTranslateClicked = !isTranslateClicked;
}

// ===== EMAILJS CONTACT FORM =====
// Initialize EmailJS when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your Public Key
    emailjs.init("Nz7EQLCcWn0ujcsin");
    
    // Handle form submission
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const alertMessage = document.getElementById('alertMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Disable button and show loading
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Mengirim...';
            
            // Get form data
            const formData = {
                user_name: document.getElementById('user_name').value,
                user_email: document.getElementById('user_email').value,
                message: document.getElementById('message').value
            };
            
            // Send email using EmailJS
            emailjs.send('service_j1ko3jd', 'template_beqfhmy', formData)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Show success message
                    alertMessage.className = 'alert alert-success mt-3';
                    alertMessage.style.display = 'block';
                    alertMessage.innerHTML = '<strong>Berhasil!</strong> Pesan Anda telah terkirim. Terima kasih!';
                    
                    // Reset form
                    contactForm.reset();
                    
                    // Hide message after 5 seconds
                    setTimeout(() => {
                        alertMessage.style.display = 'none';
                    }, 5000);
                    
                }, function(error) {
                    console.log('FAILED...', error);
                    
                    // Show error message
                    alertMessage.className = 'alert alert-danger mt-3';
                    alertMessage.style.display = 'block';
                    alertMessage.innerHTML = '<strong>Gagal!</strong> Terjadi kesalahan. Silakan coba lagi.';
                    
                    // Hide message after 5 seconds
                    setTimeout(() => {
                        alertMessage.style.display = 'none';
                    }, 5000);
                })
                .finally(function() {
                    // Re-enable button
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = 'Kirim';
                });
        });
    }
});