const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.towers = [[3,2,1],[],[]];
  }

  promptMove(makeMove, checkGameOver) {
    console.log(this.towers);
    reader.question("What tower would you like to move from? ", function(moveFromTower) {
      reader.question("What tower would you like to move to? ", function(moveToTower) {
        reader.close();
        makeMove([parseInt(moveFromTower), parseInt(moveToTower)]);
        let gameOver = checkGameOver();
        if (gameOver) {
          console.log("You won");
        } else {
          this.promptMove(makeMove, checkGameOver);
        }
      });
    });
  }

  checkGameOver() {
    this.towers[2].length === 3;
  }

  makeMove(coordinates, callback) {
    let fromIndex = coordinates[0];
    let toIndex = coordinates[1];
    let addMe = this.towers[fromIndex].pop();
    this.towers[toIndex].push(addMe);
    console.log(this.towers);
  }
}
module.exports = Game;

let ourGame = new Game();
let theGame = ourGame.promptMove(ourGame.makeMove.bind(ourGame), ourGame.checkGameOver.bind(ourGame));
