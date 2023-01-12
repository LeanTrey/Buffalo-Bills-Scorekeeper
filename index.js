let homeScore = 0
let awayScore = 0
let homeEl = document.getElementById("home-el")
let awayEl = document.getElementById("away-el")
//Home Score
function homeSaf() {
    homeEl.textContent = homeScore += 2
}
function homeField() {
    homeEl.textContent = homeScore += 3
}
function homeTouch() {
    homeEl.textContent = homeScore += 6 
}
function homeXp() {
    homeEl.textContent = homeScore += 1
}
//Away Score
function awaySaf() {
    awayEl.textContent = awayScore += 2
}
function awayField() {
    awayEl.textContent = awayScore += 3
}
function awayTouch() {
    awayEl.textContent = awayScore += 6 
}
function awayXp() {
    awayEl.textContent = awayScore += 1
}