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

// Stores the selected tile in a variable to check if it has a piece in it or not.
function whichPiece() {
  // grab the selected tile's className
  let currentTile = this.className;
  let tileClass = "." + currentTile.split(" ")[0];
  // console.log("whichPiece() tileClass: ", tileClass);

  // 1. finding the tile that was clicked on in the tile array and storing it as an object in the startingPoint variable.
  // 2. then if there is a piece on this tile, that piece's function is called.
  tilesArray.map((tile) => {
    if (tileClass === tile.selector) {
      if (tile.piece) {
        startingPoint = tile;
        console.log("starting point (click 1): ", startingPoint);
        for (box of tileListener) {
          box.removeEventListener("click", whichPiece);
        }
        tile.piece();
        listenForMove();
      }
    }
  });
}

// // // // // // // // //
function listenForMove() {
  console.log("tilesArray, possible?: ", tilesArray);
  //   tilesArray.map((tile) => {
  //     if (tile.possible === false) {
  //       document
  //         .querySelector(tile.selector)
  //         .addEventListener("click", resetBoard);
  //     }
  //   });
}

// Chess Piece Functions

function bishop() {
  console.log("Bishop Clicked");
}
function rook() {
  // Function for Rooks
  // If the array is false, then run the map function.
  // Places all possible moves for the Rook into an array, possibleMoves[]...
  // but making sure not to add the starting tile to possibleMoves[].
  // at the end of the function possibleMoves[] is emptied.
  if (possibleMoves == false) {
    rookMapTiles();
  }

  // add a selector to each array item so that it will highlight when hovered (CSS rule)
  for (i = 0; i < possibleMoves.length; i++) {
    document.querySelector(possibleMoves[i]).classList.add("possibleMoves");
    document
      .querySelector(possibleMoves[i])
      .addEventListener("click", moveRook);
  }
}

function moveRook() {
  let classString;
  let moveTileCLass;
  let pieceNameMover;

  // the classList of the tile that the Rook is moving to
  classString = "." + this.className;
  moveTileCLass = classString.split(" ");

  // Checking to see if the tile you clicked on is a possibleMove[] or not.
  for (i = 0; i < possibleMoves.length; i++) {
    for (j = 0; j < moveTileCLass.length; j++) {
      if (moveTileCLass[j] === possibleMoves[i]) {
        // ============| STARTING TILE |============
        // 1. saving pieceName to a variable in order to transfer it to the new tile
        // 2. chaning piece & pieceName value to false
        // 3. removing the piece from the starting tile
        // 4. update the innerHTML on the starting tile showing that the piece has moved.
        for (p = 0; p < tilesArray.length; p++) {
          if (tilesArray[p].selector === startingPoint.selector) {
            console.log("starting point (click 2): ", startingPoint);
            pieceNameMover = tilesArray[p].pieceName;
            console.log("Piece Name Mover: ", pieceNameMover);
            tilesArray[p].piece = false;
            tilesArray[p].startingPiece = false;
            tilesArray[p].pieceName = false;
            document.querySelector(tilesArray[p].selector).innerHTML = "";
          }
        }
        // ============| NEW TILE |============
        // 1. once the selector is found, move the rook to that tile
        // 2. change the piece & pieceName value of the new tile to rook
        // 3. update the innerHTML for the new tile to reflect rook
        tilesArray.map((tile) => {
          if (tile.selector == moveTileCLass[j]) {
            tile.piece = rook;
            tile.pieceName = pieceNameMover;
            document.querySelector(tile.selector).innerHTML = tile.pieceName;
            initializeBoard();
          }
        });

        function resetBoard() {
          // Removing the event listener on the possibleMoves[] tiles
          for (k = 0; k < possibleMoves.length; k++) {
            document
              .querySelector(possibleMoves[k])
              .removeEventListener("click", rook);
            document
              .querySelector(possibleMoves[k])
              .removeEventListener("click", moveRook);
          }

          // Removing the .possibleMoves HTML selector (CSS highlighting & hover)
          possibleMoves.forEach((tile) => {
            document.querySelector(tile).classList.remove("possibleMoves");
          });

          // Re-initialize board-wide event listener for the next move
          moveEventListener();

          // Emptying possibleMoves[] to be ready for the next move
          possibleMoves = [];
        }
        resetBoard();
      }
    }
  }
}

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
// 2. [DONE] removed castle from object, place in the tile's object that it lands on
// 3. [DONE] remove .possibleMoves className from those tiles.
// 4. {DONE] clear possibleMoves[] = [];
// 5. undo feature === array of saved moves
// 6. rename all queryselectors into variables
/////// give variables and functions better names
// 7. "Rook" printed on screen when loading up
// 8. a way for someone to clik on a piece, see where it goes, and then deselect it, clicking on another piece.
/////// a second nodelist of listeners placed on pieces so that you can select a different piece.
// 9. Capital letters for all comments -- comment cleanup
// 10. Call currentlyOnBoard() after each turn
// 11. ERROR: for some reason clicking on the other pieces removes all event listeners.
// 12. ERROR: after adding currentlyOnBoard() weird things are happening.
// 13. [DONE] /* changed to pieceName */ Do I need startingPiece as a key in the tile objects?
// 14. [DONE] ERROR: after moving a rook, then clicking on the bishop more than once, the bishop begins logging moreRook() into the console.
