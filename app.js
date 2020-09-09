/* Global Variables */
const apiURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
// Personal API Key for OpenWeatherMap API
const apiKey = '&appid=476f9387af11e5cedb5f2c92c7500d6f&units=metric';
// Event listener to add function to existing HTML DOM element
document.querySelector('#generate').addEventListener('click',bringData)
/* Function called by event listener */
function bringData(){
    const zipCode = document.querySelector('#zip').value;
    weather(apiURL,zipCode,apiKey); 
    
};
/* Function to GET Web API Data*/
const weather = async (url,zip,key) =>{ 
    const res = await fetch(url+zip+key)
    try {
        const data = await res.json();
        console.log(data);
        getData(data);
    }
    catch{
        console.log('error',error);
    } 
};

/* Function to GET Project Data */
function getData (Data){
        document.getElementById('date').textContent= `Date: ${d}`;
        document.getElementById('city').textContent= `${Data.name},${Data.sys.country}`;
        document.getElementById('tempMax').textContent= `Max temprature : ${Data.main.temp_max} C`;
        document.getElementById('temp').textContent= `Temprature : ${Data.main.temp} C`;
        document.getElementById('tempMin').textContent= `Min temprature : ${Data.main.temp_min} C`;
        document.getElementById('feelLike').textContent= `Feels like : ${Data.main.feels_like} C`;
        document.getElementById('wind').textContent= `Wind speed : ${Data.wind.speed} Km/h`;
};