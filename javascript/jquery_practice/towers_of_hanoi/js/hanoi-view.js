class View {
  constructor(hanoiGame, $el) {
    this.hanoiGame = hanoiGame;
    this.el = $el;
    this.setUpTowers();
    this.render();
    this.clickTower();
    this.fromTower = undefined;
  }

  clickTower() {
    $('ul').on('click', (e) =>  {
      if(this.fromTower !== undefined) {
        let endTower = parseInt($(e.currentTarget).attr("pos"));
        this.hanoiGame.move(this.fromTower, endTower);
        $('li').removeClass();
        this.render();
        this.fromTower = undefined;
      }
      else {
        this.fromTower = parseInt($(e.currentTarget).attr("pos"));

      }
    });
  }



  setUpTowers(){
    let $tower = $(".towers-container");
    for(let i = 0; i < 3; i++) {
      let $ul = $("<ul>");
        $ul.attr("pos",i);
      for(let j = 0; j < 3; j++) {
        let $li = $("<li>");
        $li.attr("pos", j);
        $ul.append($li);
      }
      $tower.append($ul);
    }
  }

  render(){
    // get our game state
    let gameState = this.hanoiGame.towers;
    let $uls = $("ul"); // [ul, ul, ul]
    for(let i = 0; i < 3; i++) {
      let $currentUl = $uls.eq(i); // currentUl, jquery object
      let $children = $currentUl.children();
      for(let j = 0; j < 3; j++) { // [[undefined,2,3], [und, und, und], [und, und, 1]]
        if (gameState[i][j]) {
          let $currentLi = $children.eq(2 - j);
          $currentLi.addClass(`tower-${gameState[i][j]}`);
        }
      }
    }
  }
}

module.exports = View;
