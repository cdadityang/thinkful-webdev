$(document).ready(function() {
	mainSound();
	doIntro();
	$(".ryu").mouseenter(function(){
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate({'left' : '1020px'},
			500, function(){
				$('.hadouken').hide();
				$('.hadouken').css('left', '520px');
			});
	})
	.mouseup(function(){
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
	});

	$(document).keydown(function(e) {
    if (e.keyCode == 88) {
      // playCool();
      $('.ryu-ready').hide();
      $('.ryu-still').hide();
      $('.ryu-cool').show();
    }
  }).keyup(function(e) {
    if (e.keyCode == 88) {
      // $('#cool')[0].pause();
      // $('#cool')[0].load();
      $('.ryu-cool').hide();
      $('.ryu-still').show();
    }
  });

	function playHadouken(){
		$("#hadouken-sound")[0].volume = 0.5;
		$("#hadouken-sound")[0].load();
		$("#hadouken-sound")[0].play();
	}
	function mainSound(){
		$("#main")[0].volume = 0.2;
		$("#main")[0].load();
		$("#main")[0].play();
	}
	function doIntro() {
  		$('.sf').fadeIn(3500, function() {
    		$('.sf').fadeOut(1000, function() {
      			$('.byb').fadeIn(1500, function() {
        			$('.byb').fadeOut(1000, function() {
          				$('.jl').fadeIn(1500, function() {
            				$('.jl').fadeOut(1500, function() {
              					$('.how-to>p').fadeIn(1000);
            });
          })
        })
      })
    })
  })
}
	
});