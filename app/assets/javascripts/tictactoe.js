// Code your JavaScript / jQuery solution here
let spaces = window.document.querySelectorAll('td');
const WIN_COMBINATIONS = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]]


function player() {
  if (!this.turn) {
    return "X"
  } else if (this.turn % 2 == 0) {
    return "X"
  } else {
    return "O"
  }
}

function updateState(square) {
  if (square.innerHTML === '') {
    square.innerHTML = player()
  } else {
    return false
  }
}

function setMessage(string) {
  document.querySelector('#message').innerHTML = string
}

function checkWinner() {
  let win = 0

  WIN_COMBINATIONS.forEach(function (combo) {
    let index1 = combo[0]
    let index2 = combo[1]
    let index3 = combo[2]

    let position1 = spaces[index1].innerHTML
    let position2 = spaces[index2].innerHTML
    let position3 = spaces[index3].innerHTML

    if (position1 === "X" && position2 === "X" && position3 === "X") {
      setMessage("Player X Won!")
      return win = 1
    } else if (position1 === "O" && position2 === "O" && position3 === "O") {
      setMessage("Player O Won!")
      return win = 1
    } else {
      return false
    }
  })
  return !!win
}

function newGame() {

}


function doTurn(square) {
  if (updateState(square) === false) {
    setMessage("Please select an unoccupied squre.")
  } else {
    this.turn += 1
  }
  if (checkWinner()) {
    this.turn = 0
    spaces.forEach(function(space) {
      space.innerHTML = ''

    })
  } else {
    if (this.turn === 9) {
      setMessage('Tie game.')
      this.turn = 0
      spaces.forEach(function(space) {
        space.innerHTML = ''
      })
    }
  }
}

function attachListeners() {
    let spaces = window.document.querySelectorAll('td');

    spaces.forEach( function (space) {
      space.addEventListener('click', function (event) {
        doTurn(space)
      })
    })
}
window.onload = attachListeners()
