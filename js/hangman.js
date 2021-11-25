const word = ["s", "n", "a", "k", "e"]
const wordToGuess = ["_", "_", "_", "_", "_"]

let wordGuess = []
let wrongGuesses = 0
let won = false

window.addEventListener("load", () => {
    setClickListener("btnA", "A")
    setClickListener("btnB", "B")
    setClickListener("btnC", "C")
    setClickListener("btnD", "D")
    setClickListener("btnE", "E")
    setClickListener("btnF", "F")
    setClickListener("btnG", "G")
    setClickListener("btnH", "H")
    setClickListener("btnI", "I")
    setClickListener("btnJ", "J")
    setClickListener("btnK", "K")
    setClickListener("btnL", "L")
    setClickListener("btnM", "M")
    setClickListener("btnN", "N")
    setClickListener("btnO", "O")
    setClickListener("btnP", "P")
    setClickListener("btnQ", "Q")
    setClickListener("btnR", "R")
    setClickListener("btnS", "S")
    setClickListener("btnT", "T")
    setClickListener("btnU", "U")
    setClickListener("btnV", "V")
    setClickListener("btnW", "W")
    setClickListener("btnX", "X")
    setClickListener("btnY", "Y")
    setClickListener("btnZ", "Z")
    setClickListener("btnAE", "Æ")
    setClickListener("btnOE", "Ø")
    setClickListener("btnAA", "Å")
})


const setClickListener = (btnName, letterToGuess) => {
    document.getElementById(btnName).addEventListener("click", () => {
        addLetter(letterToGuess)
        document.getElementById(btnName).disabled = true
    })
    updateWordToGuess()
}

const updateWordToGuess = () => {
    document.getElementById("wordToGuess").innerHTML = wordToGuess
    if (wordToGuess.toString() == word.toString()) {
        alert("Du vant")
        won = true
    }
}

const addLetter = (letter) => {
    letter = letter.toLowerCase()
    if(wrongGuesses < 7 && !won) {
        if (word.includes(letter)) {
            let index = word.indexOf(letter)
            wordToGuess[index] = letter
            updateWordToGuess()
        } else {
            wrongGuesses++
            updateImage()
        }
    } else {
        alert("Spillet er over!")
    }


}

const updateImage = () => {
    document.getElementById("hangmanImage").setAttribute("src", "pictures/hangman/" + wrongGuesses + ".png")
}