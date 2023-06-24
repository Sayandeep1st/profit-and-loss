LOSS = 0
PROFIT = 0
CP = 0
SP = 0
if SP < CP:
    PROFIT = SP - CP
    game.splash("Profit=" + str(PROFIT))
elif CP < SP:
    LOSS = CP - SP
    game.splash("LOSS=" + str(LOSS))
else:
    game.splash("NO PROFIT NO LOSS")