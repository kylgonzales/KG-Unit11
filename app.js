var human = 0;
var computer = 0;

var humanscore = 0;
var computerscore = 0;
function askName() {
    var name = prompt("Hello, What is your name?")
    return name
}
function greetings(a) {
    alert(`Hello, How are you doing today ${a}?`)
}
greetings(askName())

function ranComputer() {  
    do {

    var r = Math.floor(Math.random() * 10) + 1

    computer = computer + r

    alert(`Computer new number is ${r}. Computer total is ${computer}.`)
 
} while( computer < 16)
}



var answer = prompt("Would you like to see your total 'y' for yes, 'n' for no")



if (answer == "y" ) {
    do {

    var r = Math.floor(Math.random() * 10) + 1

    human = human + r

    alert(`Your new number is ${r}. Your total is ${human}.`)

    
} while( human < 20)
    }
function ranHuman() {
    

if (answer == "n" ) {
    do {

    var r = Math.floor(Math.random() * 10) + 1

    human = human + r

    alert(`Your new number is ${r}`)

    
} while( human < 20)
    }
}
function winConditions() {
    
if (human > 20) {
    alert("You lost!!!")

    computerscore = computerscore + 1
}

if (computer > 16) {
    alert("You win!!!!")
    humanscore = humanscore + 1
    exit()
}

if (computer == 16){
    alert("The computer has 16 and will not draw any more cards!")

}

if (human == 20){
    alert("You have 20 cards you will not draw any more")
}
}
ranComputer()
ranHuman()
winConditions()

alert(`Computer has a score of ${computerscore}`)
alert(`You have a score of ${humanscore}`)









