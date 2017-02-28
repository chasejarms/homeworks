const HanoiGame = require("./game.js");
const HanoiView = require("./hanoi-view.js");

$( () => {
  const rootEl = $('.towers-container');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});

console.log("It's working");
