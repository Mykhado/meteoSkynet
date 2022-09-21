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
let imgMeteo;

fetch("https://www.prevision-meteo.ch/services/json/paris")
  .then((response) => response.json())
  .then((data) => {
    ville = data.city_info.name;
    pays = data.city_info.country;
    Tminday = data.fcst_day_0.tmin;
    Tmaxday = data.fcst_day_0.tmax;
    instantTemp = data.current_condition.tmp;
    date = data.current_condition.date;
    time = data.current_condition.hour;
    previsionNight = data.hourly_data;
    sunDown = data.city_info.sunset;
    sunUp = data.city_info.sunrise;
    imgMeteo = data.current_condition.icon_big;
    console.log(Tmaxday);
  });
