(()=>{"use strict";const e=async function(e){const t=`https://api.openweathermap.org/data/2.5/weather?q=${e}&units=metric&appid=16a50d27801abc5eeadd8407d3badd1a`;try{const n=await fetch(t,{mode:"cors"});if(!n.ok)throw new Error(`City ${e} not found!`);return function(e){const{name:t,main:{temp:n,feels_like:a,humidity:r},wind:{speed:d}}=e;return{cityName:t,temperature:n,feelsLike:a,humidity:r,windSpeed:d}}(await n.json())}catch(e){return alert(e),null}},t=function(e){if(!e)return;document.querySelector("[data-search-results]").classList.add("active");const t=document.querySelector("[data-city-name]"),n=document.querySelector("[data-temperature]"),a=document.querySelector("[data-feels-like]"),r=document.querySelector("[data-humidity]"),d=document.querySelector("[data-wind]");t.textContent=`${e.cityName}`,n.textContent=`${e.temperature} °C`,a.textContent=`Feels like: ${e.feelsLike} °C`,r.textContent=`Humidity: ${e.humidity} %`,d.textContent=`Wind: ${e.windSpeed} km/h`},n=document.getElementById("searchForm"),a=document.getElementById("searchInput"),r=document.querySelector("[data-search-btn]");n.addEventListener("submit",(e=>{e.preventDefault()})),r.addEventListener("click",(async()=>{if(""===a.value)return;const n=await e(a.value);t(n)}))})();