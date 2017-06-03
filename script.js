document.getElementById("header").innerHTML = "This Changes About Me's Forever";

document.body.style.backgroundColor = "red";

document.getElementById("header").style.backgroundColor = "blue";

document.getElementById("nickname").innerHTML = "prefer Jason";

document.getElementById("favorites").innerHTML = "Learning to Code";

document.getElementById("hometown").innerHTML = "Glastonbury";

var image = document.createElement("img")
image.src = "tiger.png";

document.body.appendChild(image);

var el = document.createElement("div")
el.innerHTML = "<p>Hello World!!</p>";

document.body.appendChild(el);