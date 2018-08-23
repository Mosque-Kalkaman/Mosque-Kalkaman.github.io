var config = {
  apiKey: "AIzaSyBBJGmvppVeVkzDGKkLNKYjBU0m263EhLY",
  databaseURL: "https://mosquewebsite-ab774.firebaseio.com/",
};
firebase.initializeApp(config);
var database = firebase.database();
var newsRef = database.ref('uagyz');

$( document ).ready(function() {
	getNews()
})

function getNews(){
	newsRef.once("value", function(items) {
  		items.forEach(function(item){
	        var result = '<div class="added item">' +
	          '<div class="image">' +
	            '<img src="'+ item.val().url+'" style="height: 100%">' +
	          '</div>' +
	          '<div class="content">' +
	            '<a class="header" style="font-size: 20px;">'+ item.val().header +'</a>' +
	            '<div class="meta" style="height: 98px; overflow:hidden; font-size: 16px;">' +
	              '<span>'+item.val().contents+'</span>' +
	            '</div>' +
	            '<div class="extra">' +item.val().date +
	            '</div>' +
	          '</div>' +
	        '</div>'
	        $(result).insertAfter(".fxd");
	  });
  		addEventListener()
	})
}

function addEventListener(){
	var divs = document.getElementsByClassName("added item");
	var i;
	for (i = 0; i < divs.length; i++) {
	    divs[i].children[1].children[0].addEventListener("click", function() {
	        var url = this.parentNode.parentNode.children[0].children[0].getAttribute('src')
			var header = this.parentNode.parentNode.children[1].children[0].innerHTML
			var contents = this.parentNode.parentNode.children[1].children[1].children[0].innerHTML
			var date = this.parentNode.parentNode.children[1].children[2].innerHTML
			if(typeof(Storage)!=="undefined"){
			    localStorage.date = date
			    localStorage.contents = contents
			    localStorage.header = header
			    localStorage.url = url
		    } else {
		    	console.log("Sorry, your browser does not support web storage...")
		    }
		    var win = window.open("view.html", '_blank');
		    win.focus();
			});
	}
}

