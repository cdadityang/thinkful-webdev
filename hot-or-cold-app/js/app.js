
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var genNum = Math.floor((Math.random() * 100) + 1);
    var guessCount = 0;
    var guessed_it = false;
  	

  	$("form.form").submit(function(event){
      event.preventDefault();
      userGuess = $('#userGuess').val();
      if(parseInt(userGuess)){
        final = parseInt(userGuess);
      }
      else{
        alert("Only Integers Pls!")
        guessCount--;
      }
      guessCount++;
      $("span#count").text(guessCount);
      console.log(guessCount);

      if(final < genNum){
        $("h2#feedback").text("Low");
      }
      else if(final > genNum){
        $("h2#feedback").text("High");
      }
      else if(final == genNum){
        $("h2#feedback").text("Great");
        guessed_it = true;
      }

      if(guessed_it == true){
        $("h2#feedback").text("Great");
        $("ul#guessList").append('<li>' + genNum + ' in ' + guessCount + ' Guesses ' + '</li>');
      }
  	});

    $(".button").click(function(){
      if(guessed_it == true){
        newGame();
        alert("You've Already Guessed, New Game Started !");
      }
    });

    $('.new').click(function(){
      newGame();
    });

    function newGame(){
      genNum = Math.floor((Math.random() * 100) + 1);
      guessed_it = false;
      guessCount = 0;
      $("span#count").text(guessCount);
      $("#userGuess").val('');
      $("h2#feedback").text("Make your Guess!");
    }
});