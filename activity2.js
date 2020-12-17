var score = localStorage.getItem("Score");

function get_score() {
    document.getElementById("updated_score").innerHTML =score;
}

function back() {
    window.location.replace("index.html");
}
