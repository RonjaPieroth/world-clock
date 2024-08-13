function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#Los-Angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small]>"
  );

  // Sydney
  let SydneyElement = document.querySelector("#Sydney");
  let SydneyDateElement = SydneyElement.querySelector(".date");
  let SydneyTimeElement = SydneyElement.querySelector(".time");
  let SydneyTime = moment().tz("Australia/Sydney");
  SydneyDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  SydneyTimeElement.innerHTML = SydneyTime.format(
    "h:mm:ss [<small>]A[</small]>"
  );

  // Paris
  let ParisElement = document.querySelector("#Paris");
  let ParisDateElement = ParisElement.querySelector(".date");
  let ParisTimeElement = ParisElement.querySelector(".time");
  let ParisTime = moment().tz("Europe/Paris");
  ParisDateElement.innerHTML = ParisTime.format("MMMM Do YYYY");
  ParisTimeElement.innerHTML = ParisTime.format("h:mm:ss [<small>]A[</small]>");

  // Tokyo
  let TokyoElement = document.querySelector("#Tokyo");
  let TokyoDateElement = TokyoElement.querySelector(".date");
  let TokyoTimeElement = TokyoElement.querySelector(".time");
  let TokyoTime = moment().tz("Asia/Tokyo");
  TokyoDateElement.innerHTML = TokyoTime.format("MMMM Do YYYY");
  TokyoTimeElement.innerHTML = TokyoTime.format("h:mm:ss [<small>]A[</small]>");
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityId = cityName.replace(" ", "-");
  let CitiesElement = document.querySelector("#cities");

  if (document.querySelector(`#${cityId}`)) {
    return;
  }

  CitiesElement.innerHTML += `<div class="city" id="${cityId}">
      <div>
        <h2>${cityName}</h2>
        <div class="date"></div>
      </div>
      <div class="time">
        <small></small>
      </div>
    </div>`;

  function updateNewTime() {
    let cityTime = moment().tz(cityTimeZone);
    let cityElement = document.querySelector(`#${cityId}`);
    cityElement.querySelector(".date").innerHTML =
      cityTime.format("MMMM Do YYYY");
    cityElement.querySelector(".time").innerHTML = `${cityTime.format(
      "h:mm:ss"
    )} <small>${cityTime.format("A")}</small>`;
  }

  updateNewTime();

  setInterval(updateNewTime, 995);
}

setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
