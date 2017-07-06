/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var board = new Board({n: n});
  var counter = 0;
  var rowConflict = {};
  var colConflict = {};
  var solution = board.rows();

  for (var i = 0; i < n; ++i) {
    for (var j = 0; j < n; ++j) {
      if (!(i in rowConflict) && !(j in colConflict)) {
        rowConflict[i] = i;
        colConflict[j] = j;
        board.togglePiece(i, j);
        ++counter;  
      }
      if (counter === n) {      
        console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
        return solution; 
      }
    }
  }  

  return undefined;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var indexer = -1; 
  var chessboardCount = 0;
  var board = new Board({n: n});
  var solutionHolder = [];
  var solution = board.findNRooksSolution(n);
  solutionHolder.push(solution);

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (solution[i][j] === 1) {
        if (indexer === -3) {
          indexer *= -1;
          solution[i][j - indexer] = solution[i][j];
          indexer = -1;
          j++;
        } else {
          solution[i][j - indexer] = solution[i][j];
          indexer--;
          j++;
        } 
      }
    }
  }
  //create a new board, fill it with standard rook pattern
  // iterate over standard rook pattern, 
  // for each rook pattern found ie: row[0][0], subtract [0][0] - -1
  // set new rook to row[0][1]
  //iterate over rows, row[1][1] - -1 = row[1],[2] and so on
  //once done count++
  
  //once a rook pattern matches a stored rook pattern, exit and return count?




 // var solutionCount = 0; //fixme
  // var board = new Board({n: n});
  // var matrix = null;
  // var rowConflict = null; 
  // var colConflict = null;

  // for (var j = 0; j < n; ++j) {
  //   matrix = board.makeEmptyMatrix(n); 
  //   matrix.togglePiece(0, j);
  //   rowConflict = {};
  //   rowConflict[i] = i;
  //   colConflict = {};
  //   recurse(0, j);
  // } 
  
  // var recurse = function(x, y) {
  //   if (!(i in rowConflict) && !(j in colConflict)) {
  //     rowConflict[i] = i;
  //     colConflict[j] = j;
  //     board.togglePiece(i, j);
  //     ++counter;  
  //   }
  // };

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
