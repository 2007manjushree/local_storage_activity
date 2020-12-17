var score = 0;

function update_score() {
    score ++;
    document.getElementById("score").innerHTML = score;
}

function save_score() {
    localStorage.setItem("Score", score);
}

function next_page() {
    window.location = "activity_2.html";
}