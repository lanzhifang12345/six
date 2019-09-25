$(function(){
	/*var a=$('.section-xialassl').offset().top-$(window).height();
	console.log(a);*/
	/* 下拉搜索*/
	$(window).scroll(function(){
		if($(window).scrollTop()>1050){
			$('.section-xialassl').css('display','block');
		}else{
			$('.section-xialassl').css('display','none');
		}
	})

	/* 左侧弹出导航*/
	$(window).scroll(function(){
		if($(window).scrollTop()>900){
			$('.index-left-nav').css('display','block');
			$('.li1').css('background','#ff0036');
		}else{
			$('.index-left-nav').css('display','none');
		}

		if($(window).scrollTop()>6700){
			$('.li9').css('background','#ff0036');
			$('.li9').siblings('li').css('background','#626262');
		}else if($(window).scrollTop()>6000){
			$('.li8').css('background','#19c8a9');
			$('.li8').siblings('li').css('background','#626262');
		}else if($(window).scrollTop()>5300){
			$('.li7').css('background','#f15453');
			$('.li7').siblings('li').css('background','#626262');
		}else if($(window).scrollTop()>4600){
			$('.li6').css('background','#64c333');
			$('.li6').siblings('li').css('background','#626262');
		}else if($(window).scrollTop()>3750){
			$('.li5').css('background','#0aa6e8');
			$('.li5').siblings('li').css('background','#626262');
		}else if($(window).scrollTop()>3100){
			$('.li4').css('background','#ea5f8d');
			$('.li4').siblings('li').css('background','#626262');
		}else if($(window).scrollTop()>2300){
			$('.li3').css('background','#ff0036');
			$('.li3').siblings('li').css('background','#626262');
		}else if($(window).scrollTop()>1600){
			$('.li2').css('background','#64c333');
			$('.li2').siblings('li').css('background','#626262');
		}else{
			$('.li2').css('background','#626262');
		}
		$('.li1').css('background','#ff0036');
		$('.li10').css('background','#ababab');

	})

	

	/* 商标-换一批*/
	$('.refresh').mouseenter(function(){
		console.log(1);
		var time=setTimeout(function (argument) {
			$('.refresh span').css('transform','rotate(180deg)');
		},1500)
		
		console.log(2);
	})

	/* 右侧固定栏*/
	$('.bar-uls .one').mouseenter(function(){
		$('.bar-uls .one div').css('display','block');
	})
	$('.bar-uls .one').mouseleave(function(){
		$('.bar-uls .one div').css('display','none');
	})

	$('.bar-uls .money').mouseenter(function(){
		$('.bar-uls .money div').css('display','block');
	})
	$('.bar-uls .money').mouseleave(function(){
		$('.bar-uls .money div').css('display','none');
	})

	$('.bar-uls .two').mouseenter(function(){
		$('.bar-uls .two div').css('display','block');
	})
	$('.bar-uls .two').mouseleave(function(){
		$('.bar-uls .two div').css('display','none');
	})

	$('.bar-uls .three').mouseenter(function(){
		$('.bar-uls .three div').css('display','block');
	})
	$('.bar-uls .three').mouseleave(function(){
		$('.bar-uls .three div').css('display','none');
	})

	$('.bar-uls .four').mouseenter(function(){
		$('.bar-uls .four div').css('display','block');
	})
	$('.bar-uls .four').mouseleave(function(){
		$('.bar-uls .four div').css('display','none');
	})

	$('.bar-uls .advice').mouseenter(function(){
		$('.bar-uls .advice div').css('display','block');
	})
	$('.bar-uls .advice').mouseleave(function(){
		$('.bar-uls .advice div').css('display','none');
	})

	$('.bar-uls .six').mouseenter(function(){
		$('.bar-uls .six div').css('display','block');
	})
	$('.bar-uls .six').mouseleave(function(){
		$('.bar-uls .six div').css('display','none');
	})

	$('.bar-uls .seven').mouseenter(function(){
		$('.bar-uls .seven div').css('display','block');
	})
	$('.bar-uls .seven').mouseleave(function(){
		$('.bar-uls .seven div').css('display','none');
	})


	/* 天猫超市*/
	$('#upuls>li').mouseenter(function(){
		$(this).addClass('news');
		$(this).siblings('li').removeClass('news');

		console.log($(this).index());
		var up=$(this).index();

		$('.updivs>div').eq(up).addClass('up-div');
		$('.updivs>div').eq(up).siblings('div').removeClass('up-div');
	})

})