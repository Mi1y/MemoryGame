function generuj(){
	var plansza = document.getElementById("plansza");
	var litery = ['<img src="img/russianr1.gif">','<img src="img/russianr2.gif">','<img src="img/russianr3.gif">','<img src="img/russianr4.gif">','<img src="img/russianr5.gif">','<img src="img/russianr6.gif">','<img src="img/russianr7.gif">','<img src="img/russianr8.gif">','<img src="img/russianr9.gif">','<img src="img/russianr10.gif">','<img src="img/russianr1.gif">','<img src="img/russianr2.gif">','<img src="img/russianr3.gif">','<img src="img/russianr4.gif">','<img src="img/russianr5.gif">','<img src="img/russianr6.gif">','<img src="img/russianr7.gif">','<img src="img/russianr8.gif">','<img src="img/russianr9.gif">','<img src="img/russianr10.gif">']
	wylosowane = [];
	odkryte = [];
	plansza.innerHTML="";
	for(var i=0; i<20; i++) {
		var los = Math.floor(Math.random()*(20-i));
		wylosowane[i] = litery[los];
		litery.splice(los,1);
		console.log(litery);
		plansza.innerHTML += "<div class='kafelek' id='k"+i+"'onclick='odkryj(this)'></div>"
	}
}

function odkryj (kafel){
	l_odkrytych = odkryte.length;
	if(l_odkrytych == 2) {
		//Zakrywanie poprzednich kafli
		odkryte[0].style.backgroundImage = "#aaaaff";
	    odkryte[0].innerHTML = "";
		odkryte[1].style.backgroundImage = "#aaaaff"; 
	    odkryte[1].innerHTML = "";
		odkryte=[];
		l_odkrytych = 0;
	}
	if (l_odkrytych == 0) {
	kafel.style.backgroundImage = "cyan";
	kafel.innerHTML = wylosowane[kafel.id.substr(1)];
	odkryte[0] = kafel;
	} else if (l_odkrytych == 1) {
		if (odkryte[0]==kafel) {
			return;
		}
		kafel.style.backgroundImage = "cyan";
	    kafel.innerHTML = wylosowane[kafel.id.substr(1)];
		odkryte[1] = kafel;
		// DOPISZEMY SPRAWDZANIE KAFLI
		if(odkryte[0].innerHTML == odkryte[1].innerHTML) {
			odkryte[0].style.visibility = "hidden";
			odkryte[1].style.visibility = "hidden";
	    }
		
	
    }
}

function time() {
	odkryte[0].innerHTML = "";
	odkryte[1].innerHTML = "";
	clearInterval(interval);
}
	setInterval(time, 8000);

function Start() {
	alert ('Masz 2 minuty do ukończenia! Pośpiesz sie!')
}
	setTimeout(Start, 0001)

function Koniec() {
	 alert ('Przegrałeś')
	 document.location.reload();
	 clearInterval(interval);
}
	setTimeout(Koniec, 120000)