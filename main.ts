/* Copyright (c) 2020 MTHS All rights reserved
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
  // setup
  loopCounter = 4
  while (loopCounter >= 0) {
    basic.pause(1000)
    basic.showNumber(loopCounter)

    // if loopCounter === 4 show 4 blue Neopixels
    if (loopCounter === 4) {
      neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
      neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
      neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
      neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
      neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
      neopixelStrip.show()
    }

    // if loopCounter === 3 light up 3 blue Neopixels
    if (loopCounter === 3) {
      neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
      neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
      neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
      neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
      neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
      neopixelStrip.show()
    }

    // if loopCounter === 2 light up 2 blue Neopixels
    if (loopCounter === 2) {
      neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
      neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
      neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
      neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
      neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
      neopixelStrip.show()
    }

    // if loopCounter === 1 light up 1 blue Neopixels
    if (loopCounter === 1) {
      neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
      neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
      neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
      neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
      neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
      neopixelStrip.show()
    }

    // if loopCounter === 0 light up 0 blue Neopixels
    if (loopCounter === 0) {
      neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
      neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
      neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
      neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
      neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
      neopixelStrip.show()
    }
    loopCounter = loopCounter - 1
  } 
  })
