const board = document.querySelector('.board')
if(currentStage === 1)
   board.style.width = "520px"
else if(currentStage === 2)
   board.style.width = "480px"
board.style.gridTemplateRows = `repeat(${ROWS}, 1fr)`
board.style.gridTemplateColumns = `repeat(${COLUMNS}, 1fr)`
board.style.backgroundRepeat = 'no-repeat'

const bgSize_randomKeywords = [
   '300px 200px', '300px 300px', '300px 420px',
   '420px 250px', '420px 300px', '200px 200px',
   'cover'
]

const bgPosition_randomKeywords = [
   'left top', 'left center', 'left bottom',
   'right center', 'right bottom', 'right top',
   'center'
]

let randomNum = () => Math.floor(Math.random() * 7)
board.style.backgroundSize = bgSize_randomKeywords[randomNum()]
board.style.backgroundPosition = bgPosition_randomKeywords[randomNum()]

const questionImageData = [
   { imgSrc: "../../images/background_image/1.jpg", name: "chị ngã em nâng" },
   { imgSrc: "../../images/background_image/2.jpg", name: "ăn cháo đá bát" },
   { imgSrc: "../../images/background_image/3.jpg", name: "ếch ngồi đáy giếng" },
   { imgSrc: "../../images/background_image/4.jpg", name: "cá lớn nuốt cá bé" },
   { imgSrc: "../../images/background_image/5.jpg", name: "giận cá chém thớt" },
   { imgSrc: "../../images/background_image/6.jpg", name: "lá lành đùm lá rách" },
   { imgSrc: "../../images/background_image/7.jpg", name: "thêm dầu vào lửa" },
]

let randomImage = questionImageData[Math.floor(Math.random() * 6)]
board.style.backgroundImage = `url(../../images/background_image/${randomImage.imgSrc}`

const restartButton = document.querySelector('.restart-btn')
const winningContinueButton = document.querySelector('.winning-continue-btn')

const resultScreen = document.querySelector('.result-screen')
const startScreen = document.querySelector('.start-screen')
const startButton = document.querySelector('.start-btn')

const winningMessage = document.querySelector('.winning-message')

const secondCountDown = document.querySelector('.countdown')
secondCountDown.textContent = parseInt(TIME_REMAINING)

// question + answer question
const showQuestionButton = document.querySelector('.answer-question-btn')
const questionPopUpScreen = document.querySelector('.question-pop-up')
const answerQuestionInput = document.querySelector('.answer-input')
const submitQuestionButton = document.querySelector('.submit-question-btn')
const cancelSubmitQuestionButton = document.querySelector('.cancel-btn')

// display point per stage
const pointPerStage = document.querySelector('.point-per-stage')


// start timing
let timer = null
let startingTime = TIME_REMAINING

// POINT
let point = 0

// start game
startButton.addEventListener('click', () => {
   startScreen.style.display = 'none'
   timer = setInterval(() => {
      startingTime--
      secondCountDown.textContent = startingTime
      if (startingTime == 0) {
         resultScreen.style.display = 'flex'
         winningMessage.innerHTML = `Hết thời gian`
         document.querySelector('.store-point-btn').style.display = 'none'
         winningContinueButton.style.display = 'none'
         clearInterval(timer)
         restartButton.addEventListener('click', () => {
            startingTime = TIME_REMAINING
            secondCountDown.textContent = startingTime
            startScreen.style.display = 'flex'
            resultScreen.style.display = 'none'
            questionPopUpScreen.style.display = 'none'
            restart()
         })
      }
   }, 1000)
})


// Question Box

// remove accents
function removeAccents(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}

showQuestionButton.addEventListener('click', function () {
   questionPopUpScreen.style.display = 'flex'
})

cancelSubmitQuestionButton.addEventListener('click', function () {
   answerQuestionInput.value = ""
   questionPopUpScreen.style.display = 'none'
})

submitQuestionButton.addEventListener('click', function () {
   questionPopUpScreen.style.display = 'none'
   var s = removeAccents(answerQuestionInput.value)
   var arr = s.split(" ")
   var result = "", temp
   for (var i = 0; i < arr.length; i++) {
      temp = arr[i].trim().toLowerCase()
      if (temp != "") {
         temp = temp.substr(0, 1).toLowerCase() + temp.substr(1);
         result += temp + " "
      }
   }
   answerQuestionInput.value = result.trim()
   if (answerQuestionInput.value === removeAccents(randomImage.name))
      WINNING()
   answerQuestionInput.value = ""
})


// CONTINUE BUTTON CHECK
continueButton.removeEventListener('click', openNextStage)
continueButton.style.cursor = 'not-allowed'

// RESULT SCREEN - WinningContinueButton dont show off if not win
winningContinueButton.style.display = 'none'


/////////LOGIC GAME//////////////
const shuffleCards = () => {
   const cardData = card_data()
   // cardData.sort(() => Math.random() - 0.5)
   for (let i = cardData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = cardData[i]
      cardData[i] = cardData[j]
      cardData[j] = temp
   }
   return cardData
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

      if (localStorage.getItem('background') === `url('images/index_background/2.png')` || localStorage.getItem('background') == null)
         backFace.src = "../../images/card_backface2.jpg"
      else if (localStorage.getItem('background') === `url('images/index_background/1.png')`)
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
            setTimeout(() => item.style.opacity = '0', 500)
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
         WINNING()
      }
   }, 1000)
}

