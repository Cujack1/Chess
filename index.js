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
    row: 1,
    column: 1,
    selector: ".t1",
    piece: castleBL,
    startingPiece: "castleBL",
  },
  {
    row: 2,
    column: 1,
    selector: ".t9",
    piece: false,
    startingPiece: false,
  },
  {
    row: 3,
    column: 1,
    selector: ".t17",
    piece: false,
    startingPiece: false,
  },
  {
    row: 4,
    column: 1,
    selector: ".t25",
    piece: false,
    startingPiece: false,
  },
  {
    row: 5,
    column: 1,
    selector: ".t33",
    piece: false,
    startingPiece: false,
  },
  {
    row: 6,
    column: 1,
    selector: ".t41",
    piece: false,
    startingPiece: false,
  },
  {
    row: 7,
    column: 1,
    selector: ".t49",
    piece: false,
    startingPiece: false,
  },
  {
    row: 8,
    column: 1,
    selector: ".t57",
    piece: castleWL,
    startingPiece: "CastleWL",
  },
  {
    row: 1,
    column: 2,
    selector: ".t2",
    piece: false,
    startingPiece: false,
  },
  {
    row: 2,
    column: 2,
    selector: ".t10",
    piece: false,
    startingPiece: false,
  },
  {
    row: 3,
    column: 2,
    selector: ".t18",
    piece: false,
    startingPiece: false,
  },
  {
    row: 4,
    column: 2,
    selector: ".t26",
    piece: false,
    startingPiece: false,
  },
  {
    row: 5,
    column: 2,
    selector: ".t34",
    piece: false,
    startingPiece: false,
  },
  {
    row: 6,
    column: 2,
    selector: ".t42",
    piece: false,
    startingPiece: false,
  },
  {
    row: 7,
    column: 2,
    selector: ".t50",
    piece: false,
    startingPiece: false,
  },
  {
    row: 8,
    column: 2,
    selector: ".t58",
    piece: false,
    startingPiece: false,
  },
  {
    row: 1,
    column: 3,
    selector: ".t3",
    piece: false,
    startingPiece: false,
  },
  {
    row: 2,
    column: 3,
    selector: ".t11",
    piece: false,
    startingPiece: false,
  },
  {
    row: 3,
    column: 3,
    selector: ".t19",
    piece: false,
    startingPiece: false,
  },
  {
    row: 4,
    column: 3,
    selector: ".t27",
    piece: false,
    startingPiece: false,
  },
  {
    row: 5,
    column: 3,
    selector: ".t35",
    piece: false,
    startingPiece: false,
  },
  {
    row: 6,
    column: 3,
    selector: ".t43",
    piece: false,
    startingPiece: false,
  },
  {
    row: 7,
    column: 3,
    selector: ".t51",
    piece: false,
    startingPiece: false,
  },
  {
    row: 8,
    column: 3,
    selector: ".t59",
    piece: false,
    startingPiece: false,
  },
  {
    row: 1,
    column: 4,
    selector: ".t4",
    piece: false,
    startingPiece: false,
  },
  {
    row: 2,
    column: 4,
    selector: ".t12",
    piece: false,
    startingPiece: false,
  },
  {
    row: 3,
    column: 4,
    selector: ".t20",
    piece: false,
    startingPiece: false,
  },
  {
    row: 4,
    column: 4,
    selector: ".t28",
    piece: false,
    startingPiece: false,
  },
  {
    row: 5,
    column: 4,
    selector: ".t36",
    piece: false,
    startingPiece: false,
  },
  {
    row: 6,
    column: 4,
    selector: ".t44",
    piece: false,
    startingPiece: false,
  },
  {
    row: 7,
    column: 4,
    selector: ".t52",
    piece: false,
    startingPiece: false,
  },
  {
    row: 8,
    column: 4,
    selector: ".t60",
    piece: false,
    startingPiece: false,
  },
  {
    row: 1,
    column: 5,
    selector: ".t5",
    piece: false,
    startingPiece: false,
  },
  {
    row: 2,
    column: 5,
    selector: ".t13",
    piece: false,
    startingPiece: false,
  },
  {
    row: 3,
    column: 5,
    selector: ".t21",
    piece: false,
    startingPiece: false,
  },
  {
    row: 4,
    column: 5,
    selector: ".t29",
    piece: false,
    startingPiece: false,
  },
  {
    row: 5,
    column: 5,
    selector: ".t37",
    piece: false,
    startingPiece: false,
  },
  {
    row: 6,
    column: 5,
    selector: ".t45",
    piece: false,
    startingPiece: false,
  },
  {
    row: 7,
    column: 5,
    selector: ".t53",
    piece: false,
    startingPiece: false,
  },
  {
    row: 8,
    column: 5,
    selector: ".t61",
    piece: false,
    startingPiece: false,
  },
  {
    row: 1,
    column: 6,
    selector: ".t6",
    piece: false,
    startingPiece: false,
  },
  {
    row: 2,
    column: 6,
    selector: ".t14",
    piece: false,
    startingPiece: false,
  },
  {
    row: 3,
    column: 6,
    selector: ".t22",
    piece: false,
    startingPiece: false,
  },
  {
    row: 4,
    column: 6,
    selector: ".t30",
    piece: false,
    startingPiece: false,
  },
  {
    row: 5,
    column: 6,
    selector: ".t38",
    piece: false,
    startingPiece: false,
  },
  {
    row: 6,
    column: 6,
    selector: ".t46",
    piece: false,
    startingPiece: false,
  },
  {
    row: 7,
    column: 6,
    selector: ".t54",
    piece: false,
    startingPiece: false,
  },
  {
    row: 8,
    column: 6,
    selector: ".t62",
    piece: false,
    startingPiece: false,
  },
  {
    row: 1,
    column: 7,
    selector: ".t7",
    piece: false,
    startingPiece: false,
  },
  {
    row: 2,
    column: 7,
    selector: ".t15",
    piece: false,
    startingPiece: false,
  },
  {
    row: 3,
    column: 7,
    selector: ".t23",
    piece: false,
    startingPiece: false,
  },
  {
    row: 4,
    column: 7,
    selector: ".t31",
    piece: false,
    startingPiece: false,
  },
  {
    row: 5,
    column: 7,
    selector: ".t39",
    piece: false,
    startingPiece: false,
  },
  {
    row: 6,
    column: 7,
    selector: ".t47",
    piece: false,
    startingPiece: false,
  },
  {
    row: 7,
    column: 7,
    selector: ".t55",
    piece: false,
    startingPiece: false,
  },
  {
    row: 8,
    column: 7,
    selector: ".t63",
    piece: false,
    startingPiece: false,
  },
  {
    row: 1,
    column: 8,
    selector: ".t8",
    piece: castleBR,
    startingPiece: "castleBR",
  },
  {
    row: 2,
    column: 8,
    selector: ".t16",
    piece: false,
    startingPiece: false,
  },
  {
    row: 3,
    column: 8,
    selector: ".t24",
    piece: false,
    startingPiece: false,
  },
  {
    row: 4,
    column: 8,
    selector: ".t32",
    piece: false,
    startingPiece: false,
  },
  {
    row: 5,
    column: 8,
    selector: ".t40",
    piece: false,
    startingPiece: false,
  },
  {
    row: 6,
    column: 8,
    selector: ".t48",
    piece: false,
    startingPiece: false,
  },
  {
    row: 7,
    column: 8,
    selector: ".t56",
    piece: false,
    startingPiece: false,
  },
  {
    row: 8,
    column: 8,
    selector: ".t64",
    piece: castleWR,
    startingPiece: "castleWR",
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
//       if (piece.piece === castleWL || piece.piece === castleWR) {
//         whitePiecesOnBoard.push(piece);
//       }

//       if (piece.piece === castleBL || piece.piece === castleBR) {
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

tilesArray.map((tile) => {
  if (tile.startingPiece) {
    document.querySelector(tile.selector).innerHTML = tile.startingPiece;
  }
});

// Event Listener for clicking any given tile - Calls whichPiece()
moveEventListener();
function moveEventListener() {
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
    if (tile.selector === tileClass) {
      // console.log("tile", tile.selector);
      startingPoint = tile;
      console.log("startingPoint: ", startingPoint);

      if (tile.piece) {
        for (box of tileListener) {
          box.removeEventListener("click", whichPiece);
        }
        tile.piece();
      }
    }
  });
}

