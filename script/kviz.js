function feldolgoz() {

    let pontszam = 0
    
    const a= document.getElementById("3").checked;
    const b = document.getElementById("4").checked;
   

    if (a == 1) { pontszam = pontszam + 1;}
    if (b== 1) { pontszam = pontszam + 1;}
    
    const h = document.getElementById("kortars").value;
    if (h=="kortárs" || h=="Kortárs"){pontszam=pontszam+1;}

    const e = document.getElementById("keringo").checked;
	const f = document.getElementById("hiphop").checked;
	const g = document.getElementById("tango").checked;
    const k = document.getElementById("kortarsok").checked;

	if (e==0 && f==1 && g==0 && k==1){pontszam=pontszam+1;}

    document.getElementById("osszpont").innerHTML = "Pontszámod: 4/"+pontszam

    if (pontszam == 4) {
        document.getElementById("uzenet").innerHTML = "Gratulálunk! Sikeresen töltötted ki a kvízt!"
    }
    if (pontszam < 4) {
        document.getElementById("uzenet").innerHTML = "Sajnos ez most nem sikerült! De semmi probléme, kattints az újrakezdés gombra, és próbáld újra!"}}
x=1
function eltuntet(){
    x=x+1
    document.getElementById("osszpont").innerHTML =""
    document.getElementById("uzenet").innerHTML = `${x}. próbálkozás.`


}