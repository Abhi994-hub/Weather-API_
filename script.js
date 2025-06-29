    function CountryChange() {
        let city = document.getElementById("lbltext").value;
        let Temp = document.getElementById("lsttemp");
        let Country = document.getElementById("lstcountry");
        let Humudity = document.getElementById("percent");
         let Speed = document.getElementById("hour");
         let img= document.querySelector("img");

        fetch(`http://api.weatherapi.com/v1/current.json?key=a2159d8d42db42ae97311511252804&q=${city}&aqi=yes`)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(function (data) {
                Temp.innerHTML = `${data.current.temp_c}°C`;
                      Country.innerHTML = `${data.location.name} <br>  ${data.location.country}`;
                      Humudity.innerHTML = `${data.current.humidity}%`;
                      Speed.innerHTML = `${data.current.wind_kph} km/h`;
                      img.src = `${data.current.condition.icon}`;
            })
            .catch(function (error) {
                console.error("Error fetching weather data:", error);
                Temp.innerHTML = "Error loading temperature";
          
            });
    }