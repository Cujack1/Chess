let startingPoint = {};
let possibleMoves = [];
let previousMoves = [];
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
    possible: false,
    row: 1,
    column: 1,
    selector: ".t1",
    piece: rook,
    pieceName: "rookBlackC1",
  },
  {
    possible: false,
    row: 2,
    column: 1,
    selector: ".t9",
    piece: bishop,
    pieceName: "bishop",
  },
  {
    possible: false,
    row: 3,
    column: 1,
    selector: ".t17",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 4,
    column: 1,
    selector: ".t25",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 5,
    column: 1,
    selector: ".t33",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 6,
    column: 1,
    selector: ".t41",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 7,
    column: 1,
    selector: ".t49",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 8,
    column: 1,
    selector: ".t57",
    piece: rook,
    pieceName: "whiteRookC1",
  },
  {
    possible: false,
    row: 1,
    column: 2,
    selector: ".t2",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 2,
    column: 2,
    selector: ".t10",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 3,
    column: 2,
    selector: ".t18",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 4,
    column: 2,
    selector: ".t26",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 5,
    column: 2,
    selector: ".t34",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 6,
    column: 2,
    selector: ".t42",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 7,
    column: 2,
    selector: ".t50",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 8,
    column: 2,
    selector: ".t58",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 1,
    column: 3,
    selector: ".t3",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 2,
    column: 3,
    selector: ".t11",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 3,
    column: 3,
    selector: ".t19",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 4,
    column: 3,
    selector: ".t27",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 5,
    column: 3,
    selector: ".t35",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 6,
    column: 3,
    selector: ".t43",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 7,
    column: 3,
    selector: ".t51",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 8,
    column: 3,
    selector: ".t59",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 1,
    column: 4,
    selector: ".t4",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 2,
    column: 4,
    selector: ".t12",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 3,
    column: 4,
    selector: ".t20",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 4,
    column: 4,
    selector: ".t28",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 5,
    column: 4,
    selector: ".t36",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 6,
    column: 4,
    selector: ".t44",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 7,
    column: 4,
    selector: ".t52",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 8,
    column: 4,
    selector: ".t60",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 1,
    column: 5,
    selector: ".t5",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 2,
    column: 5,
    selector: ".t13",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 3,
    column: 5,
    selector: ".t21",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 4,
    column: 5,
    selector: ".t29",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 5,
    column: 5,
    selector: ".t37",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 6,
    column: 5,
    selector: ".t45",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 7,
    column: 5,
    selector: ".t53",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 8,
    column: 5,
    selector: ".t61",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 1,
    column: 6,
    selector: ".t6",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 2,
    column: 6,
    selector: ".t14",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 3,
    column: 6,
    selector: ".t22",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 4,
    column: 6,
    selector: ".t30",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 5,
    column: 6,
    selector: ".t38",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 6,
    column: 6,
    selector: ".t46",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 7,
    column: 6,
    selector: ".t54",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 8,
    column: 6,
    selector: ".t62",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 1,
    column: 7,
    selector: ".t7",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 2,
    column: 7,
    selector: ".t15",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 3,
    column: 7,
    selector: ".t23",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 4,
    column: 7,
    selector: ".t31",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 5,
    column: 7,
    selector: ".t39",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 6,
    column: 7,
    selector: ".t47",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 7,
    column: 7,
    selector: ".t55",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 8,
    column: 7,
    selector: ".t63",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 1,
    column: 8,
    selector: ".t8",
    piece: rook,
    pieceName: "rookBlackC8",
  },
  {
    possible: false,
    row: 2,
    column: 8,
    selector: ".t16",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 3,
    column: 8,
    selector: ".t24",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 4,
    column: 8,
    selector: ".t32",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 5,
    column: 8,
    selector: ".t40",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 6,
    column: 8,
    selector: ".t48",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 7,
    column: 8,
    selector: ".t56",
    piece: false,
    pieceName: false,
  },
  {
    possible: false,
    row: 8,
    column: 8,
    selector: ".t64",
    piece: rook,
    pieceName: "whiteRookC8",
  },
];

// Event listener for all pieces currently on the board
// currentlyOnBoard();

// function currentlyOnBoard() {
//   // Reset the list each turn - called after each player ends their turn.
//   whitePiecesOnBoard = [];
//   blackPiecesOnBoard = [];

//   findPieces();

//   function findPieces() {
//     tilesArray.forEach((piece) => {
//       if (piece.piece === whiteRookC1 || piece.piece === whiteRookC8) {
//         whitePiecesOnBoard.push(piece);
//       }

//       if (piece.piece === rookBlackC1 || piece.piece === rookBlackC8) {
//         blackPiecesOnBoard.push(piece);
//       }
//     });
//     listenForPieces();
//   }

//   function listenForPieces() {
//     whitePiecesOnBoard.forEach((piece) => {
//       document
//         .querySelector(piece.selector)
//         .addEventListener("click", piece.piece);
//     });
//   }
// }
// console.log("White node list", whitePiecesOnBoard);
// console.log("Black node list", blackPiecesOnBoard);

// Initialize the Board, populate the piece names

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
    document
      .querySelector(possibleMoves[k])
      .removeEventListener("click", movePiece);
  }

  // a. Removing '.possibleMoves' selector (CSS color change & hover).
  possibleMoves.forEach((tile) => {
    document.querySelector(tile).classList.remove("possibleMoves");
  });

  // b. Re-initialize board-wide event listener for the next move/selection.
  moveEventListener();

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

  // c. Checking to see if the tile you clicked on is a possibleMove[] or not.
  // ============| STARTING TILE |============
  for (i = 0; i < possibleMoves.length; i++) {
    for (j = 0; j < moveTileCLass.length; j++) {
      if (moveTileCLass[j] === possibleMoves[i]) {
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

        // ============| NEW TILE |============
        tilesArray.map((tile) => {
          if (tile.selector == moveTileCLass[j]) {
            // d1. Change 'piece' & 'pieceName' value of the new tile
            tile.piece = pieceMove;
            tile.pieceName = pieceNameMover;
            // d2. Update the new tile to reflect the piece
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
  console.log("Bishop Clicked");
}
function rook() {
  // 1. Checks to see if the rook has already been clicked, adding selectors to an array.
  if (possibleMoves == false) {
    rookMapTiles();
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

// Handles finding all of the possible tiles that a rook can move to.
// Rooks can either move along the starting row or starting columm (vertical/horizontal).
// rookMapTiles() will not store the starting tile as a possible move.
function rookMapTiles() {
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