function WINNING() {
   clearInterval(timer)
   resultScreen.style.display = 'flex'

   // RESULT SCREEN => check display button when reaching last stage
   if (currentStage < 3) {
      winningContinueButton.style.display = 'block'
      winningContinueButton.addEventListener('click', () => {
         window.open(`stage${currentStage + 1}.html`, "_self")
      })
   }

   restartButton.style.display = 'block'
   restartButton.addEventListener('click', () => {
      startingTime = TIME_REMAINING
      secondCountDown.textContent = startingTime
      restart()
   })

   // if win => show WinningContinueButton 
   //           rightArrow button enable to click
   if (currentStage < 3) {
      winningContinueButton.style.display = 'block'
      continueButton.addEventListener('click', openNextStage)
      continueButton.style.cursor = 'pointer'
   }

   // calculate point
   point = 20 + startingTime

   // set point per stage in localStorage
   localStorage.setItem(`level2_stage${currentStage}_score`, point)

   // display point per stage
   let stored_point1 = parseInt(JSON.parse(localStorage.getItem(`level2_stage1_score`))) || 0
   let stored_point2 = parseInt(JSON.parse(localStorage.getItem(`level2_stage2_score`))) || 0
   let stored_point3 = parseInt(JSON.parse(localStorage.getItem(`level2_stage3_score`))) || 0
   let total_point = 0
   if(currentStage == 1)
      total_point = stored_point1
   else if(currentStage == 2)
      total_point = stored_point1 + stored_point2
   else if (currentStage == 3) {
      total_point = stored_point1 + stored_point2 + stored_point3

      resultScreen_storePointButton.style.display = 'block'

      const returnMenuButton = document.createElement('button')
      returnMenuButton.classList = 'return-menu-btn'
      returnMenuButton.textContent = 'Về lại Menu'
      resultScreen.append(returnMenuButton)
      returnMenuButton.addEventListener('click', () => {
         window.open('../../index.html', "_self")
      })

      const storingPointDiv = document.createElement('div')
      storingPointDiv.classList = 'storing-point-div'

      const playerNameInput = document.createElement('input')
      playerNameInput.classList = 'player-name-input'
      playerNameInput.setAttribute('placeholder', 'Nhập vào tên của bạn')

      const storingPointButton = document.createElement('button')
      storingPointButton.classList = 'storing-point-btn'
      storingPointButton.innerHTML = `<i class="far fa-check-circle"></i>`

      const cancelStoringPointButton = document.createElement('button')
      cancelStoringPointButton.classList = 'cancel-storing-point-btn'
      cancelStoringPointButton.innerHTML = `<i class=" far fa-times-circle"></i>`

      storingPointDiv.append(playerNameInput)
      storingPointDiv.append(storingPointButton)
      storingPointDiv.append(cancelStoringPointButton)
      document.querySelector('body').append(storingPointDiv)

      resultScreen_storePointButton.addEventListener('click', () => {
         resultScreen.style.display = 'none'
         storingPointDiv.style.display = 'flex'
      })

      cancelStoringPointButton.addEventListener('click', () => {
         storingPointDiv.style.display = 'none'
         resultScreen.style.display = 'flex'
      })


      /// Storing Points
      storingPointButton.addEventListener('click', () => {
         const stage1_score = parseInt(JSON.parse(localStorage.getItem('level2_stage1_score')))
         const stage2_score = parseInt(JSON.parse(localStorage.getItem('level2_stage2_score')))
         const stage3_score = parseInt(JSON.parse(localStorage.getItem('level2_stage3_score')))
         const player_score = {
            score: stage1_score + stage2_score + stage3_score,
            name: playerNameInput.value
         }
         highScoresLevel2.push(player_score)
         highScoresLevel2.sort((a, b) => b.score - a.score)
         highScoresLevel2.splice(10)
         localStorage.setItem('highScoresLevel2', JSON.stringify(highScoresLevel2))
         storingPointDiv.style.display = 'none'
         restartButton.style.display = 'none'
         resultScreen_storePointButton.style.display = 'none'
         resultScreen.style.display = 'flex'
         winningMessage.innerHTML = `Lưu điểm thành công.<br>Tổng điểm: ${player_score.score}`
      })
   }
   winningMessage.innerHTML = `Hoàn thành<br>Điểm vòng ${currentStage}: ${point}`
   pointPerStage.innerHTML += `Tổng:${total_point}`
}


///////////////STORING SCORE////////////////

// create array to store scores
const highScoresLevel2 = JSON.parse(localStorage.getItem('highScoresLevel2')) || []

// Show storing-point button when reach last stage


// storing point
const resultScreen_storePointButton = document.querySelector('.store-point-btn')
resultScreen_storePointButton.style.display = 'none'


function restart() {
   let cardData = shuffleCards()
   let faces = document.querySelectorAll('.front-face')
   let cards = document.querySelectorAll('.card')
   cardData.forEach((item, index) => {
      cards[index].classList.remove('toggleCard')
      cards[index].style.pointerEvents = 'all'
      cards[index].setAttribute('name', item.name)
      cards[index].style.opacity = '1'
      faces[index].src = item.imgSrc
   })
   continueButton.style.display = 'block'
   resultScreen.style.display = 'none'
   startScreen.style.display = 'flex'
   randomImage = questionImageData[Math.floor(Math.random() * 6)]
   board.style.backgroundImage = `url(../../images/background_image/${randomImage.imgSrc}`
   board.style.backgroundSize = `${bgSize_randomKeywords[randomNum()]}`
   board.style.backgroundPosition = `${bgPosition_randomKeywords[randomNum()]}`
   clearInterval(timer)
}

