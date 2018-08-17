if(typeof(Storage)!=="undefined")
    {
    localStorage.lastname="Smith";
    document.getElementById("notes").innerHTML="Last name: " + localStorage.lastname;
    }
  else
    {
    document.getElementById("notes").innerHTML="Sorry, your browser does not support web storage...";
    }

function myclick(){
    window.location.replace("ex2.html");
  }