// var button = document.createElement("button");
// document.body.appendChild(button);
// button.innerHTML = "CHANGE IMAGE";

// Global Variable == BAD
var startButton = document.getElementById("startButton")
startButton.addEventListener('click', startGif)
startButton.addEventListener('click', startAlert)

var stopButton = document.getElementById("stopButton")
stopButton.addEventListener('click', stopGif)

var intervalId;
function startGif() {
    intervalId = setInterval(changeImage, 50);
}

function stopGif() {
    clearInterval(intervalId);
}

function startAlert() {
    alert("The Gif is Starting!")
}

//pass it through a function, rather than declare it outside/have it floating

function changeImage() {
    //debugger;
    var imageSrc = document.getElementById("image").getAttribute("src");
    var currentImageNumber = imageSrc.substring(imageSrc.lastIndexOf("/") + 1, imageSrc.lastIndexOf("."));
    if (currentImageNumber >= 239) {
        currentImageNumber = 0;
    }
    var newImage = "/frames/" + (Number(currentImageNumber) + 1) + ".gif";
    document.getElementById("image").setAttribute("src", newImage);
    document.getElementById("result").innerHTML = newImage;
}





