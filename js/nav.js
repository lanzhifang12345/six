window.onload=function(){
	/* 头部nav*/
	var onavuls=document.getElementById('navuls').children;
	var onavdiv=document.getElementById('navdiv').children;
	for(var i=0; i<onavuls.length; i++){
		onavuls[i].setAttribute('index',i);
		onavuls[i].onmouseenter=function(){
			var a=this.getAttribute('index');
			// console.log(a);
			onavdiv[a].style.display='block';
		}
		onavuls[i].onmouseleave=function(){
			a=this.getAttribute('index');
			onavdiv[a].style.display='none';
		}	
	}
}

$(function(){
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
})