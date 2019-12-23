$(document).ready(function(){
	var num = prompt("Enter Value From 1 to ? ", "Type Here");
	while(num % 1 != 0){
		alert("Please Type Non Decimal");
		var num = prompt("Enter Value From 1 to ? ", "Type Here");
	}
	var final = parseInt(num);
	function count(final){
		for(var i = 1; i <= final; i++){
			if(i%5 == 0 && i%3 == 0){
				$(".game").append('<p>' + 'FizzBuzz' + '</p>');
			}
			else if(i%3 == 0){
				$(".game").append('<p>' + 'Fizz' + '</p>');
			}
			else if(i%5 == 0){
				$(".game").append('<p>' + 'Buzz' + '</p>');
			}
			else{
				$(".game").append('<p>' + i + '</p>');
			}
		}
	}
	count(final);
});