$(function() {

console.log( 'Javascript Ready To Goooo!' );

var tile = $("td");
var reset = $("#reset")[0];
var nowPlayer = $(".playerTurn")[0];
var player1;
//console.log(tile);
//console.log(reset);
//console.log(nowPlayer);

function resetAll(){
    reset.addEventListener("click", function() {
        for (var i = 0; i < tile.length; i++) {
            tile[i].innerHTML = "";    
        }
     	player1 = true;
     	currentPlayer();   
    });
}
resetAll();

function playerHuman() {
    for (var i = 0; i < tile.length; i++) {
        tile[i].addEventListener("click", function() {
            if (this.innerHTML === "") {
                this.innerHTML = "X";
                player1 = false;
                currentPlayer();
                compTurn();
            }
        });
    }
}
playerHuman();

function resetAll(){
    reset.addEventListener("click", function() {
        for (var i = 0; i < tile.length; i++) {
            tile[i].innerHTML = "";
        }
    });
}
resetAll();

function currentPlayer(){
	if (player1 === false){
		$(".playerTurn").text("It is O's turn");
	}
	else {
		$(".playerTurn").text("It is X's turn");
	}
}

function compTurn() {
    var compTileIndex;
    compTileIndex = Math.floor(Math.random() * 9);
    console.log(compTileIndex);
        if (tile[compTileIndex].innerHTML == "") {   // Doesnt seem to work, 'O' gets placed in same spot?
       		player1 = true;
            currentPlayer();
            tile[compTileIndex].innerHTML = "O"; 
            playerHuman();
        }
}

});


// $( document ).ready(function() {
//   console.log( 'ready!' );
// });


// $(function() { // REQUIRED

// 	function()

// });


// 	var colors = ["red", "blue", "yellow", "green"];

// 	for (var i = 0 ; i < 16 ; i++){
// 		setTimeout(function() {
// 			var num = Math.floor(Math.random()*4);
// 			var li = $("<li></li>").addClass('box');
// 			$(grid).append(li)
// 			$(li).css("backgroundColor", colors[num]).hide().slideDown();
// 		}, 100*i);
// 	}	