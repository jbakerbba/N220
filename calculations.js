//1
var ticketNum = 2;
var ticketCost = 14.00;
var totalTicketCost = ticketNum * ticketCost;

document.getElementById('ticketNum').innerHTML = "Tickets" + " " + ticketNum;
document.getElementById('ticketCost').innerHTML= "Cost: $" + ticketCost;
document.getElementById('ttCost').innerHTML= "Total: $" + ticketCost * ticketNum;

//2
var AccountNum = 235.87;
var Sweater = 55;
var Pants = 75;
var Shoes = 60;
var Jacket = 70;

var Outfit = Sweater + Pants + Shoes + Jacket;
document.getElementById("Outfit").innerHTML = (AccountNum > Outfit);


var pizza = 4;
var studentEats = 2.5;
var pizzaSlices = 8;
var totalpizza = pizzaSlices * pizza / studentEats;
var a = Math.floor(totalpizza);

document.getElementById("profPizza").innerHTML = Math.floor(12.8) + " students";

let aBuffet = 12;
let cBuffet = 6;
let drinks = 1.50;
let montyRec = aBuffet + aBuffet + cBuffet + drinks + drinks + drinks;
document.getElementById("Monty").innerHTML = "$" + montyRec;

let week1 = 202.45;
let week2 = 134.97;
let week3 = 256.63;
let week4 = 178.22;
let weekTotal = week1 + week2 + week3 + week4;
let numWeeks = 4
let totalTip = weekTotal / numWeeks;
let finalTip = totalTip.toFixed(2)
document.getElementById("tips").innerHTML = "$" + finalTip;








