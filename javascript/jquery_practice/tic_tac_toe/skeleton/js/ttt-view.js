class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $("ul").on("click", "li.column", (e) => {
      this.makeMove($(e.currentTarget));
    });
  }

  makeMove($square) {
    let x = parseInt($square.parent().attr("pos"));
    let y = parseInt($square.attr("pos"));
    let that = this;
    try {
      this.game.playMove([x,y]);
    } catch (e) {
      alert("invalid move");
    }
    $square.addClass(this.game.currentPlayer);
    if(this.game.board.winner()) {
      window.setTimeout(function() {
        alert("you won!");
        $("ul").off();
      }, 0);
    }
  }

  setupBoard() {
    for (let i = 0; i < 3; i++) {
      let $ul = $('<ul class="row"></ul>');
      $ul.attr("pos", i);
      for (let j = 0; j < 3; j++) {
        let $li = $('<li class="column"></li>');
        $li.attr("pos", j);
        $ul.append($li);
      }
      this.el.append($ul);
    }
  }
}

module.exports = View;
