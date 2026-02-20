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