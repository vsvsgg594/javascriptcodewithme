console.log("weather app");


const apiKey="ba36a80127252615cf936adbd2e97b80";
const URL="https://api.openweathermap.org/data/2.5/weather";
const cityName="delhi";

const getWeatherData=async()=>{
    let response=await fetch(URL+cityName+`&appid=${apiKey}`);
    console.log(response);
    let data=await response.json();
    console.log(data);
    console.log(data.status);
}