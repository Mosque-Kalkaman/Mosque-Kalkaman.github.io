var config = {
  apiKey: "AIzaSyBBJGmvppVeVkzDGKkLNKYjBU0m263EhLY",
  databaseURL: "https://mosquewebsite-ab774.firebaseio.com/",
};
firebase.initializeApp(config);
var database = firebase.database();
var loginRef = database.ref('login');

$( document ).ready(function() {
})

// function populate(){
// 	var accountObj = {
// 		id: "imam",
// 		password: "4shipLea2"
// 	}
// 	loginRef.push(accountObj)
// }

function login(){
	var id = document.getElementById('idInput').value
	var password = document.getElementById('passwordInput').value
	var dbId = ""
	var dbPassword = ""
	loginRef.once("value", function(accounts) {
  		accounts.forEach(function(account){
  			dbId = account.val().id
  			dbPassword = account.val().password
        if (id == dbId && password == dbPassword){
          window.location.replace("add.html");
        } 
  		});
  	});
}