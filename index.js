let startingPoint = {};
let possibleMoves = [];
let tileListener;

// Node list for event listeners on all pieces currently on the board
let whitePiecesOnBoard = [];
let blackPiecesOnBoard = [];
// let whiteOnBoardListener;
// let blackOnBoardListener;

// array of all 64 tiles structure as objects with a row, column, HTML class selector, and...
// piece value if a piece is currently sitting on that tile, which calls a function to...
// perform that piece's specific move set.
const tilesArray = [
  {
    piece: rook,
    row: 1,
    column: 1,
    selector: ".t1",
    pieceName: "rook",
    possible: false,
  },
  {
    piece: false,
    row: 2,
    column: 1,
    selector: ".t9",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 3,
    column: 1,
    selector: ".t17",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 4,
    column: 1,
    selector: ".t25",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 5,
    column: 1,
    selector: ".t33",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 6,
    column: 1,
    selector: ".t41",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 7,
    column: 1,
    selector: ".t49",
    pieceName: false,
    possible: false,
  },
  {
    piece: rook,
    row: 8,
    column: 1,
    selector: ".t57",
    pieceName: "rook",
    possible: false,
  },
  {
    piece: knight,
    row: 1,
    column: 2,
    selector: ".t2",
    pieceName: "knight",
    possible: false,
  },
  {
    piece: false,
    row: 2,
    column: 2,
    selector: ".t10",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 3,
    column: 2,
    selector: ".t18",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 4,
    column: 2,
    selector: ".t26",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 5,
    column: 2,
    selector: ".t34",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 6,
    column: 2,
    selector: ".t42",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 7,
    column: 2,
    selector: ".t50",
    pieceName: false,
    possible: false,
  },
  {
    piece: knight,
    row: 8,
    column: 2,
    selector: ".t58",
    pieceName: "knight",
    possible: false,
  },
  {
    piece: bishop,
    row: 1,
    column: 3,
    selector: ".t3",
    pieceName: "bishop",
    possible: false,
  },
  {
    piece: false,
    row: 2,
    column: 3,
    selector: ".t11",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 3,
    column: 3,
    selector: ".t19",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 4,
    column: 3,
    selector: ".t27",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 5,
    column: 3,
    selector: ".t35",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 6,
    column: 3,
    selector: ".t43",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 7,
    column: 3,
    selector: ".t51",
    pieceName: false,
    possible: false,
  },
  {
    piece: bishop,
    row: 8,
    column: 3,
    selector: ".t59",
    pieceName: "bishop",
    possible: false,
  },
  {
    piece: queen,
    row: 1,
    column: 4,
    selector: ".t4",
    pieceName: "queen",
    possible: false,
  },
  {
    piece: false,
    row: 2,
    column: 4,
    selector: ".t12",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 3,
    column: 4,
    selector: ".t20",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 4,
    column: 4,
    selector: ".t28",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 5,
    column: 4,
    selector: ".t36",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 6,
    column: 4,
    selector: ".t44",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 7,
    column: 4,
    selector: ".t52",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 8,
    column: 4,
    selector: ".t60",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 1,
    column: 5,
    selector: ".t5",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 2,
    column: 5,
    selector: ".t13",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 3,
    column: 5,
    selector: ".t21",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 4,
    column: 5,
    selector: ".t29",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 5,
    column: 5,
    selector: ".t37",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 6,
    column: 5,
    selector: ".t45",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 7,
    column: 5,
    selector: ".t53",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 8,
    column: 5,
    selector: ".t61",
    pieceName: false,
    possible: false,
  },
  {
    piece: bishop,
    row: 1,
    column: 6,
    selector: ".t6",
    pieceName: "bishop",
    possible: false,
  },
  {
    piece: false,
    row: 2,
    column: 6,
    selector: ".t14",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 3,
    column: 6,
    selector: ".t22",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 4,
    column: 6,
    selector: ".t30",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 5,
    column: 6,
    selector: ".t38",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 6,
    column: 6,
    selector: ".t46",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 7,
    column: 6,
    selector: ".t54",
    pieceName: false,
    possible: false,
  },
  {
    piece: bishop,
    row: 8,
    column: 6,
    selector: ".t62",
    pieceName: "bishop",
    possible: false,
  },
  {
    piece: knight,
    row: 1,
    column: 7,
    selector: ".t7",
    pieceName: "knight",
    possible: false,
  },
  {
    piece: false,
    row: 2,
    column: 7,
    selector: ".t15",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 3,
    column: 7,
    selector: ".t23",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 4,
    column: 7,
    selector: ".t31",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 5,
    column: 7,
    selector: ".t39",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 6,
    column: 7,
    selector: ".t47",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 7,
    column: 7,
    selector: ".t55",
    pieceName: false,
    possible: false,
  },
  {
    piece: knight,
    row: 8,
    column: 7,
    selector: ".t63",
    pieceName: "knight",
    possible: false,
  },
  {
    piece: rook,
    row: 1,
    column: 8,
    selector: ".t8",
    pieceName: "rook",
    possible: false,
  },
  {
    piece: false,
    row: 2,
    column: 8,
    selector: ".t16",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 3,
    column: 8,
    selector: ".t24",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 4,
    column: 8,
    selector: ".t32",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 5,
    column: 8,
    selector: ".t40",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 6,
    column: 8,
    selector: ".t48",
    pieceName: false,
    possible: false,
  },
  {
    piece: false,
    row: 7,
    column: 8,
    selector: ".t56",
    pieceName: false,
    possible: false,
  },
  {
    piece: rook,
    row: 8,
    column: 8,
    selector: ".t64",
    pieceName: "rook",
    possible: false,
  },
];

