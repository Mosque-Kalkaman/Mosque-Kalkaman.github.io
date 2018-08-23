$( document ).ready(function() {
	populate()
})

function populate(){
	if(typeof(Storage)!=="undefined" && localStorage.date && localStorage.contents && localStorage.header && localStorage.url)
        {
        document.getElementById('span').innerHTML = localStorage.contents
		document.getElementById('newsHeader').innerHTML = localStorage.header
		$("#img").attr("src", localStorage.url);
		document.getElementById('date').innerHTML = localStorage.date
		document.title = localStorage.header
        }
      else
        {
        console.log("Sorry, your browser does not support web storage...")
        }
}