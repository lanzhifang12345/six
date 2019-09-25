window.onload=function(){

	/* 顶部nav*/
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