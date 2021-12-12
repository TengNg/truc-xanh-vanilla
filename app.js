const showGuideButton = document.querySelector('.show-guide-btn')
const guideScreen = document.querySelector('.guide-screen')
const cancelButton = document.querySelector('.cancel-btn')
const title = document.querySelector('.title')

showGuideButton.addEventListener('click', () => {
   guideScreen.style.display = 'flex'
})

cancelButton.addEventListener('click', () => {
   guideScreen.style.display = 'none'   
})


const themeButton = document.querySelector('.theme-btn')
const chooseThemeScreen = document.querySelector('.choose-theme-screen')
const cancelChoosingThemeButton = document.querySelector('.cancel-choosing-theme-btn')
themeButton.addEventListener('click', () => {
   chooseThemeScreen.style.display = 'flex'
})

cancelChoosingThemeButton.addEventListener('click', () => {
   chooseThemeScreen.style.display = 'none'
})

const links = document.querySelectorAll('.stage > a')
function theme1() {
   document.body.style.background = `url('images/index_background/1.png')`;
   document.body.style.backgroundSize = 'cover'
   document.body.style.backgroundPosition = 'center'
   document.body.style.backgroundRepeat = 'no-repeat'
   links.forEach(item => item.style.filter = 'invert(85%)')
   title.style.filter = 'invert(80%)'
   localStorage.setItem('background', `url('images/index_background/1.png')`)
   localStorage.setItem('backgroundSize', `cover`)
   localStorage.setItem('backgroundPosition', `center`)
   localStorage.setItem('backgroundRepeat', `no-repeat`)
   localStorage.setItem('filter', `invert(85%)`)
   themeButton.style.color = 'rgb(77, 18, 126)'
   themeButton.style.backgroundColor = 'hsl(272, 71%, 83%)'
}
function theme2() {
   document.body.style.background = `url('images/index_background/2.png')`;
   document.body.style.backgroundSize = 'cover'
   document.body.style.backgroundPosition = 'center'
   document.body.style.backgroundRepeat = 'no-repeat'
   links.forEach(item => item.style.filter = 'none')
   title.style.filter = 'none'
   localStorage.setItem('background', `url('images/index_background/2.png')`)
   localStorage.setItem('backgroundSize', `cover`)
   localStorage.setItem('backgroundPosition', `center`)
   localStorage.setItem('backgroundRepeat', `no-repeat`)
   localStorage.setItem('filter', `none`)
   themeButton.style.backgroundColor = 'rgb(230, 230, 230)'
   themeButton.style.color = '#1DAD38'
}
function theme3() {
   document.body.style.background = `url('images/index_background/3.png')`;
   document.body.style.backgroundSize = 'cover'
   document.body.style.backgroundPosition = 'center'
   document.body.style.backgroundRepeat = 'no-repeat'
   links.forEach(item => item.style.filter = 'contrast(50%) brightness(1.4)')
   title.style.filter = 'contrast(50%) brightness(1.4)'
   localStorage.setItem('background', `url('images/index_background/3.png')`)
   localStorage.setItem('backgroundSize', `cover`)
   localStorage.setItem('backgroundPosition', `center`)
   localStorage.setItem('backgroundRepeat', `no-repeat`)
   localStorage.setItem('filter', `contrast(50%) brightness(1.4)`)
   themeButton.style.color = '#6CECB1'
   themeButton.style.backgroundColor = 'white'
}

document.body.style.background = localStorage.getItem('background')
document.body.style.backgroundSize = localStorage.getItem('backgroundSize')
document.body.style.backgroundPosition = localStorage.getItem('backgroundPosition')
document.body.style.backgroundRepeat = localStorage.getItem('backgroundRepeat')
links.forEach(item => item.style.filter = localStorage.getItem('filter'))
title.style.filter = localStorage.getItem('filter')



// change theme-button color
if (localStorage.getItem('background') === `url('images/index_background/1.png')`) {
   themeButton.style.color = 'rgb(77, 18, 126)'
   themeButton.style.backgroundColor = 'hsl(272, 71%, 83%)'
} 

if (localStorage.getItem('background') === `url('images/index_background/2.png')`) {
   themeButton.style.backgroundColor = 'rgb(230, 230, 230)'
   themeButton.style.color = '#1DAD38'
} 

if (localStorage.getItem('background') === `url('images/index_background/3.png')`) {
   themeButton.style.color = '#6CECB1'
   themeButton.style.backgroundColor = 'white'
}