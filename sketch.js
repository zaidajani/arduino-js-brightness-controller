const { Board, Led, Sensor } = require("johnny-five");
const brightness = require('brightness');
const board = new Board();

board.on("ready", () => {
  const volMeter = new Sensor({ pin: "A3", threshold: 5 });

  volMeter.on("change", (data) => {
    console.log(volMeter.fscaleTo(0, 1));
    brightness.set(volMeter.fscaleTo(0, 1));
  });
});