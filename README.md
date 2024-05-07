Petteri Tamminen

This is a weather webapp project done for a Javascript basics-course in Laurea University of Applied Sciences.

The app uses Open Wather Map API to tell the weather in different cities. It shows the temperature, wind-speed and humidity.
It also shows local time using TimeApi.

there is a function in the Javascript checkWeather, which locates the city name inputted on div class "search".
It checkes if the city is spelled correctly, if not then it wil display an error message in div class "error" = <p>Invalid City Name<p>
If the city name is correct, it will extract to json the data from Open Weather Api.

I have a console log command to see that the data is truly coming. This was for testing, but I kept to double check that the weather information is updating after each city.

Then I took the latitude and longitude of each city, as I needed it for the TimeApi.
Then i use TimeApi to get the correct local time. This is then shown in the HTML .time - div.

Then the app will update the city name, temperature, humidity and wind speed.
There is also an icon, that needs to be updated based on the weather condition ( rain, clear, etc). This is done with an IF-statement.
I also added that the background image would change based on the weather ( rain = rainy picture, clear = picture of clear sky). This is inside the if-statements.

After the city is correctly inputted, the .weather div of the html will be shown.
If there was an error message, then after correct input the message will be hidden.

In the HTML I have a Search Button, and I have an event listener to see if it is clicked or if someone presses Enter in the searchbox.
This will activate the function checkWeather.



