let win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const title = document.querySelector('.title-text')

let step = 'crosses'
function whoStep() {
  if (step === 'circle') {
    step = 'crosses'
  }
  else {
    step = 'circle'
  }
}
whoStep()

function winner(arr) {
  for (let arrElem of arr) {
    if (item[arrElem[0]].classList.contains('circle') && item[arrElem[1]].classList.contains('circle') && item[arrElem[2]].classList.contains('circle')) {
      title.textContent = 'circle winner'
      console.log('cirlce win');
      stopGame(item)
    }
    if (item[arrElem[0]].classList.contains('crosses') && item[arrElem[1]].classList.contains('crosses') && item[arrElem[2]].classList.contains('crosses')) {
      console.log('crosses win')
      title.textContent = 'crosses winner'
      stopGame(item)
    }

  }
}

let item = document.querySelectorAll('.item')
item.forEach((elem) => {
  elem.addEventListener('click', addElem)
})

function addElem(elem) {
  if (!elem.target.classList.contains('circle') && !elem.target.classList.contains('crosses')) {
    elem.target.classList.add(step)
  }
  whoStep()
  winner(win)
}


function stopGame(item) {
  item.forEach((elem) => {
    elem.removeEventListener('click', addElem)
  })
}
