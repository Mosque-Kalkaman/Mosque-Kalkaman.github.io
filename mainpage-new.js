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
//   var newsObject = {
//     img: "https://azan.kz/media/images/5b5aba2ee6f89.jpg"
//     title: "Алматы: ЖАНТ жаңа қарқынмен жұмыс бастады"
//     contents: 'Кеше Алматы қаласы орталық мешіті ғимаратында Қазақстан мұсылмандары діни басқармасы төрағасы, Бас мүфти Серікбай қажы Сатыбалдыұлы хазреттің бастамасымен құрылған жергілікті ақпараттық-насихаттық топ мүшелерінің отырысы өтті. Бас қосуға Алматы қаласы дін істері жөніндегі басқармасының басшысы Айдар Рахымжанұлы және Алматы қаласы орталық мешітінің бас имамы Еркінбек қари Керімбекұлы қатысты. Бас имам Еркінбек қари Шохаев имамдар үнемі көпшілік халықтың ортасында жүретіндігін еске салып, ел мен діннің мүддесін даналықпен, дұрыс насихаттай алу қажеттігін тілге тиек етті. Ал, басқарма басшысы Айдар Рахымжанұлы халық арасында зайырлы мемлекетіміздің ұстанымдарын, дініміздің өркендеуіне жасалып жатқан жағдайларды насихаттаудың маңызы зор екендігін айтты. Жиын соңында Алматы қаласы көлемінде жүргізілетін насихаттық жұмыстардың жоспары бекітіліп, ...
//     date: 17.07.2018
// Толығырақ: https://azan.kz/kz/ahbar/read/almatyi-zhant-zhana-qarqyinmen-zhumyis-bastadyi-11200. Мақалаларды қалай болсын қолдану тек azan.kz сілтемесімен ғана рұқсат етіледі.'
//   }
//   newsRef.push()
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

// undotableRef.limitToLast(1).once("child_added", function(snapshot){
//           var prevtable = snapshot.val().tbl
//           $(prevtable).insertAfter(".fixed");
//           var tableObject = {
//           tbl: partoftbl()
//         } 
//         $.when( tableRef.remove() ).done(tableRef.push(tableObject))
//           checkundo()
//           });