var modal = document.getElementById("myModal");
var button = document.getElementById ("Test");
var span = document.getElementById ("close")[0];

button.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Just reach to the final version
