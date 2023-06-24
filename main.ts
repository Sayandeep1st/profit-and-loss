let LOSS = 0
let PROFIT = 0
let CP = game.askForNumber("CP")
let SP = game.askForNumber("SP")
if (SP > CP) {
    PROFIT = SP - CP
    game.splash(" Profit = " + PROFIT)
} else if (CP > SP) {
    LOSS = CP - SP
    game.splash("LOSS = " + LOSS)
} else {
    game.splash("NO PROFIT NO LOSS")
}