// ==========================| Getting thigns started |==========================
initializeBoard();
function initializeBoard() {
  tilesArray.map((tile) => {
    if (tile.pieceName) {
      document.querySelector(tile.selector).innerHTML = tile.pieceName;
      tilesArray.possible = false;
    }
  });
}

// Event Listener for clicking any given tile - Calls whichPiece()
moveEventListener();
function moveEventListener() {
  tilesArray.map((tile) => {
    tile.possible = false;
  });

  tileListener = document.querySelectorAll(".tiles");
  for (box of tileListener) {
    box.addEventListener("click", whichPiece);
  }
}

// ==========================| Clicking on Pieces & Blank Tiles |==========================

// 1. Find out what's on that tile by storing it's data in a variable 'startingPoint' and checking it against tilesArray[];
// // a. If a piece is found on that tile, then its callback function is called.
// // b. and all event listeners are removed from the board (added again later).
function whichPiece() {
  let currentTile = this.className;
  let tileClass = "." + currentTile.split(" ")[0];

  tilesArray.map((tile) => {
    if (tile.selector === tileClass) {
      if (tile.piece) {
        startingPoint = tile;

        for (box of tileListener) {
          box.removeEventListener("click", whichPiece);
        }

        tile.piece();
        listenForMove();
      }
    }
  });
}

// 2. De-select a piece
// // a. Event listeners added to de-select a piece if they click anywhere except a tile that they can move to.
function listenForMove() {
  tilesArray.map((tile) => {
    if (tile.possible === false) {
      document
        .querySelector(tile.selector)
        .addEventListener("click", resetBoard);
    }
  });
}

// 3. After a move is made, or when a player de-selects their piece, resetBoard() is called.
function resetBoard() {
  for (k = 0; k < possibleMoves.length; k++) {
    // a. Removing event listeners for movePiece();
    document
      .querySelector(possibleMoves[k])
      .removeEventListener("click", movePiece);
  }

  // b. Removing '.possibleMoves' selector (CSS color change & hover).
  possibleMoves.forEach((tile) => {
    document.querySelector(tile).classList.remove("possibleMoves");
  });

  // c. Emptying possibleMoves[] to be ready for the next move/selection.
  possibleMoves = [];

  // d. resetting all possible values in tilesArray to false to be ready for the next move/selection.
  tilesArray.map((tile) => {
    if (tile.possible === false) {
      document
        .querySelector(tile.selector)
        .removeEventListener("click", resetBoard);
    }
  });

  // e. Re-initialize board-wide event listener for the next move/selection.
  moveEventListener();
}

