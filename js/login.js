$(function(){
	$('.form .youshangjiao1 span').click(function(){
		$('.form .youshangjiao1').css('display','none');
		$('.form .youshangjiao2').css('display','block');
		$('.form .form-center1').css('display','none');
		$('.form .form-center2').css('display','block');	
	})
	$('.form .youshangjiao2 span').click(function(){
		$('.form .youshangjiao1').css('display','block');
		$('.form .youshangjiao2').css('display','none');
		$('.form .form-center1').css('display','block');
		$('.form .form-center2').css('display','none');	
	})

	$('.form .form-center1 .div-4>#mmdl').click(function(){
		console.log(11);
		$('.form .youshangjiao1').css('display','none');
		$('.form .youshangjiao2').css('display','block');
		$('.form .form-center1').css('display','none');
		$('.form .form-center2').css('display','block');
	});
})

