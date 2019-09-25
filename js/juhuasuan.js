$(function(){
	$('.jus_p1').mouseenter(function(){
		console.log(11);
		$('.jus_box1 .div_one').css('display','block');
	})
	$('.jus_p1').mouseleave(function(event) {
		$('.jus_box1 .div_one').css('display','none');
	})

	$('.div_one').mouseenter(function(){
		$('.jus_box1 .div_one').css('display','block');
	})
})