// 3. Handles actually moving pieces around the board.
function movePiece() {
  // a. 'classString' and 'moveTileClass' are used to isolate the tile's selector.
  let classString;
  let moveTileCLass;

  // b. 'pieceNameMover' and 'pieceMove' are used to transfer values from one tilesArray[] object to another.
  let pieceNameMover;
  let pieceMove;

  classString = "." + this.className;
  moveTileCLass = classString.split(" ");

  // ====================| STARTING TILE |=====================

  // c. Gathering starting tile information & deleting it
  for (p = 0; p < tilesArray.length; p++) {
    if (tilesArray[p].selector === startingPoint.selector) {
      // c1. Saving' pieceName' in order to transfer it to the new tile

      pieceNameMover = tilesArray[p].pieceName;
      pieceMove = tilesArray[p].piece;

      // c2. Chaning 'piece' & 'pieceName' of starting tile value to false
      tilesArray[p].piece = false;
      tilesArray[p].pieceName = false;

      // c3. Update the starting tile showing that the piece has moved.
      document.querySelector(tilesArray[p].selector).innerHTML = "";
    }
  }

  // 4. Finding the tile you clicked in possibleMove[].
  for (i = 0; i < possibleMoves.length; i++) {
    for (j = 0; j < moveTileCLass.length; j++) {
      if (moveTileCLass[j] === possibleMoves[i]) {
        // ====================| NEW TILE |=====================

        tilesArray.map((tile) => {
          if (tile.selector == moveTileCLass[j]) {
            // a. Change 'piece' & 'pieceName' value of the new tile

            tile.piece = pieceMove;
            tile.pieceName = pieceNameMover;

            // b. Update the new tile to reflect the piece
            document.querySelector(tile.selector).innerHTML = tile.pieceName;
          }
        });

        // e. Reset event listeners
        resetBoard();
      }
    }
  }
}

// ==========================| Chess Piece Functions |==========================

function bishop() {
  let x = startingPoint.row;
  let y = startingPoint.column;
  let differencePlus;
  let differenceMinus;
  let minusMove;
  let plusMove;
  let bishopMovesArray = [];

  for (row = 1; row <= 8; row++) {
    if (row != x) {
      differenceMinus = y - (x - row);
      differencePlus = y + (x - row);
      minusMove = { row: row, column: differenceMinus };
      plusMove = { row: row, column: differencePlus };
      if (differenceMinus >= 1 && differenceMinus <= 8) {
        bishopMovesArray.push(minusMove);
      }
      if (differencePlus >= 1 && differencePlus <= 8) {
        bishopMovesArray.push(plusMove);
      }
    }
  }

  tilesArray.map((tile) => {
    bishopMovesArray.map((move) => {
      if (tile.row === move.row && tile.column === move.column) {
        possibleMoves.push(tile.selector);
        document.querySelector(tile.selector).classList.add("possibleMoves");
        document
          .querySelector(tile.selector)
          .addEventListener("click", movePiece);
      }
    });
  });
}
function rook() {
  // 1. Checks to see if the rook has already been clicked, adding selectors to an array.
  if (possibleMoves == false) {
    tilesArray.map((tileRow) => {
      if (
        tileRow.row == startingPoint.row &&
        tileRow.selector != startingPoint.selector
      ) {
        possibleMoves.push(tileRow.selector);
        tileRow.possible = true;
      }
    });
    tilesArray.map((tileColumn) => {
      if (
        tileColumn.column == startingPoint.column &&
        tileColumn.selector != startingPoint.selector
      ) {
        possibleMoves.push(tileColumn.selector);
        tileColumn.possible = true;
      }
    });
  }

  // 2. After collecting all of the selectors...
  // CSS styling: add a selector to each possibleMove[] tile
  for (i = 0; i < possibleMoves.length; i++) {
    document.querySelector(possibleMoves[i]).classList.add("possibleMoves");

    // 3. Add event listeners to each possibleMove[] tile for selecting the tile to move to.
    document
      .querySelector(possibleMoves[i])
      .addEventListener("click", movePiece);
  }
}

