# stock-app
Stock app

# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Sep 10th| Project Approval - Start Pseudocode | Incomplete
|Sep 11th| Finish pseudocode - start actual structure code  | Incomplete
|Sep 12th| Finish structure code - Start logic | Incomplete
|Sep 13th| Finish logic - Make pretty | Incomplete
|Sep 14th| Finishing style touches - No major changes  | Incomplete
|Sep 15th| Emergency last day to finish | Incomplete
|Sep 16th| Presentation Day! | Incomplete


## Project Description

Web app where users who are new to investing can search for companies and recieve easily digestable information on said company to help them decide if they should invest or not.

## Wireframes

https://wireframe.cc/s7Pm9J
https://wireframe.cc/CB33kB
https://wireframe.cc/DBs7LP

## Priority Matrix

https://wireframe.cc/0fQuPj

## API Data Sample
```
{
quote: {
symbol: "DIS",
companyName: "The Walt Disney Co.",
primaryExchange: "New York Stock Exchange",
calculationPrice: "tops",
open: null,
openTime: null,
close: null,
closeTime: null,
high: null,
low: null,
latestPrice: 137.165,
latestSource: "IEX real time price",
latestTime: "12:41:46 PM",
latestUpdate: 1568133706445,
latestVolume: null,
iexRealtimePrice: 137.165,
iexRealtimeSize: 100,
iexLastUpdated: 1568133706445,
delayedPrice: null,
delayedPriceTime: null,
extendedPrice: null,
extendedChange: null,
extendedChangePercent: null,
extendedPriceTime: null,
previousClose: 138.83,
previousVolume: 5458689,
change: -1.665,
changePercent: -0.01199,
volume: null,
iexMarketPercent: 0.03250609895150537,
iexVolume: 81106,
avgTotalVolume: 8926311,
iexBidPrice: 135.74,
iexBidSize: 1000,
iexAskPrice: 137.19,
iexAskSize: 100,
marketCap: 247086287700,
peRatio: 17.21,
week52High: 147.15,
week52Low: 100.35,
ytdChange: 0.26203,
lastTradeTime: 1568133706445,
isUSMarketOpen: true
}
```


### MVP/PostMVP - 5min

MVP: 
- Searchable company
- Search gives back company info, simple stock info, and news

PostMVP:
-Impliment Social Media for added insight 

#### MVP 

- Find and use external api 
- Render data on page 

#### PostMVP 

- Add second API
- Use local storage to save user favorites
-compare companies


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Design and Pseudocode | H | 3hrs| :---: | :---: |
| Structure | H | 4hrs| :---: | :---: |
| Logic | H | 5hrs| :---: | :---: |
| Design | M | 3hrs| :---: | :---: |
| Total | H | 15hrs| :---: | :---: |


## Code Snippet

Created weather page logic that worked 

const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=";
const api_key = '&appid=917bf4e0048026b0f2e48ce18b73c131';

const body = document.body
const city = document.querySelector(".city")
const currentTemp = document.querySelector(".current-temp")
const minTemp = document.querySelector(".min-temp")
const maxTemp = document.querySelector(".max-temp")
const description = document.querySelector(".description")


getWeather('');
async function getWeather(zipCode) {
    console.log(zipCode)
   try {
       let response = await axios.get(
           `${weatherUrl}${zipCode}${api_key}`
       );
       console.log(response.data)
       let weatherInfo = response.data
       city.innerHTML = `${weatherInfo.name}, ${zipCode}`
       currentTemp.innerHTML = `Current Temperature: ${weatherInfo.main.temp}`
       minTemp.innerHTML = `Min Temperature: ${weatherInfo.main.temp_min}`
       maxTemp.innerHTML = `Max Temperature: ${weatherInfo.main.temp_max}`
       description.innerHTML = `Weather Description: ${weatherInfo.weather[0].description}`
        console.log(weatherInfo.main.temp)
       if (weatherInfo.main.temp > 90) {
           currentTemp.classList.add("hot")
           currentTemp.classList.remove("cold")
       } else if (weatherInfo.main.temp < 40) {
        currentTemp.classList.add("cold")
        currentTemp.classList.remove("hot")
       } else {
        currentTemp.classList.remove("cold")
        currentTemp.classList.remove("hot")
       }
   } catch (error) {
    //console.log(error);
   }
}

let searchBar = document.getElementById("weather-form");
searchBar.addEventListener('submit', function(event) {
    event.preventDefault();
    var text = document.getElementById("zipCode").value;
    getWeather(text);
})


## Change Log
 No changes (yet).
