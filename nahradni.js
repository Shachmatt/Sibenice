var database= [{pojem: "slovo ", druh: "abstraktní", }]







function zabijak () {
if (smrtopocet===0) {
  document.getElementById("zivot").textContent = smrtopocet
alert("Byli jste oběšeni, prohráli jste.")
location.reload()
} else {
  document.getElementById("zivot").textContent = smrtopocet
  alert("Ztrácíš jeden život, počet tvých životů je " + smrtopocet + ".")
}

}



var neznamost = [];
function checker (slovo) {
var dlouzak = slovo.length-1;
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
alert("Správně!");
}


}





function randomGenerator () {
var datak = database;
var i = datak.length;
console.log(i)
var nahoda = Math.floor(Math.random()*i);
var slovo = database[nahoda].pojem;
var vychod = slovo.toUpperCase();

return vychod
};

function rozbit (slovo) {
var arr = []
  var delka = slovo.length - 1;
  for (var i=0; i<delka; i++) {

arr.push(slovo.charAt(i))
  }


  return arr
}

function slovar () {alert("Naschle")}


var word = randomGenerator();
console.log(word);
var rozdelek = rozbit(word);
console.log(rozdelek)
var unknown = checker(word);
console.log(unknown)




function pismenkar () {
  var pismen = prompt("Napiš pouze jedno písmeno")
  var correct = false;
  var capital = pismen.toUpperCase();
 if(capital.length===1) {
   correct=true;
   alert(capital)
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
