const continueButton = document.querySelector('.continue-btn')
const returnButton = document.querySelector('.return-btn')
const returnMenuButton = document.querySelector('.return-menu')

function openNextStage() {
   window.open(`stage${currentStage + 1}.html`, "_self")
}

function openPreviousStage() {
   window.open(`stage${currentStage - 1}.html`, "_self")
}

returnMenuButton.addEventListener('click', () => {
   window.open(`../../index.html`, "_self")
})

if (currentStage == 3) {
   continueButton.style.display = "none"
} else {
   continueButton.addEventListener('click', openNextStage)
}

if (currentStage != 1) {
   returnButton.addEventListener('click', openPreviousStage)
} else {
   returnButton.style.display = 'none'
}


// Background color in game stage => relate to color scheme
const colors = [
   { linearGradient: `#3e5151, #decba4` },
   { linearGradient: `#38ef7d, #11998e` },
   { linearGradient: `#4ac29a, #bdfff3` },
]
if (localStorage.getItem('background') === `url('images/index_background/2.png')` ||
   localStorage.getItem('background') === null) {
   document.body.style.background = `linear-gradient(to right, ${colors[1].linearGradient})`
   document.body.style.background = `-webkit-linear-gradient(to right, ${colors[1].linearGradient})`
}
else if (localStorage.getItem('background') === `url('images/index_background/1.png')`) {
   document.body.style.background = `linear-gradient(to right, ${colors[0].linearGradient})`
   document.body.style.background = `-webkit-linear-gradient(to right, ${colors[0].linearGradient})`
}
else {
   document.body.style.background = `linear-gradient(to right, ${colors[2].linearGradient})`
   document.body.style.background = `-webkit-linear-gradient(to right, ${colors[2].linearGradient})`
}
