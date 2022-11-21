const button = document.getElementById("button");
const div = document.getElementById("div");
const zivoty = document.getElementById("zivoty");
const zivoty2 = document.getElementById("zivoty2");
const info = document.getElementById("info");

button.onmousedown = () => {
    
    if (zivoty.innerHTML > 0 && zivoty2.innerHTML > 0) {
        div.style.left = "200px";
        zivoty2.innerHTML--;
    }

    if (zivoty2.innerHTML <= 0) {
        info.innerHTML = "Nepřítel zemřel";
        clearInterval(interval);
    }
}

button.onmouseup = () => {
    div.style.left = "0px";
}

const interval = setInterval(() => {
    zivoty.innerHTML--;
    if (zivoty.innerHTML <= 0) {
        info.innerHTML = "Zemřel jsi"
        clearInterval(interval)
    }
},500)