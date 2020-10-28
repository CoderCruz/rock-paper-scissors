let amount = 0
const pvpButton = document.getElementById('pvp')
const playButton = document.getElementById('again')
const gameScreen = document.getElementById("game-screen")
const playerOneChoices = document.getElementById("player1-choice")
const playerTwoChoices = document.getElementById("player2-choice")
let turn = 0
let playerOnePick = null
let playerTwoPick = null
const rockPaperScizzors = [
    {
        name: 'rock',
        win: 'scissors',
        lose: 'paper',
        image: './images/rock.jpg'
    },
    {
        name:'paper',
        win: 'rock',
        lose: 'scissors',
        image: './images/paper.jpg'
    },
    {
        name:'scissors',
        win: 'paper',
        lose: 'rock',
        image: './images/scizzor.jpg'
    }
]

const storeUserChoice = (obj) => {
    turn++
    if(turn === 1 && turn < 2) {
        playerOnePick = obj
        console.log(`Player one has picked ${playerOnePick}`)
    } else if(turn === 2) {
        playerTwoPick = obj
        console.log(`Player two has picked ${playerTwoPick}`)
        winner(playerOnePick, playerTwoPick)
    }

}

const winner = (playerOne, playerTwo) => {
    if(playerOne !== null && playerTwo !== null) {
        console.log(playerOne)
        console.log(playerTwo)

        if(playerTwo.name === playerOne.win) {
            alert('player one wins')
        } else if(playerTwo.name === playerOne.lose) {
            alert('player two wins')
        } else {
            alert('its a tie')
        }
    }
}

const createUserOptions = (arr) => {
    arr.map(choice => {
        amount++
        if(amount <= 3) {
            let choiceImage = document.createElement('img')
            choiceImage.className = "player-choices"
            choiceImage.src = choice.image
            choiceImage.addEventListener('click', () => {
                storeUserChoice(choice)
            })
            playerOneChoices.appendChild(choiceImage)
            let choiceImage2 = document.createElement('img')
            choiceImage2.className = "player-choices"
            choiceImage2.src = choice.image
            choiceImage2.addEventListener('click', () => {
                storeUserChoice(choice)
            })
            playerTwoChoices.appendChild(choiceImage2)
        }
    })
}

pvpButton.addEventListener('click', () => {
    createUserOptions(rockPaperScizzors)
})

playButton.addEventListener('click', () => {
    location.reload();
    return false
})