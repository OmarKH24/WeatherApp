window.addEventListener('load', function(){

    document.getElementById('full-content').classList.add('show');
    document.getElementById('ld').classList.add('hide');
})


/*_____________________________ Get Data _______________________________*/

gd(6693674);   

var result
var citydet;
var det;
var val = 282239;
var cit;

const selectElement = document.getElementById("group");


selectElement.addEventListener("change", (event) => {
    cit = event.target.value;
    if (cit == "Ramallah - PS"){

        val = 6693674;
    }
    else if(cit == "London - GB"){

        val = 2643743;
    }
    else if(cit == "Madrid - ESP"){

        val = 3117735;
    }
    else if(cit == "Berlin - DE"){

        val = 2950159;
    }
    else if(cit == "Ankara - TUR"){

        val = 323786;
    }
    gd(val);   
});


async function gd(val){

    await getData(val);
}

async function getData(val){

var response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${val}&appid=2adaf5d0a3ee58d8fe2b1468ddf8c184`); 
result = await response.json();
citydet = result.city;
det = result.list[0];

displayData();

}


//gd(val);

/*_________________________________________________________________________*/
/*_____________________________  Details _______________________________*/



function displayData(){


/* City Det*/
    //City..
    /*var city = document.getElementById("city");
    city.innerHTML = citydet.name;*/

    //Date ..
    var date = document.getElementById("date");
    date.innerHTML = det.dt_txt;
/* ------------------------------------ */
 /* Temp Det*/
    //Weather icon
    var wimg = document.getElementById("w-img");
    var iconname = det.weather[0].icon;
    var ans =`
    
    <img alt="w-icon" src="assets/imgs/${iconname}.png">
    `;
    wimg.innerHTML = ans;

    //Weather-Text
    var wtext = document.getElementById("wea-text");
    wtext.innerHTML = det.weather[0].main;

    //Weather-Details
    var wdetails = document.getElementById("wea-det");
    wdetails.innerHTML = det.weather[0].description;

    //Degree-Details
    var deg = document.getElementById("deg");
    var temp = det.main.temp;
    temp = temp - 273.15;
    temp = Math.round(temp);

    var tempLike = det.main.feels_like;
    tempLike = tempLike - 273.15;
    tempLike = Math.round(tempLike);
    var degResult = `

    <h2 id="deg">${temp}°C</h2>
    <p id="deg-like">Feels Like <span>${tempLike}°C</span></p>
    `;
    deg.innerHTML = degResult;
 /* ------------------------------------ */
 /* details Det*/
    //Wind
    var wind = document.getElementById("wind");
    var spd = det.wind.speed;
    var wResult = `
        ${spd} Km/h
    `;
    wind.innerHTML = wResult;

    //Pressure
    var pres = document.getElementById("pres");
    var pressure = det.main.pressure;
    var pResult = `
        ${pressure}
    `;
    pres.innerHTML = pResult;

    //Humidity
    var hum = document.getElementById("hum");
    var humidity = det.main.humidity;
    var hResult = `
        ${humidity}%
    `;
    hum.innerHTML = hResult;

    //Visibility
    var visib = document.getElementById("visib");
    var visibility = det.visibility;
    visibility = visibility / 1000;
    var vResult = `
        ${visibility} Km
    `;
    visib.innerHTML = vResult;

 /* ------------------------------------ */
    console.log(result);
    console.log(citydet);
    console.log(det);
}