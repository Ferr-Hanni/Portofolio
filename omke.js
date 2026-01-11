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