// create Board
const board = document.querySelector('.board')
board.style.gridTemplateRows = `repeat(${ROWS}, ${CARD_SIZE}px)`
board.style.gridTemplateColumns = `repeat(${COLUMNS}, ${CARD_SIZE}px)`

const restartButton = document.querySelector('.restart-btn')
const winningContinueButton = document.querySelector('.winning-continue-btn')

const resultScreen = document.querySelector('.result-screen')

const winningMessage = document.querySelector('.winning-message')

const secondCountDown = document.querySelector('.countdown')

const shuffleCards = () => {
   const cardData = card_data()
   // cardData.sort(() => Math.random() - 0.5)
   for(let i = cardData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = cardData[i]
      cardData[i] = cardData[j]
      cardData[j] = temp
   }
   return cardData
}

// display arrow button
if (currentStage < 3) {
   winningContinueButton.addEventListener('click', () => {
      window.open(`stage${currentStage + 1}.html`, "_self")
   })
} else {
   winningContinueButton.style.display = 'none'

   // create return menu button
   const returnMenuButton = document.createElement('button')
   returnMenuButton.classList = 'return-menu-btn'
   returnMenuButton.textContent = 'Về menu'
   resultScreen.appendChild(returnMenuButton)
   returnMenuButton.addEventListener('click', () => {
      window.open(`../../index.html`, "_self")
   })
}

createCard()

function createCard() {
   const cardData = shuffleCards()
   cardData.forEach(item => {
      const cardDiv = document.createElement('div')
      const backFace = document.createElement('img')
      const frontFace = document.createElement('img')

      cardDiv.classList = 'card'
      frontFace.classList = 'front-face'
      backFace.classList = 'back-face'

      if(localStorage.getItem('background') === `url('images/index_background/2.png')` || localStorage.getItem('background') == null)
         backFace.src = "../../images/card_backface2.jpg"
      else if(localStorage.getItem('background') === `url('images/index_background/1.png')`)
         backFace.src = "../../images/card_backface1.jpg"
      else
         backFace.src = "../../images/card_backface3.jpg"

      frontFace.src = item.imgSrc
      cardDiv.setAttribute('name', item.name)

      board.append(cardDiv)
      cardDiv.append(frontFace)
      cardDiv.append(backFace)

      cardDiv.addEventListener('click', (e) => {
         cardDiv.classList.add('toggleCard')
         checkCard(e)
      })
   })
}

function checkCard(e) {
   const clickedCard = e.currentTarget
   clickedCard.classList.add('flipped')
   let flippedCard = document.querySelectorAll('.flipped')
   let toggledCard = document.querySelectorAll('.toggleCard')

   if (flippedCard.length === 2) {
      if (flippedCard[0].getAttribute('name') === flippedCard[1].getAttribute('name')) {
         flippedCard.forEach(item => {
            item.classList.remove('flipped')
            item.style.pointerEvents = 'none'
         })
      }
      else {
         flippedCard.forEach(item => {
            item.classList.remove('flipped')
            setTimeout(() => item.classList.remove('toggleCard'), 500)
         })
      }
   }

   // check if full board
   setTimeout(() => {
      if (toggledCard.length === BOARD_SIZE) {
         resultScreen.style.display = 'flex'
         winningMessage.textContent = 'Hoàn thành'
         restartButton.style.display = 'block'
         restartButton.addEventListener('click', () => {
            restart()
         })
      }
   }, 1000)
}

function restart() {
   let cardData = shuffleCards()
   let faces = document.querySelectorAll('.front-face')
   let cards = document.querySelectorAll('.card')
   cardData.forEach((item, index) => {
      cards[index].classList.remove('toggleCard')
      cards[index].style.pointerEvents = 'all'
      cards[index].setAttribute('name', item.name)
      faces[index].src = item.imgSrc
   })
   continueButton.style.display = 'block'
   resultScreen.style.display = 'none'
}