// Chess Piece Functions
function castleWL() {
  // Function for Rooks
  // If the array is false, then run the map function.
  // Places all possible moves for the Rook into an array, possibleMoves[]...
  // but making sure not ta add the starting tile to possibleMoves[].
  if (possibleMoves == false) {
    mapTiles();
  }
  function mapTiles() {
    tilesArray.map((tileRow) => {
      if (
        tileRow.row == startingPoint.row &&
        tileRow.selector != startingPoint.selector
      ) {
        possibleMoves.push(tileRow.selector);
      }
    });
    tilesArray.map((tileColumn) => {
      if (
        tileColumn.column == startingPoint.column &&
        tileColumn.selector != startingPoint.selector
      ) {
        possibleMoves.push(tileColumn.selector);
      }
    });
  }

  console.log("possibleMoves, no starting point: ", possibleMoves);

  // add a selector to each array item so that it will highlight when hovered (CSS rule)
  for (i = 0; i < possibleMoves.length; i++) {
    document.querySelector(possibleMoves[i]).classList.add("possibleMoves");
    document
      .querySelector(possibleMoves[i])
      .addEventListener("click", moveCastleWL);
  }
  function moveCastleWL() {
    let classString;
    let moveTileCLass;

    console.log("moveCastleWL(): ", this.className);

    // the classList of the tile that the Rook is moving to now being turned into an array
    classString = "." + this.className;
    moveTileCLass = classString.split(" ");

    // isolating the HTML class selector for the tile the Rook is moving to
    for (i = 0; i < possibleMoves.length; i++) {
      for (j = 0; j < moveTileCLass.length; j++) {
        if (moveTileCLass[j] === possibleMoves[i]) {
          // once the selector is found, move the piece to that tile
          // look a few lines down to see where the piece is REMOVED from the starting tile
          document.querySelector(possibleMoves[i]).innerHTML = "moved";
          console.log(
            "startingPoint-after move, before falsifying: ",
            startingPoint
          );

          // removing the .possibleMoves HTML class selector from the tiles for the purposed of CSS Styling
          possibleMoves.forEach((tile) => {
            document.querySelector(tile).classList.remove("possibleMoves");
          });

          // chaning the starting tile 'piece' value to false
          // removing the piece from the starting tile
          for (p = 0; p < tilesArray.length; p++) {
            if (tilesArray[p].selector === startingPoint.selector) {
              tilesArray[p].piece = false;
              tilesArray[p].startingPiece = false;
              document.querySelector(tilesArray[p].selector).innerHTML = "";

              console.log("setting piece to false: ", tilesArray[p]);
            }
          }

          // changing the 'piece' value of the new tile to castleWL
          tilesArray.map((tile) => {
            if (tile.selector == possibleMoves[i]) {
              tile.piece = castleWL;

              console.log("tile changed: ", tile);
            }
          });

          // removing the event listener on the possibleMoves[] tiles
          for (k = 0; k < possibleMoves.length; k++) {
            document
              .querySelector(possibleMoves[k])
              .removeEventListener("click", moveCastleWL);
          }

          // re-establishing moveEventListener() to listen for the next move
          moveEventListener();

          // emptying possibleMoves[] to be ready for the next move
          possibleMoves = [];
          console.log("possibleMoves cleared: ", possibleMoves);
        }
      }
    }
  }
}

function castleWR() {
  console.log("castleWR");
  // currentlyOnBoard();
}

function castleBR() {
  console.log("castleBR");
  // currentlyOnBoard();
}

function castleBL() {
  console.log("castleBL");
  // currentlyOnBoard();
}

// 1. [DONE] move piece when clicking a tile
// 2. [DONE] removed castle from object, place in the tile's object that it lands on
// 3. [DONE] remove .possibleMoves className from those tiles.
// 4. {DONE] clear possibleMoves[] = [];
// 5. undo feature === array of saved moves
// 6. rename all queryselectors and other items into variables for easier reading and editing
// 7. "Rook" printed on screen when loading up
// 8. a way for someone to clik on a piece, see where it goes, and then deselect it, clicking on another piece.
/////// a second nodelist of listeners placed on pieces so that you can select a different piece.
// 9. Capital letters for all comments -- comment cleanup
// 10. Call currentlyOnBoard() after each turn
// 11. ERROR: for some reason clicking on the other pieces removes all event listeners.
// 12. ERROR: after adding currentlyOnBoard() weird things are happening.
