//include data.js so our aboutMe variable information is available to us.
Ti.include('data.js');

var window1 = Titanium.UI.createWindow({
    backgroundColor: '#FFF',
    title: 'Final Project VFW' 
});

//first item in my json data 
var buttonQ1 = Titanium.UI.createButton
({
    title:aboutMe['question1'],
    text:aboutMe['name'],
	color: "#000",
	font: {fontSize: 14, fontFamily: "Arial", fontWeight: "bold"},
	backgroundColor:'#f1f1f1',
	top: 35,
	width: 290,
	height: 30,
});

buttonQ1.addEventListener('click', function(e){
alert(e.source.text);
 
});
// end of first object for json tested and is working properly
var buttonQ2 = Titanium.UI.createButton
({
    title:aboutMe['question2'],
    text:aboutMe['userName'],
	color: "#000",
	font: {fontSize: 14, fontFamily: "Arial", fontWeight: "bold"},
	backgroundColor:'#f1f1f1',
	top: 70, //created 5px between each button
	width: 290,
	height: 30
});

buttonQ2.addEventListener('click', function(e){
alert(e.source.text);
 
});
//starting the rest of my button with json data attached 
var buttonQ3 = Titanium.UI.createButton
({
    title:aboutMe['question3'],
    text:aboutMe['timeZone'],
	color: "#000",
	font: {fontSize: 14, fontFamily: "Arial", fontWeight: "bold"},
	backgroundColor:'#f1f1f1',
	top: 105,
	width: 290,
	height: 30
});

buttonQ3.addEventListener('click', function(e){
alert(e.source.text);
 
});

var buttonQ4 = Titanium.UI.createButton
({
    title:aboutMe['question4'],
    text:aboutMe['explanation'],
	color: "#000",
	font: {fontSize: 14, fontFamily: "Arial", fontWeight: "bold",},
	backgroundColor:'#f1f1f1',
	top: 140,
	width: 290,
	height: 30
});

buttonQ4.addEventListener('click', function(e){
alert(e.source.text);
 
});

var buttonQ5 = Titanium.UI.createButton
({
    title:aboutMe['question5'],
    text:aboutMe['javaComfort'],
	color: "#000",
	font: {fontSize: 14, fontFamily: "Arial", fontWeight: "bold"},
	backgroundColor:'#f1f1f1',
	top: 175,
	width: 290,
	height: 30
});

buttonQ5.addEventListener('click', function(e){
alert(e.source.text);
 
});
var buttonQ6 = Titanium.UI.createButton
({
    title:aboutMe['question6'],
    text:aboutMe['titaniumComfort'],
	color: "#000",
	font: {fontSize: 14, fontFamily: "Arial", fontWeight: "bold", textAlign: 'left'},
	backgroundColor:'#f1f1f1',
	top: 175,
	width: 290,
	height: 30
});

buttonQ6.addEventListener('click', function(e){
alert(e.source.text);
 
});
var buttonQ7 = Titanium.UI.createButton
({
    title:aboutMe['question7'],
    text:aboutMe['favFood'],
	color: "#000",
	font: {fontSize: 14, fontFamily: "Arial", fontWeight: "bold", textAlign: 'left'},
	backgroundColor:'#f1f1f1',
	top: 245,
	width: 290,
	height: 30
});

buttonQ7.addEventListener('click', function(e){
alert(e.source.text);
 
});
var buttonQ8 = Titanium.UI.createButton
({
    title:aboutMe['question8'],
    text:aboutMe['favColor'],
	color: "#000",
	font: {fontSize: 14, fontFamily: "Arial", fontWeight: "bold"},
	backgroundColor:'#f1f1f1',
	top: 210,
	width: 290,
	height: 30
});

buttonQ8.addEventListener('click', function(e){
alert(e.source.text);
 
});
var buttonQ9 = Titanium.UI.createButton
({
    title:aboutMe['question9'],
    text:aboutMe['favSport'],
	color: "#000",
	font: {fontSize: 14, fontFamily: "Arial", fontWeight: "bold"},
	backgroundColor:'#f1f1f1',
	top: 245,
	width: 290,
	height: 30
});

buttonQ9.addEventListener('click', function(e){
alert(e.source.text);
 
});
var buttonQ10 = Titanium.UI.createButton
({
    title:aboutMe['question10'],
    text:aboutMe['familyDesc'],
	color: "#000",
	font: {fontSize: 14, fontFamily: "Arial", fontWeight: "bold"},
	backgroundColor:'#f1f1f1',
	top: 280,
	width: 290,
	height: 30
});

buttonQ10.addEventListener('click', function(e){
alert(e.source.text);
 
});

var buttonQ11 = Titanium.UI.createButton
({
    title:aboutMe['question11'],
    text:aboutMe['work'],
	color: "#000",
	font: {fontSize: 14, fontFamily: "Arial", fontWeight: "bold"},
	backgroundColor:'#f1f1f1',
	top: 315,
	width: 290,
	height: 30
});

buttonQ11.addEventListener('click', function(e){
alert(e.source.text);
 
});


	

window1.add(buttonQ1,buttonQ2,buttonQ3,buttonQ4, buttonQ5,buttonQ6,
	buttonQ7,buttonQ8,buttonQ9,buttonQ10,buttonQ11);

window1.open();







