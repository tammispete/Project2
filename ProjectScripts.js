const apiKey = "fcc15d865deec54546779ddc1191025e"; // my Api key
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; // add API URL, q= would be city name

const searchBox = document.querySelector(".search input"); // select the search input field ( city name)
const searchBtn = document.querySelector(".search-btn"); // find the search button for an eventlistener
const weatherIcon = document.querySelector(".weather-icon"); // find the weather-icon class to update the icon later




async function checkWeather(city){ //asynchronous function checkWheater
    const response = await fetch(apiURL + city + `&appid=${apiKey}`); // send fetch request to my apiURL + the city + my apiKey
    if(response.status == 404){ // if the city name is invalid, it will be 404 
        document.querySelector(".error").style.display = "block"; // CSS stylings we have hidden the div .error by default, no display "block"
        document.querySelector(".weather").style.display = "none"; // hide weather information if there is a previous weather there
    } else {
        var data = await response.json(); // extract json data from the response of the fetch request

    console.log(data); // just check the data in the console to make sure it gets right data

    const latitude = data.coord.lat; // get latitude for time-search
    const longitude = data.coord.lon; // get longitude for time
    const timeApiUrl = `https://www.timeapi.io/api/Time/current/coordinate?latitude=${latitude}&longitude=${longitude}`; // use timeapi with lat and longitude to get local time

    fetch(timeApiUrl) // fetch api
        .then(response => response.json()) // get response and fromat to json
        .then(timeData => { //extract json data from the response
            const time = timeData.time; //get time from response data

            document.querySelector(".time").innerHTML = time; // update the content of .time div
        })    

    document.querySelector(".city").innerHTML = data.name; //update the city name to h2 class = "city"
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C"; // update the temperature to the h1 class = "temp", round it to a full integer
    document.querySelector(".humidity").innerHTML = data.main.humidity +" %"; // update the humidity to the p class = "humidity"
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"; // update the wind to the p class ="wind"    

    /*Following if-statement will not have code on each line. I will explain here
    if statement to find what type of weather is there in the city from path data.weather[0].main. 
    weather[0].main options: "Clouds", "Clear", "Rain", "Drizzle", "Mist", "Snow", "Thunderstrom", "Haze", "Dust", "Fog", "Sand", "Ash","Squall" and "Tornado".
    Each weather option will change: weatherIcon image to correct icon saved in images folder.
    Html Body background image to correct image, used URLs for these.
    Then backgroundRepeat no repeat to make sure there is only one image. 
    BackgroundAttachment to make sure the element is always covered.
    BackgroundSize to cover the entire element.   */
    if(data.weather[0].main == "Clouds"){ 
        weatherIcon.src = "images/clouds.png";     
        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2015/12/25/13/03/sky-1107579_1280.jpg)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
    } else if ( data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618_1280.jpg)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
    } else if ( data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";   
        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2017/08/18/13/04/glass-2654887_1280.jpg)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";     
    } else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
        document.body.style.backgroundImage = "url(https://media.istockphoto.com/id/1823957410/fi/valokuva/puiset-p%C3%B6yd%C3%A4t-ja-tuolit-ulkona-puutarhassa-sateen-alla.jpg?s=2048x2048&w=is&k=20&c=zM7JeMcQsGF4vyZR15UA_W0KL3_g82F8YNCh9DBei6I=)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
    } else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2014/12/15/13/18/road-569044_1280.jpg)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
    } else if (data.weather[0].main == "Snow"){
        weatherIcon.src ="images/snow.png";
        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2021/11/30/17/06/tree-6835828_1280.jpg)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
    } else if (data.weather[0].main == "Thunderstorm"){
        weatherIcon.src = "images/thunderstorm.png"
        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/01/23/20/43/lightning-1158027_1280.jpg)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
    } else if (data.weather[0].main == "Haze"){
        weatherIcon.src = "images/haze.png";
        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2021/03/08/17/08/fog-6079632_1280.jpg)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
    } else if (data.weather[0].main == "Dust"){
        weatherIcon.src = "images/dust.png";
        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2022/08/21/02/26/road-7400333_1280.jpg)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
    } else if (data.weather[0].main == "Fog"){
        weatherIcon.src = "images/fog.png";
        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2020/07/19/21/50/forest-5421362_1280.jpg)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
    } else if (data.weather[0].main == "Sand"){
        weatherIcon.src = "images/sand.png";
        document.body.style.backgroundImage = "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.marcadamus.com%2Fimages%2Fxl%2FWind-and-Light.jpg&f=1&nofb=1&ipt=4dc59b52254e57d67406a2b056512a527ba4f62f6710e11942375823beb49fcb&ipo=images)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
    } else if (data.weather[0].main == "Ash"){
        weatherIcon.src = "images/ash.png";
        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/11/29/05/02/ashes-1867440_1280.jpg)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
    } else if (data.weather[0].main == "Squall"){
        weatherIcon.src = "images/squall.png";
        document.body.style.backgroundImage = "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fadaderanaenglish.s3.amazonaws.com%2F1565579275-Sudden-increase-in-wind-speed-possible-B.jpg&f=1&nofb=1&ipt=8f2f43c998d6500b1c58b98fe6cd43039b419cd3200f76644d84d7f7ba5d429d&ipo=images)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
    } else if (data.weather[0].main == "Tornado"){
        weatherIcon.src = "images/tornado.png";
        document.body.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2023/12/11/14/35/storm-8443707_1280.jpg)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "cover";
    }

    document.querySelector(".weather").style.display = "block"; // div .weather on css-settings display "none" on page load. After entering city, this will show.
    document.querySelector(".error").style.display = "none"; //  error message will be hidden if a correct city input is entered
    

    }
    
}
searchBtn.addEventListener("click", ()=>{  //onclick of the search button
    checkWeather(searchBox.value); //call function checkWeather to display weather information, .value will get the city name
    })

searchBox.addEventListener("keypress", function(event) { // on keypress of searchBox
    if (event.key === 'Enter') { //if they press Enter
            checkWeather(searchBox.value); // call function checkWeahter to display weather information, .value wil get the city name
        }
    });

