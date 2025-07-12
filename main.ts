basic.showIcon(IconNames.Heart)
let Speed = 0
basic.forever(function () {
    if (Speed == 100) {
        Speed = 0
    }
    cuteBot.motors(Speed, Speed)
    Speed += 1
})
