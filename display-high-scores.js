const highScoresList_Level2 = document.querySelector('.highScoresList_Level2')
const highScoresLevel2 = JSON.parse(localStorage.getItem('highScoresLevel2')) || []

highScoresList_Level2.innerHTML =
   highScoresLevel2
      .map(item => {
         return `<li class='highScores_level2'>${item.name} : ${item.score}</li>`
      }).join('')



const highScoresList_Level3 = document.querySelector('.highScoresList_Level3')
const highScoresLevel3 = JSON.parse(localStorage.getItem('highScoresLevel3')) || []

highScoresList_Level3.innerHTML =
   highScoresLevel3
      .map(item => {
         return `<li class='highScores_level3'>${item.name} : ${item.score}</li>`
      }).join('')
