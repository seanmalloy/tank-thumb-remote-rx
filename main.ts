radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        ContinuousServo.spin_other_way_with_speed(AnalogPin.P13, speed)
    } else if (receivedNumber == 3) {
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P13, speed)
    } else if (receivedNumber == 2) {
        ContinuousServo.turn_off_motor(DigitalPin.P13)
    }
    if (receivedNumber == 4) {
        ContinuousServo.spin_one_way_with_speed(AnalogPin.P14, speed)
    } else if (receivedNumber == 6) {
        ContinuousServo.spin_other_way_with_speed(AnalogPin.P14, speed)
    } else if (receivedNumber == 5) {
        ContinuousServo.turn_off_motor(DigitalPin.P14)
    }
    if (receivedNumber == 7) {
        pins.servoWritePin(AnalogPin.P15, angleOpen)
    } else if (receivedNumber == 8) {
        pins.servoWritePin(AnalogPin.P15, angleClosed)
    }
    if (receivedNumber == 9) {
        speed += -10
        speed = Math.constrain(speed, 0, 100)
    } else if (receivedNumber == 10) {
        speed += 10
        speed = Math.constrain(speed, 0, 100)
    }
})
let strip: neopixel.Strip = null
let angleClosed = 0
let angleOpen = 0
let speed = 0
radio.setGroup(2)
speed = 100
angleOpen += 105
angleClosed += 135
pins.servoWritePin(AnalogPin.P15, angleOpen)
control.inBackground(function () {
    music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
    strip.clear()
    strip.setBrightness(32)
    strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
    while (true) {
        strip.show()
        basic.pause(125)
        strip.rotate(-1)
    }
})
