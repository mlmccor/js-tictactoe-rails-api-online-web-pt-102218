// Code your JavaScript / jQuery solution here

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
  square.innerHTML = player()
}

function setMessage(string) {
  document.querySelector('#message').innerHTML = string
}

function checkWinner() {
  let state = window.document.querySelectorAll('td')

  WIN_COMBINATIONS.forEach(function () {
    let index1 = this[0]
    let index2 = this[1]
    let index3 = this[2]

    let position1 = state[index1].innerHTML
    let position2 = state[index2].innerHTML
    let position3 = state[index3].innerHTML

    if (position1 == "X" && position2 == "X" && position3 == "X") {
      setMessage("Player X Won!")
      return true
    } else if (position1 == "O" && position2 == "O" && position3 == "O") {
      setMessage("Player O Won!")
      return true
    } else {
      return false
    }
  })
}
