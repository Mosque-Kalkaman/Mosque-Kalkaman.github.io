var config = {
  apiKey: "AIzaSyBBJGmvppVeVkzDGKkLNKYjBU0m263EhLY",
  databaseURL: "https://mosquewebsite-ab774.firebaseio.com/",
};
firebase.initializeApp(config);
var database = firebase.database();
var newsRef = database.ref('news');
var timeRef = database.ref('time');
var namazRef = database.ref('namaz');
var uagyzRef = database.ref('uagyz');
var makalaRef = database.ref('makala');
var darisRef = database.ref('daris');

$( document ).ready(function() {
})

function add(){
	var url = document.getElementById('url').value
	var date = document.getElementById('date').value
	var header = document.getElementById('header').value
	var contents = $('textarea#contents').val();
	var category = $('#category').find(":selected").text();
	var dataObj = {
		url: url,
		date: date,
		header: header,
		contents: contents
	}
	switch (category) {
	  case "Уағыздар":
	    uagyzRef.push(dataObj)
	    window.location.replace("index.html");
	    break;
	  case "Жаңалықтар":
	    newsRef.push(dataObj)
	    window.location.replace("index.html");
	    break;
	  case "Мақалалар":
	    makalaRef.push(dataObj)
	    window.location.replace("index.html");
	    break;
	  case "Намаз оқып үйрену":
	    namazRef.push(dataObj)
	    window.location.replace("index.html");
	    break;
	  case "Дәрістер":
	    darisRef.push(dataObj)
	    window.location.replace("index.html");
	    break;
	  default:
	    console.log(category);
	}
}

function change(){
	var tan = document.getElementById('tan').value
	var ekinti = document.getElementById('ekinti').value
	var besin = document.getElementById('besin').value
	var aksham = document.getElementById('aksham').value
	var kuptan = document.getElementById('kuptan').value
	var timeObj = {
		tan: tan,
		ekinti: ekinti,
		besin: besin,
		aksham: aksham,
		kuptan: kuptan
	}
	$.when($.when(timeRef.remove()).done(timeRef.push(timeObj))).done(window.location.replace("index.html"))
}