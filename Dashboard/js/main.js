function updateTime() {
    var now = new Date();
    var hour = now.getUTCHours() + 2;
    var minute = now.getUTCMinutes();
    var second = now.getUTCSeconds();
    document.getElementById('time').innerHTML = hour + ':' + minute + ':' + second;

    var days = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
    var day = days[now.getUTCDay()];
    document.getElementById('day').innerHTML = day;

// Maak een nieuw date object aan
var datum = new Date();

// Haal de dag van de maand op
var dag = datum.getDate();

// Haal de maandnaam op
var maanden = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
var maand = maanden[datum.getMonth()];

// Toon de datum op de pagina
document.getElementById("datum").innerHTML =  dag + " " + maand + "";
}

setInterval(updateTime, 1000);


//Weerbericht//

const apiKey = 'd103474f09b04cf7637f8989be03a3f7';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&units=metric&appid=${apiKey}`;

$(document).ready(() => {
  $.ajax({
    url: apiUrl,
    success: (data) => {
      const temperature = Math.round(data.main.temp);

      $('.temperature').text(`${temperature}°C`);
    },
    error: () => {
      $('.temperature').text('Error');
    }
  });
});

<<<<<<< HEAD
//Zonsondegang//

=======
>>>>>>> 140cbb6840db72655517b58fc8656d47796fb0a4
const zonParagraaf = document.getElementById("zonParagraaf");
const zonParagraaf2 = document.getElementById("zonParagraaf2");
let data = fetch("https://api.sunrisesunset.io/json?lat=52.3910379&lng=4.8569872&timezone=UTC&date=today")
  .then(
    function(binnengekomendata){
        return binnengekomendata.json();
    }).then(
        function(echtedata){
            zonParagraaf.innerText = echtedata.results.sunrise;
            zonParagraaf2.innerText = echtedata.results.sunset;
        }
    );