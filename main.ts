/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Katherine
 * Created on: Mar 2026
 * This program red light green light
*/

let distance = 0
const strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    // Measureing the distance...
    distance = sonar.ping(
        DigitalPin.P0,
        DigitalPin.P0,
        PingUnit.Centimeters
    )

    // ify elesy stuffff
    if (distance < 10) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        strip.setBrightness(100)
    } else {
        // Green if 10cm or further
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        strip.setBrightness(100)
    }
})

input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    strip.show()
})