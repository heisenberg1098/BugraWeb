var button = document.getElementById("button");
var emoji = document.getElementById("emoji");
var login = document.getElementById("login");
var grsbtn = document.getElementById("girisbuton");
var grsinp = document.getElementById("girisinp");

button.addEventListener("click", function () {
    emoji.style.display = "none";
    login.style.display = "inline-block";
});
grsbtn.addEventListener("click", function () {
    if (grsinp.value.toLowerCase() == "her şeyi yak") {
        alert("girdin");
        event.preventDefault();
        window.location.href = "ana.html";
    }
    else {
        alert("yanlıs");
    }
});