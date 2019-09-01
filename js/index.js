window.onload = function () {
	function EA () {
		document.getElementById("0").style = "display: none";
		document.getElementById("1").style = "display: none";
		document.getElementById("2").style = "display: none";
		document.getElementById(document.getElementById("EV").options[document.getElementById("EV").selectedIndex].value).style = "display: block"; 
	}
	EA();
	document.getElementById("EV").onchange = EA;
	function EA2 () {
		document.getElementById("C").style = "display: none";
		document.getElementById("T").style = "display: none";
		document.getElementById("S").style = "display: none";
		document.getElementById(document.getElementById("ET").options[document.getElementById("ET").selectedIndex].value).style = "display: block"; 
		var ActiveElement = document.getElementById("ET").options[document.getElementById("ET").selectedIndex].value;
		console.log(ActiveElement);
		function EditColor () {
			let val = "[color="+document.getElementById("IC").value+"]"+document.getElementById("ETT").value+"[/color]";
			document.getElementById("in_the_end").value = document.getElementById("in_the_end").value + val;
			console.log(val);
		}
		function tachar () {
			var val = "[s]"+document.getElementById("ETT").value+"[/s]"
			document.getElementById("in_the_end").value = document.getElementById("in_the_end").value + val;
			console.log(val);
		}
		switch (ActiveElement) {
			case "C":
				document.getElementById("ETB").onclick = EditColor;
				break;
			case "T":
				document.getElementById("TC").onclick = tachar;
				document.getElementById("ETB").onclick = tachar;
				break;
		}
	}
	EA2();
	document.getElementById("ET").onchange = EA2;
}
