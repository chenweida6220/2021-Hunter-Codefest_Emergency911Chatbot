fetch("https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=c489ceffdd060a5188d47d82d13318f3").then(response => {
  return response.json()
}).then(jsondata => {
  const tempEl = document.getElementsByClassName("temp");
  const tempF = Math.trunc((jsondata.main.temp - 273.15) * 9 / 5 + 32)
  tempEl[0].innerHTML = tempF + " F";
})


// fetch("https://something", {
//   headers: {
//     "Authentication": "apikey"
//   },
//   method: "GET",
// }).then((res) => { //runs if fetch worked. var is the object
//   return res.json()
// }).catch((err) => { // runs if fetch did not work 

// })