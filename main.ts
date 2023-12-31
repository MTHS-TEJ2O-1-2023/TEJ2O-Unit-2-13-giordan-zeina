/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Giordan Zeina
 * Created on: Oct 2023
 * This program when you press the "A" button it counts down from 4 to 0
 * at each number, you have that many Neopixels light up
*/

// variables
let loopCounter = 0
let neopixelStrip: neopixel.Strip = null

// cleanup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

// press "A" button
input.onButtonPressed(Button.A, function () {      
  neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
  neopixelStrip.show()

  // setup
  loopCounter = 4
  while (loopCounter >= 0) {
    basic.pause(1000)
    neopixelStrip.setPixelColor(loopCounter, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    basic.showNumber(loopCounter)
    loopCounter = loopCounter - 1
    pause(500)
  }
  basic.showIcon(IconNames.Happy)
})
