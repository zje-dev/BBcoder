window.onload = function () {
	function EA () {
		document.getElementById("0").style = "display: none";
		document.getElementById("1").style = "display: none";
		document.getElementById("2").style = "display: none";
		document.getElementById("3").style = "display: none";
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
			case "3":
				document.getElementById("3").childNodes[1].onchange = EA3;
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
	function EA3 () {
		document.getElementById("U1").style = "display: none";
		document.getElementById("V2").style = "display: none";
		document.getElementById("I").style = "display: none";
		document.getElementById(document.getElementById("3").childNodes[1].value).style = "display: block";
		switch (document.getElementById("3").childNodes[1].value) {
			case "U1":
				console.log(document.getElementById("U1").childNodes);
				document.getElementById("U1").childNodes[7].onclick = UOF;
				document.getElementById("U1").childNodes[11].onclick = Uformateado;
				break;
			case "V2":
				console.log(document.getElementById("V2").childNodes);
				document.getElementById("V2").childNodes[3].onclick = Vformateado;
				break;
			case "I":
				console.log(document.getElementById("I").childNodes);
				document.getElementById("I").childNodes[3].onclick = Iformateado;
				break;
		}
		function UOF () {
			if (document.getElementById("U1").childNodes[7].value == "no") {
				document.getElementById("U1").childNodes[7].value = "si";
				document.getElementById("U1").childNodes[9].style = "border-radius: 7px;display: block;";
			} else {
				document.getElementById("U1").childNodes[7].value = "no";
				document.getElementById("U1").childNodes[9].style = "border-radius: 7px;display: none;";
			}
		}
		function Uformateado () {
			var val = "[url";
			if (document.getElementById("U1").childNodes[7].value == "si") {
				val += "="+document.getElementById("U1").childNodes[1].value + "]" + document.getElementById("U1").childNodes[9].value + "[/url]";
			} else {
				val += "]"+ document.getElementById("U1").childNodes[1].value +"[/url]";
			}
			document.getElementById("in_the_end").value = document.getElementById("in_the_end").value + val;
			console.log(val);
		}
		function Vformateado () {
			var val = "[video]" + document.getElementById("V2").childNodes[1].value + "[/video]";
			document.getElementById("in_the_end").value = document.getElementById("in_the_end").value + val;
			console.log(val);
		}
		function Iformateado () {
			var val = "[img]" + document.getElementById("I").childNodes[1].value + "[/img]";
			document.getElementById("in_the_end").value = document.getElementById("in_the_end").value + val;
			console.log(val);
		}
	}
	EA3();
}
