let ubicacionPrincipal= window.pageXOffset;
window.onscroll= function(){
	let DesplazamientoActual = window.pageXOffset;
	if (ubicacionPrincipal >= DesplazamientoActual){
		document.getElementsByName("menu").style.top = "0";
	}
	else {
		document.getElementsByName("menu").style.top = "100";
	}
	ubicacionPrincipal = DesplazamientoActual
}