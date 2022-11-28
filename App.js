let weather = {
    apiKey: "7d7d93a31908dae56920230baaad5469",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.apiKey
        )
        .then((response)=> response.json())
        .then((data)=> this.displayWeather(data));
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        let desc = ""
        if(description === "overcast clouds"){
            desc = "sehr bewölkt";
        }
        if(description ==="few clouds"){
            desc = "leicht bewölkt"
        }
        if(description ==="clear sky"){
            desc = "klarer Himmel"
        }
        if(description ==="scattered clouds"){
            desc = "bewölkt"
        }
        if(description ==="light intensity shower rain"){
            desc = "leichter regenschauer"
        }
        if(description ==="light rain"){
            desc = "leichter regen"
        }
        if(description==="mist"){
            desc="nebel"
        }
        document.querySelector(".city").innerText = "Wetter in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
        document.querySelector(".description").innerText = desc;
        document.querySelector(".temp").innerText = temp + "°C"; 
        document.querySelector(".humidity").innerText = "Luftfeuchtigkeit: " + humidity + "%";
        document.querySelector(".wind").innerText = "Windstärke: " + speed +"km/h"; 
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key =="Enter"){
        weather.search();
    }
})

weather.fetchWeather("Neuruppin")



