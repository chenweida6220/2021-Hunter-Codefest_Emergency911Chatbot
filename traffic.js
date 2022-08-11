import tt from 'services.min.js'

fetch("https://api.tomtom.com/map/1/tile/basic/main/0/0/0.png?view=Unified&key=Pvev2gKKBWO1ZVR8l37u7wKAJCRGi8vH").then(response => {
  console.log("data fetched!");
  return response.json()
}).then(jsondata => {
  console.log("data fetched!");
   const trafficEl = document.getElementsByClassName("traffic");
  // const tempF = Math.trunc((jsondata.main.temp - 273.15) * 9 / 5 + 32)
   trafficEl.innerHTML = "pressed";
}).catch((err) => { // runs if fetch did not work 
  consolr.log(err);
 })

