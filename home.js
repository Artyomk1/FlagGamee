let correct;
let seconds = 25;
let correctAnswer = 0;
let incorrectAnswer = 0;

function getElement(id){
    return document.getElementById(id)
}

function getRandomPrezidents(){
    return Prezidents [Math.floor(Math.random() * (Prezidents.length-1))]
}
function home () {
    Pre = getRandomPrezidents();
    getElement("prezident").src = Pre.Prezident;
    
}
function main() {
    let options = [];
    const max0options = 3;
    while (options.length < max0options) {
        let coun = getRandomPrezidents();
        if (options.indexOf(coun) === -1){
            options.push(coun);
        }
    }
    for (let i = 0; i < options.length; i++) {
    getElement(`option${i + 1}label`).innerHTML = options[i].name;
    getElement(`option${i + 1}label`).value = options[i].name;
    getElement(`option${i + 1}label`).checked  = false;
    }
    correct = optios[Math.round(Math.random() * (options.length - 1))]
    getElement("Prezident").src = correct.Prezidents;

}
    

function timer() {
    setTimeout(finish, seconds * 1000)
    getElement("time").innerHTML = seconds;
    let countdown = setInterval(function () {
        home();
        seconds--;
        getElement("time").textContent = seconds;
        if (seconds <= 0) {
            clearInterval(countdown);
        }
        if (seconds === 5) {
            getElement("time").style.color = "#ff0000";
        }
    }, 1000);
}
function check() {
    let input;
    try {
        input = document.querySelector('input[name = "option"]:checked').value;
    }catch {
        return;
    }
    if (input === correct.name) {
    correctAnswer++;
    getElement("score").innerHTML = correctAnswer
} else{
    incorrectAnswer++;
}
main();
}
function finish() {
    clearInterval(chekInterval);
    let percentage = (correctAnswer / (correctAnswer+incorrectAnswer)) * 100;
    if(isNaN(percentage)){
        resultForAnswers =100;
    }else{
        if(percentage>=75 && percentage <95){
            resultForAnswers = "duq cucaberel eq lav ardynq"
        }
        else if(percentage >= 95){
            resultForAnswers = "duq cucaberel eq gerazanc ardynq"
        }
    }
    getElement("alertaccuracy").innerHTML = `Քո արդյունքն է ${percentage}%`;
}
let chekInterval = setInterval(check, 50);
main();
timer()

// var randomNum = Math.floor(Math.random() * Prezident.length);

// console.log(randomNum)
