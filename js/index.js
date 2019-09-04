window.onload = function () {
	function EA () {
		document.getElementById("0").style = "display: none";
		document.getElementById("1").style = "display: none";
		document.getElementById("2").style = "display: none";
		document.getElementById(document.getElementById("EV").options[document.getElementById("EV").selectedIndex].value).style = "display: block";
		var ActiveElement = document.getElementById("EV").options[document.getElementById("EV").selectedIndex].value;
		function add2list () {
			var MeleM = document.createElement("li");
			MeleM.appendChild(document.createTextNode(document.getElementById("1").childNodes[1].value));
			document.getElementById("1").childNodes[7].childNodes[1].appendChild(MeleM);
		}
		function formatlist () {
			if (document.getElementById("1").childNodes[7].childNodes[1].childNodes.length > 0) {
				var result = "[list]";
				for (var elem = 0; elem < document.getElementById("1").childNodes[7].childNodes[1].childNodes.length; elem++) {
					result += "[*]"+document.getElementById("1").childNodes[7].childNodes[1].childNodes[elem].textContent;
				}
				result += "[/list]"
				document.getElementById("in_the_end").value = document.getElementById("in_the_end").value + result;
				console.log(result);
			} else {
				alert("la lista no tiene elementos");
			}
		}
		switch(ActiveElement) {
			case "1":
				document.getElementById("1").childNodes[3].onclick = add2list;
				document.getElementById("1").childNodes[9].onclick = formatlist;
				break;
		}
	}
	EA();
	document.getElementById("EV").onchange = EA;
	function EA2 () {
		document.getElementById("C").style = "display: none";
		document.getElementById("T").style = "display: none";
		document.getElementById("S").style = "display: none";
		document.getElementById("Z").style = "display: none";
		document.getElementById("P").style = "display: none";
		document.getElementById("U").style = "display: none";
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
		function subrayar () {
			var val = "[u]"+document.getElementById("ETT").value+"[/u]"
			document.getElementById("in_the_end").value = document.getElementById("in_the_end").value + val;
			console.log(val);
		}
		function size () {
			var val = "[size="+document.getElementById("STF").value+"]"+document.getElementById("ETT").value+"[/size]";
			document.getElementById("in_the_end").value = document.getElementById("in_the_end").value + val;
			console.log(val);
		}
		function sizetext () {
			document.getElementById("STT").style = "font-size:"+document.getElementById("STF").value+"px;";
		}
		function SP () {
			var val = "[spoiler]"+document.getElementById("ETT").value+"[/spoiler]";
			document.getElementById("in_the_end").value = document.getElementById("in_the_end").value + val;
			console.log(val);
		}
		function cursiva () {
			var val = "[i]"+document.getElementById("ETT").value+"[/i]";
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
			case "S":
				document.getElementById("ETB").onclick = subrayar;
				document.getElementById("SC").onclick = subrayar;
				break;
			case "Z":
				document.getElementById("ETB").onclick = size;
				document.getElementById("STF").onchange = sizetext;
				break;
			case "P":
				document.getElementById("spoi").onclick = SP;
				document.getElementById("ETB").onclick = SP;
				break;
			case "U":
				document.getElementById("cursed").onclick = cursiva;
				document.getElementById("ETB").onclick = cursiva;
				break;
		}
	}
	EA2();
	document.getElementById("ET").onchange = EA2;
}
