var button = document.createElement("button");
document.body.appendChild(button);
button.innerHTML = "CHANGE IMAGE";



button.addEventListener('click', printHello());

function changeImage() {
    var imageSrc = document.getElementById("image").getAttribute("src");
    var currentImageNumber = imageSrc.substring(imageSrc.lastIndexOf("/") + 1, imageSrc.lastIndexOf("/") + 2);
    var newImage = "/frames/" + (currentImageNumber++) + ".gif";
    document.getElementById("image").setAttribute("src", newImage);
    document.getElementById("result").innerHTML = newImage;
}
//document.querySelector(button).addEventListener('click', changeImage());



