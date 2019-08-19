window.onload = function () {
	function EA () {
		document.getElementById("0").style = "display: none";
		document.getElementById("1").style = "display: none";
		document.getElementById("2").style = "display: none";
		document.getElementById(document.getElementById("EV").options[document.getElementById("EV").selectedIndex].value).style = "display: block"; 
	}
	document.getElementById("EV").onchange = EA;
}
