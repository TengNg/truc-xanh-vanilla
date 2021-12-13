const ROWS = 6
const COLUMNS = 8
const BOARD_SIZE = ROWS * COLUMNS

const TIME_REMAINING = 320

const currentLevel = 3
const currentStage = 3

const card_data = () => [
   { imgSrc: "../../images/fruits/apple.png", name: "apple" },
   { imgSrc: "../../images/fruits/avocado.png", name: "avocado" },
   { imgSrc: "../../images/fruits/banana.png", name: "banana" },
   { imgSrc: "../../images/fruits/cherry.png", name: "cherry" },
   { imgSrc: "../../images/fruits/grape.png", name: "grape" },
   { imgSrc: "../../images/fruits/lemon.png", name: "lemon" },
   { imgSrc: "../../images/fruits/mango.png", name: "mango" },
   { imgSrc: "../../images/fruits/orange.png", name: "orange" },
   { imgSrc: "../../images/fruits/strawberry.png", name: "strawberry" },
   { imgSrc: "../../images/fruits/watermelon.png", name: "watermelon" },
   { imgSrc: "../../images/fruits/apple.png", name: "apple" },
   { imgSrc: "../../images/fruits/avocado.png", name: "avocado" },
   { imgSrc: "../../images/fruits/banana.png", name: "banana" },
   { imgSrc: "../../images/fruits/cherry.png", name: "cherry" },
   { imgSrc: "../../images/fruits/grape.png", name: "grape" },
   { imgSrc: "../../images/fruits/lemon.png", name: "lemon" },
   { imgSrc: "../../images/fruits/mango.png", name: "mango" },
   { imgSrc: "../../images/fruits/orange.png", name: "orange" },
   { imgSrc: "../../images/fruits/strawberry.png", name: "strawberry" },
   { imgSrc: "../../images/fruits/watermelon.png", name: "watermelon" },

   { imgSrc: "../../images/potions/black_potion.png", name: "black_potion" },
   { imgSrc: "../../images/potions/blue_potion.png", name: "blue_potion" },
   { imgSrc: "../../images/potions/blue_potion2.png", name: "blue_potion2" },
   { imgSrc: "../../images/potions/blue_potion3.png", name: "blue_potion3" },
   { imgSrc: "../../images/potions/green_potion.png", name: "green_potion" },
   { imgSrc: "../../images/potions/red_potion.png", name: "red_potion" },
   { imgSrc: "../../images/potions/orange_potion.png", name: "orange_potion" },
   { imgSrc: "../../images/potions/yellow_potion.png", name: "yellow_potion" },
   { imgSrc: "../../images/potions/pink_potion.png", name: "pink_potion" },
   { imgSrc: "../../images/potions/pink_potion.png", name: "pink_potion" },
   { imgSrc: "../../images/potions/special_potion.png", name: "special_potion" },
   { imgSrc: "../../images/potions/special_potion.png", name: "special_potion" },

   { imgSrc: "../../images/potions/black_potion.png", name: "black_potion" },
   { imgSrc: "../../images/potions/blue_potion.png", name: "blue_potion" },
   { imgSrc: "../../images/potions/blue_potion2.png", name: "blue_potion2" },
   { imgSrc: "../../images/potions/blue_potion3.png", name: "blue_potion3" },
   { imgSrc: "../../images/potions/green_potion.png", name: "green_potion" },
   { imgSrc: "../../images/potions/red_potion.png", name: "red_potion" },
   { imgSrc: "../../images/potions/orange_potion.png", name: "orange_potion" },
   { imgSrc: "../../images/potions/yellow_potion.png", name: "yellow_potion" },

   { imgSrc: "../../images/gems/blue_gem.png", name: "blue_gem" },
   { imgSrc: "../../images/gems/red_gem.png", name: "red_gem" },
   { imgSrc: "../../images/gems/green_gem.png", name: "green_gem" },
   { imgSrc: "../../images/gems/white_gem.png", name: "white_gem" },
   { imgSrc: "../../images/gems/blue_gem.png", name: "blue_gem" },
   { imgSrc: "../../images/gems/red_gem.png", name: "red_gem" },
   { imgSrc: "../../images/gems/green_gem.png", name: "green_gem" },
   { imgSrc: "../../images/gems/white_gem.png", name: "white_gem" },
]
