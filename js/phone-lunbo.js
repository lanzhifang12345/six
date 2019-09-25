window.onload=function(){
	/*var olbtuls=document.getElementById('lbtuls');
	var olbtols=document.getElementById('lbtols');
	var times;
	var num=0;
	function lunbo1(){
		times=setInterval(function(){
			num++;
			if(num>5){
				num=0;
			}
			for(var j=0; j<lbtols.children.length; j++){
				olbtols.children[j].className='';
			}
			olbtols.children[num].className='spa';
			olbtuls.style.marginLeft=-1349*num+'px';
		},2000)
	}
	lunbo1();
	lunbotu.onmouseenter=function(){
		clearInterval(times);
	}
	lunbotu.onmouseleave=function(){
		lunbo1();
	}*/

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
