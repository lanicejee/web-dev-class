//AJAX

const dataRequest = new XMLHttpRequest();

dataRequest.addEventListener("load", transferComplete);

dataRequest.open("GET", "https://data.cityofnewyork.us/resource/waf7-5gvc.json", true); //opening a new request to a website
dataRequest.send();

function transferComplete(evt) {
  console.log(evt);
  console.log("The transfer is complete.");
  console.log(JSON.parse(dataRequest.response));
  document.querySelector("#data-back").innerText = dataRequest.response;
}
// what comes back from the other website is stored in the response property

//promises. alternative to callbacks. how fetch is built. makes getting data
//back easier.
function isGreaterThan100(number) {
  return new Promise(function(resolve, reject) {
    if (number > 100) {
      resolve(number);
    }
    else {
      reject(number);
    }
  });
}

isGreaterThan100(120)
  .then(num) => {})
  .catch(num) => {})
