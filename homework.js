 let weather = {
 "paris": {
    temp: 19.7,
    humidity: 80
  },
  "tokyo": {
    temp: 17.3,
    humidity: 50
  },
  "lisbon": {
    temp: 30.2,
    humidity: 20
  },
  "sanFrancisco": {
    temp: 20.9,
    humidity: 100
  },
  "moscow": {
    temp: -5,
    humidity: 20
  }
};
weather.paris.temp = Math.round(weather.paris.temp)
weather.tokyo.temp = Math.round(weather.tokyo.temp)
weather.lisbon.temp = Math.round(weather.lisbon.temp)
weather.moscow.temp = Math.round(weather.moscow.temp)
weather.sanFrancisco.temp = Math.round(weather.sanFrancisco.temp)

let city = prompt("Enter a city:");
city=city.trim(),
city=city.toLowerCase();
if (city === "paris") 
{
    alert 
    (
        `The current temperature in ${city} is ${weather.paris.temp} degrees with a humidity of ${weather.paris.humidity}.`
        )
}
if (city === "tokyo")
{
    alert 
    (
        `The current temperature in Tokyo is ${weather.tokyo.temp} degrees with a humidity of ${weather.tokyo.humidity}.`
        )
}
if (city === "lisbon") 
{
    alert 
    (
        `The current temperature in Lisbon is ${weather.lisbon.temp} degrees with a humidity of ${weather.lisbon.humidity}.`
        )
}
if (city === "moscow") 
{
    alert 
    (
        `The current temperature in Moscow is ${weather.moscow.temp} degrees with a humidity of ${weather.moscow.humidity}.`
        )
}
if (city === "san francisco") 
{
    alert 
    (
        `The current temperature in San Francisco is ${weather.sanFrancisco.temp} degrees with a humidity of ${weather.sanFrancisco.humidity}.`
        )
}
else {
    alert ("Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+" + city)};
