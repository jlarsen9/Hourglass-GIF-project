// var button = document.createElement("button");
// document.body.appendChild(button);
// button.innerHTML = "CHANGE IMAGE";


function startGif() {
    intervalId = setInterval(changeImage, 50);
}

function stopGif() {
    clearInterval(intervalId);
}

// var timeoutId;
// function startGif() {
//     setTimeout(changeImage, 300);
// }


function changeImage() {
    var imageSrc = document.getElementById("image").getAttribute("src");
    var currentImageNumber = imageSrc.substring(imageSrc.lastIndexOf("/") + 1, imageSrc.lastIndexOf("."));
    if (currentImageNumber >= 239) {
        currentImageNumber = 0;
    }
    var newImage = "/frames/" + (Number(currentImageNumber) + 1) + ".gif";
    document.getElementById("image").setAttribute("src", newImage);
    document.getElementById("result").innerHTML = newImage;
}





