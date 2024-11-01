var database= [
  {pojem: "slovo", druh: "abstraktní"},
  {pojem: "jahoda", druh: "jídlo a pití"},
  {pojem: "palačinka", druh: "jídlo a pití"},
  {pojem: "lívanec", druh: "jídlo a pití"},
  {pojem: "brambora", druh: "jídlo a pití"},
  {pojem: "rybíz", druh: "jídlo a pití"},
  {pojem: "nektarinka", druh: "jídlo a pití"},
  {pojem: "hruška", druh: "jídlo a pití"},
  {pojem: "pomeranč", druh: "jídlo a pití"},
  {pojem: "hřib", druh: "jídlo a pití"},
  {pojem: "lízátko", druh: "jídlo a pití"},
  {pojem: "tiramisu", druh: "jídlo a pití"},
  {pojem: "limonáda", druh: "jídlo a pití"},
  {pojem: "bonbón", druh: "jídlo a pití"},
  {pojem: "panenka", druh: "hračka"},
  {pojem: "auto", druh: "hračka"},
  {pojem: "lego", druh: "hračka"},
  {pojem: "vláček", druh: "hračka"},
  {pojem: "vojáček", druh: "hračka"},
  {pojem: "letadlo", druh: "hračka"},
  {pojem: "kniha", druh: "předmět"},
  {pojem: "tužka", druh: "předmět"},
  {pojem: "pastelka", druh: "předmět"},
  {pojem: "penál", druh: "předmět"},
  {pojem: "deka", druh: "předmět"},
  {pojem: "peněženka", druh: "předmět"},
  {pojem: "skříň", druh: "nábytek"},
  {pojem: "postel", druh: "nábytek"},
  {pojem: "polička", druh: "nábytek"},
  {pojem: "stůl", druh: "nábytek"},
  {pojem: "dveře", druh: "nábytek"},
  {pojem: "koberec", druh: "nábytek"},
  {pojem: "strom", druh: "rostliny"},
  {pojem: "tráva", druh: "rostliny"},
  {pojem: "pšenice", druh: "rostliny"},
  {pojem: "žito", druh: "rostliny"},
  {pojem: "buk", druh: "rostliny"},
  {pojem: "javor", druh: "rostliny"},
  {pojem: "jetel", druh: "rostliny"},
  {pojem: "kaktus", druh: "rostliny"},
  {pojem: "pták", druh: "živočichové"},
  {pojem: "kráva", druh: "živočichové"},
  {pojem: "ovce", druh: "živočichové"},
  {pojem: "člověk", druh: "živočichové"},
  {pojem: "mravenec", druh: "živočichové"},
  {pojem: "lev", druh: "živočichové"},
  {pojem: "želva", druh: "živočichové"},
  {pojem: "tygr", druh: "živočichové"},
  {pojem: "antilopa", druh: "živočichové"},
  {pojem: "prase", druh: "živočichové"}






]



  

function zabijak  () {
if (smrtopocet===0) {
 document.getElementById(smrtopocet).classList.remove("bez");
 alert("Byli jste oběšeni, prohráli jste. Hledané slovo bylo " + word.toLowerCase() + ".")
 location.reload();
} else {
  document.getElementById(smrtopocet).classList.remove("bez");
}

}



var neznamost = [];
function checker (slovo) {
var dlouzak = slovo.length;
for (var i = 0; i<dlouzak; i++) {
neznamost.push("_ ")
}
var k = neznamost[0];
for (var i = 1; i<neznamost.length; i++) {
k = k + neznamost[i]
}
console.log(k)
document.getElementById("slovak").textContent= k

return neznamost;
}

var smrtopocet = 10;

function letterCheck (slovo, pismenak, pushing) {
  //slovo je rozbit, pismenak je pismenkar a pushing je checker
var slovak = slovo.length;
var counter = 0;
for(var i=0; i<slovak; i++) {
if (pismenak===slovo[i]) {
pushing[i] = pismenak  
counter++;
console.log(counter);
console.log(pushing);
syntak(pushing,slovo);

} else {
console.log("Not matching")
}

}
if (counter===0) {
smrtopocet = smrtopocet-1
console.log(smrtopocet);
zabijak();
} else {
}


}




function randomGenerator () {
var datak = database;
var i = datak.length;
console.log(i)
var nahoda = Math.floor(Math.random()*i);
var slovo = database[nahoda].pojem;
var vychod = slovo.toUpperCase();
document.getElementById("napo").textContent = database[nahoda].druh
return vychod
};

function rozbit (slovo) {
var arr = []
  var delka = slovo.length;
  for (var i=0; i<delka; i++) {

arr.push(slovo.charAt(i))
  }


  return arr
}

function slovar () {
 var dlouhoslov = word.length
 var slovacnik = prompt("Uhádni celé slovo.")
slovacnik = slovacnik.toUpperCase();
slovacnik = slovacnik.trim()
if (slovacnik.length===dlouhoslov) {
if (slovacnik===word) {
  alert("Vyhráli jste!")
  location.reload();
} else {
smrtopocet = smrtopocet - 1;
zabijak();

}

} else {
  alert("Neplatný počet znaků.")
}
}


var word = randomGenerator();
console.log(word);
var rozdelek = rozbit(word);
console.log(rozdelek)
var unknown = checker(word);
console.log(unknown)



var pouzitky = []

function pismenkar () {
  var pismen = prompt("Napiš pouze jedno písmeno")
  var correct = false;
  var capital = pismen.toUpperCase();
 if(capital.length===1) {
   correct=true;
   pouzitky.push(capital) 
document.getElementById("vypis").textContent = pouzitky
letterCheck(rozdelek, capital, unknown) 
 
 } else {
   correct=false;
   alert("Neplatný počet znaků")
 }
 
 
 }
 
function syntak (pushing, slovo) {
  var k = pushing[0];
  for (var i = 1; i<pushing.length; i++) {
  k = k + pushing[i]
  }
  console.log(k)
  document.getElementById("slovak").textContent= k

  var j = slovo[0];
  for (var i = 1; i<slovo.length; i++) {
    j = j + slovo[i]
    }
  console.log(j)
  if (k===j) {
  alert("Vyhráli jste!")
  location.reload()
  } 
  


}
function napovedar () {
document.getElementById("napovedar").style.display = "none";
document.getElementById("napo").style.display = "block";

}