function knight() {
  let a = startingPoint.row;
  let b = startingPoint.column;

  // columnMinus{} & columnPlus{} represent that on possible rows knights can land...
  // // on columns either one or two greater than the starting column.
  let columnMinus;
  let columnPlus;

  // knightRows[] represents that the possible rows from any given starting position...
  // // include 2 greater and 2 less than the starting row, but not the starting row itself.
  // knightRows[] can never have more than 4 rows.
  // Any tiles that compute to greater than 8 or less than 1 do not have any counterparts...
  // //  tilesArra, and therefore do not receive the '.possibleMoves' class.
  let knightRows = [a - 2, a - 1, a + 1, a + 2];
  let knightMovesArray = [];

  // Rows @ index [0] & [3] have the same math.
  for (k = 0; k < knightRows.length; k++) {
    if (k === 0 || k === 3) {
      columnMinus = { row: knightRows[k], column: b - 1 };
      columnPlus = { row: knightRows[k], column: b + 1 };
      knightMovesArray.push(columnMinus, columnPlus);
    }

    // Rows @ index [1] & [2] have the same math.
    if (k === 1 || k === 2) {
      columnMinus = { row: knightRows[k], column: b - 2 };
      columnPlus = { row: knightRows[k], column: b + 2 };
      knightMovesArray.push(columnMinus, columnPlus);
    }
  }

  // Add all of the computed moves into possibleMoves[] by comparing the...
  // // row & column values to tilesArray[], pushing to possibleMoves[],
  // // then calling movePiece().
  tilesArray.map((tile) => {
    knightMovesArray.map((move) => {
      if (tile.row === move.row && tile.column === move.column) {
        possibleMoves.push(tile.selector);
        document.querySelector(tile.selector).classList.add("possibleMoves");
        document
          .querySelector(tile.selector)
          .addEventListener("click", movePiece);
      }
    });
  });
}

function queen() {
  // Variables for diagonal movement.
  let x = startingPoint.row;
  let y = startingPoint.column;
  let differencePlus;
  let differenceMinus;
  let minusMove;
  let plusMove;
  let bishopMovesArray = [];

  // =============| Finding all Possible Moves |=============
  // Diagonal movement.
  for (row = 1; row <= 8; row++) {
    if (row != x) {
      differenceMinus = y - (x - row);
      differencePlus = y + (x - row);
      minusMove = { row: row, column: differenceMinus };
      plusMove = { row: row, column: differencePlus };
      if (differenceMinus >= 1 && differenceMinus <= 8) {
        bishopMovesArray.push(minusMove);
      }
      if (differencePlus >= 1 && differencePlus <= 8) {
        bishopMovesArray.push(plusMove);
      }
    }
  }

  // Adding diagonal movements to possibleMoves[];
  tilesArray.map((tile) => {
    bishopMovesArray.map((move) => {
      if (tile.row === move.row && tile.column === move.column) {
        possibleMoves.push(tile.selector);
      }
    });
  });

  // Vertical & Horizontal Movement & adding to possibleMoves[];
  tilesArray.map((tileRow) => {
    if (
      tileRow.row == startingPoint.row &&
      tileRow.selector != startingPoint.selector
    ) {
      possibleMoves.push(tileRow.selector);
      tileRow.possible = true;
    }
  });
  tilesArray.map((tileColumn) => {
    if (
      tileColumn.column == startingPoint.column &&
      tileColumn.selector != startingPoint.selector
    ) {
      possibleMoves.push(tileColumn.selector);
      tileColumn.possible = true;
    }
  });

  // Giving tiles the '.possibleMoves' class.
  for (i = 0; i < possibleMoves.length; i++) {
    document.querySelector(possibleMoves[i]).classList.add("possibleMoves");

    // Add event listeners to each possibleMove[] tile for selecting the tile to move to.
    document
      .querySelector(possibleMoves[i])
      .addEventListener("click", movePiece);
  }
}

// 1. [DONE] move piece when clicking a tile
// 2. [DONE] removed rook from object, place in the tile's object that it lands on
// 3. [DONE] remove .possibleMoves className from those tiles.
// 4. {DONE] clear possibleMoves[] = [];
// 5. undo feature === array of saved moves
// 6. rename all queryselectors into variables
/////// give variables and functions better names
// 7. [DONE] "Rook" printed on screen when loading up
// 8. [DONE] a way for someone to clik on a piece, see where it goes, and then deselect it.
// 9. Capital letters for all comments -- comment cleanup
// 10. (?) Call currentlyOnBoard() after each turn
// 13. [DONE] /* changed to pieceName */ Do I need startingPiece as a key in the tile objects?
// 14. [DONE] ERROR: after moving a rook, then clicking on the bishop more than once, the bishop begins logging moreRook() into the console.
// 15. [DONE] Make sure resetBoard() is universal.
// 16. Selecting different pieces.
// 17. movePiece() switch for loops to maps (?).
// 18. Consistent terms between all piece functions
// 19. QUEEN ON HER COLOR.
