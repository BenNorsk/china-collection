console.log("JS is running!")

let images = ["Lehman Brothers", "Mars", "ETH","America","England","Porn","American","23","Englishman","Sad","And","Squid","BTC","Genesis","Trending","I","Useless", "Caesar","Infinity", "Void",  "You", "China","Love","Chinese"]
let chineseTranslation = {"Lehman Brothers": "雷曼兄弟",  "Mars": "火星", "ETH": "以太坊","America": "美国" ,"England": "英国","Porn": "A片","American": "美国人","23": "二十三","Englishman": "英国人","Sad": "伤心","And": "和","Squid": "乌贼","BTC": "比特币","Genesis": "创世纪","Trending": "趋势","I": "我","Useless": "无用", "Caesar": "凯撒","Infinity": "无限", "Void": "空白",  "You": "你", "China": "中国","Love": "爱","Chinese": "中国人"}
let i = 0
let artwork = document.getElementById("artwork")
let artworkTitle = document.getElementById("artwork-title")
let artworkHanzi = document.getElementById("artwork-hanzi")
let chevronLeft = document.getElementById("chevron-left")
let chevronRight = document.getElementById("chevron-right")
let queryString = window.location.search
let params = new URLSearchParams(queryString)

function changeImageLeft() {
    console.log("change!")
    i = i + 1
    if (i >= images.length) {
        i = 0
    }
    artwork.src = `images/${images[i]}.png`
    artworkTitle.innerText = images[i]
    artworkHanzi.innerText = chineseTranslation[images[i]]
}

function changeImageRight() {
    console.log("change!")
    i = i - 1
    if (i < 0) {
        i = images.length - 1
    }
    artwork.src = `images/${images[i]}.png`
    artworkTitle.innerText = images[i]
    artworkHanzi.innerText = chineseTranslation[images[i]]
}

function switchToCorrectImage() {
    console.log(queryString)
    art = params.get("art")
    a = images.indexOf(art)
    if (a != -1) {
        i = a
        artwork.src = `images/${images[i]}.png`
        artworkTitle.innerText = images[i]
        artworkHanzi.innerText = chineseTranslation[images[i]]
    }
}

document.addEventListener('DOMContentLoaded', () => {
    switchToCorrectImage();
    chevronLeft.addEventListener("click", changeImageLeft);
    chevronRight.addEventListener("click", changeImageRight);
});