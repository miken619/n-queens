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

  var solutionCount = 0; //fixme
  var colConflict = {};
  

  var recurse = function(x) {
    if (x > n) {
      return;  
    }  
    if (x === n) {
      ++solutionCount;
    }      
    for (var j = 0; j < n; ++j) { 
      if (!(j in colConflict)) { 
                   
        colConflict[j] = j;      
        recurse(x + 1);                    
        delete colConflict[j];     
      }   
              
    }     
  };

  recurse(1);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n: n});
  var solution = board.rows();
  var result = [];
  var solutionCount = 0;

  var recurse = function(x) {
   
    if (x >= n) {
      return;  
    }     
    if (solutionCount >= 1) {
      return;
    }

    for (var j = 0; j < n; ++j) {
      board.togglePiece(x, j);               
      if (!board.hasAnyQueenConflictsOn(x, j)) {  
        if ((x + 1) === n) {
          ++solutionCount;      
        }                                
        recurse(x + 1);
        if (solutionCount < 1) {      
          board.togglePiece(x, j);
        }                       
      } else {
        board.togglePiece(x, j);
      }                  
    }   
    
  };
  
  recurse(0);      
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution)); 
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = (n <= 0) ? 1 : 0; //fixme 
  var board = new Board({n: n});

  var recurse = function(x) {
    if (x >= n) {
      return;  
    }  
     
    for (var j = 0; j < n; ++j) {
      board.togglePiece(x, j);               
      if (!board.hasAnyQueenConflictsOn(x, j)) {  
        if ((x + 1) === n) {
          ++solutionCount;
        }                              
        recurse(x + 1);   
        board.togglePiece(x, j);                          
      } else {
        board.togglePiece(x, j);
      }               
    }     
  };

  recurse(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
