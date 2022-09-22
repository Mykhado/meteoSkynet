let userChoice;
let ville;
let pays;
let Tminday;
let Tmaxday;
let instantTemp;
let date;
let time;
let previsionNight;
let sunUp;
let sunDown;
let imgMeteoBig;
let conditionClim;
let searchBtn = document.getElementById("btnSearch");
let searchUser = document.getElementById("texte");

// searchBtn.addEventListener("click", () => {
//   userChoice = searchUser.value;
//   console.log(userChoice);
//   fetch(`https://www.prevision-meteo.ch/services/json/${userChoice}`)
//     .then((response) => response.json())
//     .then((data) => {
//       ville = data.city_info.name;
//       pays = data.city_info.country;
//       Tminday = data.fcst_day_0.tmin;
//       Tmaxday = data.fcst_day_0.tmax;
//       instantTemp = data.current_condition.tmp;
//       date = data.current_condition.date;
//       time = data.current_condition.hour;
//       sunDown = data.city_info.sunset;
//       sunUp = data.city_info.sunrise;
//       imgMeteoBig = data.current_condition.icon_big;
//       conditionClim = data.current_condition.condition;

//       let imgTemps = document.getElementById("weatherPic");
//       imgTemps.innerHTML = `<img src="${imgMeteoBig}" alt="">`;
//       let condClim = document.getElementById("condition");
//       condClim.innerHTML = `${ville}, ${pays} ${conditionClim}`;
//       let today = document.getElementById("date-heure");
//       today.innerHTML = `Le ${date} à ${time} `;
//       let temperature = document.getElementById("tempMinMax");
//       temperature.innerHTML = `min: ${Tminday}°  <span id="sizeTemp">${instantTemp}°</span>  max: ${Tmaxday}°`;
//     });
// });

searchUser.addEventListener("change", () => {
  userChoice = searchUser.value;
  console.log(userChoice);
  // alert("test");
  fetch(`https://www.prevision-meteo.ch/services/json/${userChoice}`)
    .then((response) => response.json())
    .then((data) => {
      ville = data.city_info.name;
      pays = data.city_info.country;
      Tminday = data.fcst_day_0.tmin;
      Tmaxday = data.fcst_day_0.tmax;
      instantTemp = data.current_condition.tmp;
      date = data.current_condition.date;
      time = data.current_condition.hour;
      sunDown = data.city_info.sunset;
      sunUp = data.city_info.sunrise;
      imgMeteoBig = data.current_condition.icon_big;
      conditionClim = data.current_condition.condition;

      let imgTemps = document.getElementById("weatherPic");
      imgTemps.innerHTML = `<img src="${imgMeteoBig}" alt="">`;
      let condClim = document.getElementById("condition");
      condClim.innerHTML = `${ville}, ${pays} ${conditionClim}`;
      let today = document.getElementById("date-heure");
      today.innerHTML = `Le ${date} à ${time} `;
      let temperature = document.getElementById("tempMinMax");
      temperature.innerHTML = `min: ${Tminday}°  <span id="sizeTemp">${instantTemp}°</span>  max: ${Tmaxday}°`;
    });
});
