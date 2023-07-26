let correct;
let seconds = 60;
let correctAnswer = 0;
let incorrectAnswer = 0;

function getElement(id) {
    return document.getElementById(id)
}

function getRandomPrezidents() {
    return Prezidents[Math.floor(Math.random() * (Prezidents.length - 1))]
}

function main() {
    let options = [];
    const maxOptions = 3;
    while (options.length < maxOptions) {
        let coun = getRandomPrezidents();
        if (options.indexOf(coun) === -1) {
            options.push(coun);
        }
    }
    for (let i = 0; i < options.length; i++) {
        getElement(`option${i + 1}label`).innerHTML = options[i].name;
        getElement(`option${i + 1}input`).value = options[i].name;
        getElement(`option${i + 1}input`).checked = false;
    }
    correct = options[Math.round(Math.random() * (options.length - 1))];
    getElement("prezident").src = correct.Prezident;
}


function timer() {
    setTimeout(finish, seconds * 1000)
    getElement("time").innerHTML = seconds;
    let countdown = setInterval(function () {
        seconds--;
        getElement("time").textContent = seconds;
        if (seconds <= 0) {
            clearInterval(countdown);
        }
        if (seconds === 5) {
            getElement("time").style.color = "#FCFF00";
        }
    }, 1000);
}
function check() {
    let input;
    try {
        input = document.querySelector('input[name = "option"]:checked').value;
    } catch {
        return;
    }
    if (input === correct.name) {
        correctAnswer++;
        getElement("score").innerHTML = correctAnswer
    } else {
        incorrectAnswer++;
    }
    main();
}
function finish() {
    clearInterval(chekInterval);
    getElement("alert").style.display = "block";
    getElement("card").style.display = "none";
    getElement("alertscore").innerHTML = correctAnswer;
    let percentage = (correctAnswer / (correctAnswer + incorrectAnswer)) * 100;
    if (isNaN(percentage)) {
        percentage = 0;
    }
    getElement("alertaccuracy").innerHTML = `Is your result ${percentage}%`;
}

function refresh() {
    location = location;
  }


let chekInterval = setInterval(check, 50);
main();
timer()

