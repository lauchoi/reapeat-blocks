input.onButtonPressed(Button.A, function () {
    rope += -1
})
input.onButtonPressed(Button.B, function () {
    rope += 1
})
let rope = 2
basic.forever(function () {
    basic.clearScreen()
    led.plot(Math.round(rope), 2)
    if (rope < 0) {
        basic.showString("A WINS")
    } else {
        basic.showString("B WINS")
    }
})
