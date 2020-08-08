input.onButtonPressed(Button.A, function () {
    A버튼 += 5
})
input.onButtonPressed(Button.AB, function () {
    A버튼 = 0
    B버튼 = 0
    time = 0
    if (true) {
        pins.servoWritePin(AnalogPin.P1, 0)
    }
    if (true) {
        pins.servoWritePin(AnalogPin.P1, 180)
    }
    game.resume()
})
input.onButtonPressed(Button.B, function () {
    B버튼 += 7
})
let time = 0
let B버튼 = 0
let A버튼 = 0
A버튼 = 0
B버튼 = 0
time = 0
pins.servoWritePin(AnalogPin.P1, 0)
game.resume()
basic.forever(function () {
    if (A버튼 == 25 && B버튼 == 49) {
        pins.servoWritePin(AnalogPin.P1, 180)
        music.playTone(880, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
        music.playTone(698, music.beat(BeatFraction.Half))
        music.playTone(880, music.beat(BeatFraction.Whole))
        game.gameOver()
    }
    if (A버튼 > 25 || B버튼 > 49) {
        music.playTone(988, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(988, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(988, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(988, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        game.gameOver()
    }
    if (time >= 7) {
        music.playTone(988, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(988, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(988, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(988, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        game.gameOver()
    }
})
basic.forever(function () {
    basic.pause(1000)
    time += 1
})
