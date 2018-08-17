var config = {
  apiKey: "AIzaSyBBJGmvppVeVkzDGKkLNKYjBU0m263EhLY",
  databaseURL: "https://mosquewebsite-ab774.firebaseio.com/",
};
firebase.initializeApp(config);
var database = firebase.database();
var newsRef = database.ref('news');
var timeRef = database.ref('time');

$( document ).ready(function() {
	getNews()
	getTimes()
})

function getNews(){
	newsRef.limitToLast(1).once("child_added", function(snapshot){
		document.getElementById('span').innerHTML = snapshot.val().contents
		document.getElementById('newsHeader').innerHTML = snapshot.val().header
		$("#img").attr("src", snapshot.val().url);
		document.getElementById('date').innerHTML = snapshot.val().date
        });
}

function getTimes(){
	timeRef.limitToLast(1).once("child_added", function(snapshot){
		document.getElementById('td1').innerHTML = snapshot.val().tan
		document.getElementById('td2').innerHTML = snapshot.val().besin
		document.getElementById('td3').innerHTML = snapshot.val().ekinti
		document.getElementById('td4').innerHTML = snapshot.val().aksham
		document.getElementById('td5').innerHTML = snapshot.val().kuptan
        });
}

$('#newsHeader').click(function () {
	var date = document.getElementById('date').innerHTML
	var contents = document.getElementById('span').innerHTML
	var header = document.getElementById('newsHeader').innerHTML
	var url = document.getElementById('img').getAttribute('src')
	if(typeof(Storage)!=="undefined")
    {
    localStorage.date = date
    localStorage.contents = contents
    localStorage.header = header
    localStorage.url = url
    }
  else
    {
    console.log("Sorry, your browser does not support web storage...")
    }
    var win = window.open("view.html", '_blank');
    win.focus();
});