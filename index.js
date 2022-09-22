let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeStartScore = 0
let guestStartScore = 0

function home1Point() {
    homeStartScore += + 1
    homeScore.textContent = homeStartScore
}
function home2Point() {
    homeStartScore += +2
    homeScore.textContent = homeStartScore
}
function home3Point() {
    homeStartScore += + 3
    homeScore.textContent = homeStartScore
}
function guest1Point() {
    guestStartScore += +1
    guestScore.textContent = guestStartScore
}
function guest2Point() {
    guestStartScore += +2
    guestScore.textContent = guestStartScore
}
function guest3Point() {
    guestStartScore += +3
    guestScore.textContent = guestStartScore
}

function resetScore() {
    homeStartScore = 0
    homeScore.textContent = homeStartScore
    guestStartScore = 0
    guestScore.textContent = guestStartScore
}