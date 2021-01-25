function makeRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll("button");

for (let button of buttons) {
     button.addEventListener("click", function () {
         this.style.background = makeRandomColor();
         this.style.color = makeRandomColor();
         console.log(this);
     });
}



const diffColor = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

diffColor("khaki", 1000)
    .then(() => diffColor("antiquewhite", 1000))
    .then(() => diffColor("bisque", 1000))
    .then(() => diffColor("blanchedalmond", 2000))
    .then(() => diffColor("cornsilk", 2000))
    .then(() => diffColor("darkgray", 2000))
    .then(() => diffColor("darkseagreen", 3000))
    .then(() => diffColor("lemonchiffon", 3000))
    .then(() => diffColor("lightcoral", 4000))
    .then(() => diffColor("lightskyblue", 5000))
    .then(() => diffColor("mediumturquoise", 6000))
    .then(() => diffColor("moccasin", 7000))
    .then(() => diffColor("navajowhite", 8000))
    .then(() => diffColor("mediumaquamarine", 9000))
    .then(() => diffColor("sandybrown", 9000))
    
    