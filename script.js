$(document).ready(function() {
  var currentPlayer = 'X';
  
  $('.cell').click(function() {
    if ($(this).text() === '') {
      $(this).text(currentPlayer);
      if (checkWin()) {
        alert('Player ' + currentPlayer + ' wins!');
        resetBoard();
      } else if (checkTie()) {
        alert('It\'s a tie!');
        resetBoard();
      } else {
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
      }
    }
  });
  
  $('#reset').click(function() {
    resetBoard();
  });
  
  function checkWin() {
    var cells = $('.cell');
    var winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];
    
    for (var i = 0; i < winningCombinations.length; i++) {
      var combo = winningCombinations[i];
      if (cells[combo[0]].innerHTML !== '' &&
          cells[combo[0]].innerHTML === cells[combo[1]].innerHTML &&
          cells[combo[1]].innerHTML === cells[combo[2]].innerHTML) {
        return true;
      }
    }
    
    return false;
  }
  
  function checkTie() {
    var cells = $('.cell');
    for (var i = 0; i < cells.length; i++) {
      if (cells[i].innerHTML === '') {
        return false;
      }
    }
    return true;
  }
  
  function resetBoard() {
    $('.cell').text('');
    currentPlayer = 'X';
  }
});