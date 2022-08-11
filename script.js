var cprEl = document.getElementById("cpr-el")
var mentalHealthEl = document.getElementById("mentalHealth-el")
var text911El = document.getElementById("text911-el")
var localTrafficEl = document.getElementById("localTraffic-el")
var weatherEl = document.getElementById("weather-el")

redirectPage(cprEl,"cpr","CPR Instructions")
redirectPage(mentalHealthEl,"mentalHealth","Mental Health Services")
redirectPage(text911El,"emergency911","Emergency Text 911")
redirectPage(localTrafficEl,"localTraffic","Local Traffic")
redirectPage(weatherEl,"weather","Weather Conditions")

function redirectPage(element,htmlfile,title){
  if (element){
    element.addEventListener("click",function(){
      console.log("Script.js Message: You clicked on "+title)
      window.location.replace(`${htmlfile}.html`)
    })
  }
}

function getFormInput() {
  var formContent = document.getElementById('trafficTester');
  var welcomeMsg = document.getElementById('welcome');
  var name = document.getElementById('trafficInput');

  welcomeMsg.innerHTML = "Welcome " + name.value + ".<br/>";

  // removes the form text input box after the name has been submitted
  formContent.innerHTML = "";
  return name.value
}

// traffic
// const API_KEY = "SQpP4NGOARZI5MNlAjfSwvPOu8X5nhtj"

// weather
// const weather_key = "c489ceffdd060a5188d47d82d13318f3"

// console.log(data[0])
// for (var i in data){
//   console.log(i)
// }

// // get File Object  
// var fileObject = getFile("data.json");

// // reCreate new Object and set File Data into it
// var data  = {
//         "id": 833,
//         "name": "Ḩeşār-e Sefīd",
//         "state": "",
//         "country": "IR",
//         "coord": {
//             "lon": 47.159401,
//             "lat": 34.330502
// }
 
// // then use JSON.stringify on new object
// JSON.stringify(data)
// var json=[]
// fetch("./data.json").then(response => { return response.json()}).then(jsondata => console.log(jsondata))