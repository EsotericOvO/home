const censoredText = [
    "█YT█^",
    "E#████d",
    "████H#",
    "!███nYa",
    "██████",
    "███F██",
    "███X@#",
    "█$███^",
    "███Z#@!",
    "█A██ty",
    "C#███D",
    "███E^%",
    "F!!███",
    "H#███I",
    "J█.██K$",
    "L%g███",
    "N@███O",
    "P███!Q",
    "R$███S",
    "T%███U",
    "V&g███",
    "X*███Y",
    "Z.(███)",
];
const censoredElement = document.querySelector(".censored");

setInterval(() => {
    censoredElement.textContent =
        censoredText[Math.floor(Math.random() * (censoredText.length - 1))];
}, 50);

function pingWebSocket() {
    const socket = new WebSocket("ws://localhost:6463");

    socket.onopen = function () {
        discord(
            "Your discord is open, your ip has been logged and you've been invited to the diddy party >:)",
        );
    };

    socket.onerror = function (error) {
        console.log("probably not using discord");
    };
}

function discord(message) {
    const modal = document.createElement("div");
    modal.style.display = "block";
    modal.style.position = "fixed";
    modal.style.zIndex = "1";
    modal.style.width = "600px";
    modal.style.border = "2px solid #000";
    modal.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    modal.style.cursor = "move";

    const modalContent = document.createElement("div");
    modalContent.style.padding = "10px";
    modalContent.style.position = "relative";

    const closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    closeButton.style.color = "#FF0000";
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";
    closeButton.style.fontSize = "24px";
    closeButton.style.fontWeight = "bold";
    closeButton.style.cursor = "pointer";
    closeButton.onclick = function () {
        modal.style.display = "none";
        document.body.removeChild(modal);
    };

    const messageText = document.createElement("p");
    messageText.innerText = message;
    messageText.style.color = "red";
    messageText.style.fontSize = "30px";
    messageText.title = "this is a joke";

    modalContent.appendChild(closeButton);
    modalContent.appendChild(messageText);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    const modalRect = modal.getBoundingClientRect();
    modal.style.left = window.innerWidth / 2 - modalRect.width / 2 + "px";
    modal.style.top = window.innerHeight / 2 - modalRect.height / 2 + "px";

    let offsetX, offsetY;

    modalContent.onmousedown = function (e) {
        if (e.target === closeButton) return;

        offsetX = e.clientX - modal.offsetLeft;
        offsetY = e.clientY - modal.offsetTop;

        document.onmousemove = function (e) {
            modal.style.left = e.clientX - offsetX + "px";
            modal.style.top = e.clientY - offsetY + "px";
        };

        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        };

        return false;
    };
}

let clickCount = 0;
const icon = document.getElementById("icon");

icon.addEventListener("click", () => {
    clickCount++;
    if (clickCount === 5) {
        window.location.href = "./vid/thosewhoknow.mp4";
    }
});

let inputSequence = [];
const targetSequence = "420";

document.addEventListener("keydown", (event) => {
    if (targetSequence.includes(event.key)) {
        inputSequence.push(event.key);
        if (inputSequence.length > targetSequence.length) {
            inputSequence.shift();
        }

        if (inputSequence.join("") === targetSequence) {
            startPsychedelicEffect();
        }
    } else {
        inputSequence = [];
    }
});

function startPsychedelicEffect() {
    const icon = document.getElementById("icn");
    icon.src="./img/hallucinations.png"
    icon.style.opacity=0.5
    const audio = new Audio("./music/hallucinations.mp3");
    audio.play();
    alert("dude weed lmao / playing black magick ss - endless hallucinations");
    setInterval(() => {
        changeAllElementsColor();
    }, 1000);
}

function changeAllElementsColor() {
    const elements = document.querySelectorAll("*");
    elements.forEach((element) => {
        const randomTextColor = getRandomColor();
        const randomBorderColor = getRandomColor();
        element.style.transition = "color 5s, border-color 5s, text-shadow 5s, box-shadow 5s";
        element.style.color = randomTextColor;
        element.style.textShadow = "3px 3px 1px " + randomBorderColor;
        element.style.boxShadow = "0 0 10px "+randomBorderColor;
        element.style.borderColor = randomBorderColor;
        element.classList.add("shaky");
    });
}

function getRandomColor() {
    const letters = "0123456789ABCEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

pingWebSocket();
