let weather = {
    "apiKey": "92af1eccf5fdaf8ac710bf76057b844c",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=92af1eccf5fdaf8ac710bf76057b844c")
            .then((response) => response.json())
            //.then((data) => console.log(data))
            .then((data) => this.displayWeather(data));
    },

    displayWeather: function (data) {
        const { name } = data;
        const { country, sunrise, sunset } = data.sys;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { temp_max, temp_min } = data.main;
        // console.log(name, icon, description, temp, humidity, speed);
        document.getElementById("country").innerText = name + ", " + country + ".";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerHTML = description;

        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed : " + speed + " km/h";
        document.querySelector(".max").innerText = temp_max + "°C";
        document.querySelector(".min").innerText = temp_min + "°C";
        document.querySelector(".rise").innerText = sunrise;
        document.querySelector(".set").innerText = sunset;



        document.querySelector(".weather").classList.remove("loading");

        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + ",landmarks')"
    },

    search: function () {
        this.fetchWeather(document.querySelector(".Search-Bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});


document.querySelector(".Search-Bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

//weather.fetchWeather("Bhilwara");