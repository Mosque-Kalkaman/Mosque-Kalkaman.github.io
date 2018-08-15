var config = {
  apiKey: "AIzaSyBBJGmvppVeVkzDGKkLNKYjBU0m263EhLY",
  databaseURL: "https://mosquewebsite-ab774.firebaseio.com/",
};
firebase.initializeApp(config);
var database = firebase.database();
var newsRef = database.ref('news');

$( document ).ready(function() {
	getNews()
})

function getNews(){
	newsRef.once("value", function(items) {
  		items.forEach(function(item){
	        var result = '<div class="item">' +
	          '<div class="image">' +
	            '<img src="'+ item.val().url+'" style="height: 100%" id="img">' +
	          '</div>' +
	          '<div class="content">' +
	            '<a class="header" style="font-size: 20px;" id="newsHeader">'+ item.val().header +'</a>' +
	            '<div class="meta" style="height: 98px; overflow:hidden; font-size: 16px;">' +
	              '<span id="span">'+item.val().contents+'</span>' +
	            '</div>' +
	            '<div class="description">' +
	              '<p></p>'+
	            '</div>'+
	            '<div class="extra" id="date">' +item.val().date +
	            '</div>' +
	          '</div>' +
	        '</div>'
	        $(result).insertAfter(".fxd");
	  });
	})
}