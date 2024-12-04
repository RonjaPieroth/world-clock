function updateTime() {
  let cityElements = document.querySelectorAll(".city");
  cityElements.forEach((cityElement) => {
    let cityId = cityElement.id;
    let cityTimeZone = cityId.replace("_", "/").replace("-", "_");
    let cityTime = moment().tz(cityTimeZone);

    cityElement.querySelector(".date").innerHTML =
      cityTime.format("MMMM Do YYYY");
    cityElement.querySelector(".time").innerHTML = `${cityTime.format(
      "h:mm:ss"
    )} <small>${cityTime.format("A")}</small>`;
  });
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityId = cityTimeZone.replace("_", "-").replace("/", "_");
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
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
