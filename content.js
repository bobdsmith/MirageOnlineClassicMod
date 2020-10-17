document.querySelector("#winPlayer > div:nth-child(1) > img").src=chrome.extension.getURL('header.png'); 
document.querySelector("#winPlayer > div:nth-child(1) > img").title="BOOBAGE ONLINE CLASSIC";
document.querySelector("#winLogin > div:nth-child(1) > img").src=chrome.extension.getURL('header.png'); 
document.querySelector("#winLogin > div:nth-child(1) > img").title="BOOBAGE ONLINE CLASSIC";
let average = (array) => array.reduce((a, b) => a + b) / array.length;

var textXP = document.querySelector("#txtXP").textContent;
var textXPLastCheck = textXP.split("/")[0];
var textXPFirstHalf = textXP.split("/")[0];
var listOfTicks = [0,0,0,0,0,0,0,0,0,0]


window.setInterval(function(){
	textXP = document.querySelector("#txtXP").textContent;
	textXPFirstHalf = textXP.split("/")[0];
	listOfTicks.shift()
	listOfTicks.push(Number.parseInt(textXPFirstHalf, 10) - Number.parseInt(textXPLastCheck, 10));
	document.querySelector("#txtXP").textContent = textXP.split("+")[0] + "+" + average(listOfTicks);
	textXPLastCheck = textXP.split("/")[0];
},	1000);

window.setInterval(function(){
	textXP = document.querySelector("#txtXP").textContent;
	document.querySelector("#txtXP").textContent = textXP.split("+")[0] + "+" + average(listOfTicks);
},	100);

document.title = "Boobage online classic"
